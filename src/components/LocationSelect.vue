<template>
  <div class="row items-center">
    <div class="col">
      <div class="row">
        <q-select
          class="col-grow"
          label="Map"
          v-model="mapSelect"
          :options="sOpts"
          map-options
          emit-value
          borderless
          dense
        />
        <q-select
          class="col-grow"
          label="Cell"
          v-model="cellSelect"
          :options="cOpts"
          map-options
          emit-value
          borderless
          dense
        />
      </div>
    </div>
    <q-btn :icon="icon" flat dense @click="$emit('selected', { map: mapSelect, cell: cellSelect })" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { ECellStatus, ISelectOpt } from './models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import { CellLabel } from 'src/lib/world';

export default defineComponent({
  name: 'LocationSelect',
  props: {
    icon: {
      type: String,
      default: 'save',
    },
  },
  emits: ['selected'],
  setup() {
    const campaign = useCampaign();
    const config = useConfig();

    const mapSelect = ref(config.data.map);
    const sOpts = computed((): ISelectOpt[] => {
      let opts: ISelectOpt[] = [];
      campaign.data.maps.forEach((s, si) => {
        opts.push({
          label: s.name,
          value: si,
        });
      });
      return opts;
    });

    const cellSelect = ref('');
    const cOpts = computed((): ISelectOpt[] => {
      let opts: ISelectOpt[] = [];
      Object.keys(campaign.data.maps[mapSelect.value].cells).forEach((c) => {
        if (campaign.data.maps[mapSelect.value].cells[c].stat === ECellStatus.Location) {
          const label = CellLabel(campaign.data.maps[mapSelect.value].cells[c]);
          opts.push({
            label: label,
            value: c,
          });
        }
      });
      if (opts.length == 0) {
        opts.push({
          label: 'Create a location to save data',
          value: '__no-data__',
        });
      }
      return opts;
    });

    return {
      mapSelect,
      sOpts,

      cellSelect,
      cOpts,
    };
  },
});
</script>
