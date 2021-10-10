<template>
  <q-page padding>
    <!-- content -->
    <div class="row items-center q-mb-md q-gutter-sm">
      <q-btn class="col-shrink" flat dense icon="add_circle" @click="addMap" />
      <q-select
        class="col"
        label="Map"
        v-model="campaign.data.maps[config.data.map].name"
        :options="mapOpts"
        emit-value
        map-options
        standout="bg-blue-grey text-white"
        :input-style="{ color: '#ECEFF4' }"
        dense
      />
      <div class="col-shrink">
        <q-btn icon="mdi-magnify-minus" flat dense @click="zoom -= 0.5" />
        {{ zoom }}
        <q-btn icon="mdi-magnify-plus" flat dense @click="zoom += 0.5" />
      </div>
    </div>

    <div class="row justify-center q-mb-md">
      <hex-map :zoom="zoom" :searchResults="results" />
    </div>

    <div class="row q-gutter-sm">
      <i-input class="col" label="Map Name" v-model="campaign.data.maps[config.data.map].name" />
      <i-input class="col" label="Search" v-model="searchText" clearable />
      <q-select
        class="col"
        label="Filters"
        v-model="filters"
        :options="Object.values(EMapItems)"
        multiple
        clearable
        standout="bg-blue-grey text-white"
        :input-style="{ color: '#ECEFF4' }"
        dense
      />
      <q-btn class="col-shrink" flat dense icon="mdi-cog" @click="showMapConfig = true" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { ISelectOpt, EMapItems, ISearchResults, ILocation, INPC, ISite } from 'src/components/models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import HexMap from 'src/components/World/HexMap.vue';
import IInput from 'src/components/IInput.vue';

export default defineComponent({
  name: 'World',
  components: { HexMap, IInput },
  setup() {
    const campaign = useCampaign();
    const config = useConfig();

    const searchText = ref('');
    const filters = ref([] as EMapItems[]);
    const showMapConfig = ref(false);
    const zoom = ref(1);

    const mapOpts = computed((): ISelectOpt[] => {
      const out: ISelectOpt[] = [];
      campaign.data.maps.forEach((m, i) => {
        out.push({
          label: m.name,
          value: i,
        });
      });
      return out;
    });

    const addMap = () => {
      // something happens here
    };

    const applyFilters = computed((): boolean => {
      return filters.value != null && filters.value.length > 0;
    });

    const t = (s: string): boolean => {
      if (searchText.value === null) return true;
      return RegExp(searchText.value, 'i').test(s);
    };

    const results = computed((): ISearchResults => {
      const res = <ISearchResults>{};
      const ensureData = (sector: number, cell: string, oType: string) => {
        if (!res[sector]) res[sector] = {};
        if (!res[sector][cell]) res[sector][cell] = {};
        if (!res[sector][cell][oType]) res[sector][cell][oType] = [];
      };

      campaign.data.maps.forEach((map, mapI) => {
        Object.keys(map.cells).forEach((cellI) => {
          Object.values(EMapItems).forEach((oType) => {
            for (let i = 0; i < map.cells[cellI][oType].length; i++) {
              switch (oType) {
                case EMapItems.Locations:
                  if (show.locations(map.cells[cellI][oType][i])) {
                    ensureData(mapI, cellI, oType);
                    res[mapI][cellI][oType].push(i);
                  }
                  break;

                case EMapItems.NPCs:
                  if (show.npcs(map.cells[cellI][oType][i])) {
                    ensureData(mapI, cellI, oType);
                    res[mapI][cellI][oType].push(i);
                  }
                  break;

                case EMapItems.Sites:
                  if (show.sites(map.cells[cellI][oType][i])) {
                    ensureData(mapI, cellI, oType);
                    res[mapI][cellI][oType].push(i);
                  }
                  break;

                default:
                  break;
              }
            }
          });
        });
      });

      return res;
    });

    const show = {
      locations: (o: ILocation): boolean => {
        if (applyFilters.value && !filters.value.includes(EMapItems.Locations)) return false;
        return t(o.name) || t(o.descriptor);
      },
      npcs: (o: INPC): boolean => {
        if (applyFilters.value && !filters.value.includes(EMapItems.NPCs)) return false;
        return t(o.name) || t(o.kin) || t(o.notes);
      },
      sites: (o: ISite): boolean => {
        if (applyFilters.value && !filters.value.includes(EMapItems.Sites)) return false;
        return t(o.name);
      },
    };

    return {
      campaign,
      config,
      mapOpts,
      addMap,
      showMapConfig,
      zoom,

      EMapItems,
      filters,
      searchText,
      results,
      show,
    };
  },
});
</script>
