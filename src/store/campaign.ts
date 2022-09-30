import { defineStore } from 'pinia';
import { EMapItems, ICampaign, ILocation, INPC, ISite } from 'components/models';
import { NewCampaign } from 'src/lib/campaign';
import { useConfig } from './config';
import { db } from 'src/lib/db';
import { now } from 'src/lib/util';
import { exportFile } from 'quasar';

export const useCampaign = defineStore({
  id: 'campaign',

  state() {
    return {
      data: NewCampaign(),
    };
  },

  actions: {
    moveSite(index: number, from: { map: number; cell: string }, to: { map: number; cell: string }) {
      const o = JSON.parse(JSON.stringify(this.data.maps[from.map].cells[from.cell].sites[index])) as ISite;
      this.data.maps[to.map].cells[to.cell].sites.unshift(o);
      this.data.maps[from.map].cells[from.cell].sites.splice(index, 1);
    },

    moveLocation(index: number, from: { map: number; cell: string }, to: { map: number; cell: string }) {
      const o = JSON.parse(JSON.stringify(this.data.maps[from.map].cells[from.cell].locations[index])) as ILocation;
      this.data.maps[to.map].cells[to.cell].locations.unshift(o);
      this.data.maps[from.map].cells[from.cell].locations.splice(index, 1);
    },

    moveNPC(index: number, from: { map: number; cell: string }, to: { map: number; cell: string }) {
      const o = JSON.parse(JSON.stringify(this.data.maps[from.map].cells[from.cell].npcs[index])) as INPC;
      this.data.maps[to.map].cells[to.cell].npcs.unshift(o);
      this.data.maps[from.map].cells[from.cell].npcs.splice(index, 1);
    },

    removeObject(type: EMapItems, map: number, cell: string, index: number) {
      this.data.maps[map].cells[cell][type].splice(index, 1);
    },

    appendToJournal(index: number, text: string) {
      this.data.journal[index].content += text;
    },

    exportJournal() {
      const doc = document.implementation.createHTMLDocument('Journal');

      this.data.journal.forEach((j) => {
        const div = doc.createElement('div');
        div.classList.add('entry');
        div.innerHTML = `<h3>${j.title}</h3><div class="content">${j.content}</div>`;

        doc.body.prepend(div);
      });

      const text = new XMLSerializer().serializeToString(doc);
      const blob = new Blob([text], { type: 'text/html' });
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false,
      });
      const anchor = document.createElement('a');

      const date = new Date();
      anchor.download = `Ironsworn-journal-${date.getTime() / 1000}.html`;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.dataset.downloadurl = ['text/html', anchor.download, anchor.href].join(':');

      anchor.dispatchEvent(event);
    },

    async populateStore() {
      const config = useConfig();
      await config.populateStore();

      if ((await db.campaign.count()) > 0 && config.data.current !== '') {
        try {
          await this.load(config.data.current);
        } catch (err) {
          console.log(err);
        }
      } else {
        await this.new();
        await config.updateIndex();
      }
    },

    async new() {
      const newCam = NewCampaign();
      this.data = newCam;

      const config = useConfig();
      config.data.current = this.data.id;
      config.data.index.push({ name: this.data?.name, id: this.data.id });

      const storeCopy = JSON.parse(JSON.stringify(this.data)) as ICampaign;
      await db.campaign.put(storeCopy).catch((err) => console.log(err));
    },

    async save() {
      const storeCopy = JSON.parse(JSON.stringify(this.data)) as ICampaign;
      await db.campaign.update(this.data.id, storeCopy).catch((err) => console.log(err));

      const config = useConfig();
      await config.updateIndex();
    },

    async load(id: string) {
      try {
        const campaign = await db.campaign.get(id);
        this.data = campaign as ICampaign;
      } catch (err) {
        console.log(err);
      }
    },

    async delete(id: string) {
      try {
        // Remove from database
        await db.campaign.delete(id);

        // Load first campaign or create a new one
        if ((await db.campaign.count()) > 0) {
          await db.campaign
            .toCollection()
            .first()
            .then(async (char) => {
              await this.load(char?.id as string);

              // Adjust index
              const config = useConfig();
              config.data.current = char?.id as string;
              await config.updateIndex();
            });
        } else {
          await this.new();
        }
      } catch (err) {
        console.log(err);
      }
    },

    async exportData() {
      const data = JSON.stringify(await db.campaign.toArray());
      const status = exportFile(`Ironsworn-campaign-${now()}.json`, data, {
        mimeType: 'application/json',
      });
      if (status != true) alert(status);
    },

    async loadData(file: File) {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const campaigns = JSON.parse(ev.target?.result as string) as ICampaign[];
        try {
          await db.campaign.bulkPut(campaigns);
        } catch (err) {
          console.log(err);
        }
      };
      reader.readAsText(file);

      // Repopulate store with updated content
      await this.populateStore();
    },
  },
});
