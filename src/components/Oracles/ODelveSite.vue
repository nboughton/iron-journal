<template>
  <div class="row items-center">
    <q-select class="col-grow" label="Theme" :options="oracleOpts(SiteNature.Theme)" v-model="data.theme" dense />
    <q-btn class="col-shrink" icon="mdi-dice-6" flat dense @click="roll.Theme" />
    <q-select class="col-grow" label="Domain" :options="oracleOpts(SiteNature.Domain)" v-model="data.domain" dense />
    <q-btn class="col-shrink" icon="mdi-dice-6" flat dense @click="roll.Domain" />
  </div>
  <o-input label="Name" v-model="data.name" @roll="roll.Name" />
  <o-input label="Feature" v-model="data.feature" @roll="roll.Feature" />
  <o-input label="Danger" v-model="data.danger" @roll="roll.Danger" />
  <o-btns clear @clear="btns.Clear" initial @initial="btns.Initial" save @save="btns.Save" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import { IOracle } from '../models';

import { useCampaign } from 'src/store/campaign';

import { SiteName } from 'src/lib/oracles/delve/site_name';
import {
  DomainDangers,
  DomainFeatures,
  SiteNature,
  ThemeDangers,
  ThemeFeatures,
} from 'src/lib/oracles/delve/site_nature';
import { oracleRoll } from 'src/lib/roll';
import { oracleOpts } from 'src/lib/util';
import { NewSite } from 'src/lib/world';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'ODelveSite',
  components: { OInput, OBtns },
  setup() {
    const data = ref({
      theme: '',
      domain: '',
      name: '',
      feature: '',
      danger: '',
    });

    const features = computed((): IOracle => {
      const o: IOracle = {
        name: 'Features',
        d: 100,
        table: [],
      };

      if (!data.value.theme || !data.value.domain) return o;

      o.table.push(...ThemeFeatures[data.value.theme].table, ...DomainFeatures[data.value.domain].table);
      return o;
    });

    const dangers = computed((): IOracle => {
      const o: IOracle = {
        name: 'Dangers',
        d: 100,
        table: [],
      };

      if (!data.value.theme || !data.value.domain) return o;

      o.table.push(...ThemeDangers[data.value.theme].table, ...DomainDangers[data.value.domain].table, {
        match: [46, 100],
        text: 'No danger',
      });

      return o;
    });

    const roll = {
      Theme: () => (data.value.theme = oracleRoll(SiteNature.Theme)),
      Domain: () => (data.value.domain = oracleRoll(SiteNature.Domain)),
      Name: () => {
        let format = oracleRoll(SiteName.Format);

        const matches = ['Description', 'Place', 'Detail', 'Namesake'];
        matches.forEach((m) => {
          format = format.replace(m, oracleRoll(SiteName[m]));
        });

        format = format.replace(/[\[\]]/g, '');
        data.value.name = format;
      },
      Feature: () => (data.value.feature = oracleRoll(features.value)),
      Danger: () => (data.value.danger = oracleRoll(dangers.value)),
    };

    const btns = {
      Clear: () => {
        data.value = {
          theme: '',
          domain: '',
          name: '',
          feature: '',
          danger: '',
        };
      },
      Initial: () => {
        btns.Clear();
        roll.Theme();
        roll.Domain();
        roll.Name();
      },
      Save: (args: { map: number; cell: number }) => {
        const s = NewSite();
        s.name = data.value.name;
        s.theme = data.value.theme;
        s.domain = data.value.domain;
        useCampaign().data.maps[args.map].cells[args.cell].sites.unshift(s);
      },
    };
    return {
      data,
      roll,
      btns,
      oracleOpts,
      features,
      dangers,

      SiteNature,
    };
  },
});
</script>
