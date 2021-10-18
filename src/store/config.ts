import { defineStore } from 'pinia';
import { IConfig, IIndexItem } from 'components/models';
import { NewConfig } from 'src/lib/config';
import { db } from 'src/lib/db';
import { useCampaign } from './campaign';

export const useConfig = defineStore({
  id: 'config',

  state() {
    return {
      data: NewConfig(),
    };
  },

  actions: {
    async populateStore() {
      if ((await db.config.count()) > 0) {
        try {
          this.data = (await db.config.where('id').equals(1).first()) as IConfig;
          const campaign = useCampaign();
          if (!campaign.data.maps[this.data.map]) this.data.map = 0;
        } catch (err) {
          console.log(err);
        }
      } else {
        const conf = NewConfig();
        this.data = conf;
        db.config.put(conf).catch((err) => console.log(err));
      }
    },

    async save() {
      const storeCopy = JSON.parse(JSON.stringify(this.data)) as IConfig;
      await db.config.update(1, storeCopy).catch((err) => console.log(err));
    },

    async updateIndex() {
      const index = <IIndexItem[]>[];
      (await db.campaign.toArray()).forEach((c) => index.push({ name: c.name, id: c.id }));
      this.data.index = index;
    },
  },
});
