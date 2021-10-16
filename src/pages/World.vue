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
        <q-btn icon="mdi-magnify-minus" flat dense @click="campaign.data.maps[config.data.map].zoom -= 0.5" />
        {{ campaign.data.maps[config.data.map].zoom }}
        <q-btn icon="mdi-magnify-plus" flat dense @click="campaign.data.maps[config.data.map].zoom += 0.5" />
      </div>
    </div>

    <div class="row justify-center q-mb-md">
      <hex-map :searchResults="results" />
    </div>

    <div v-if="$q.screen.gt.xs">
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
    </div>
    <div v-else>
      <div class="row q-mb-sm">
        <i-input class="col" label="Map Name" v-model="campaign.data.maps[config.data.map].name" />
      </div>
      <div class="row q-gutter-sm">
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
    </div>

    <!-- World data -->
    <div class="column q-mt-md">
      <div v-if="results != {}">
        <q-expansion-item
          class="q-mb-lg"
          v-for="(map, mID) in results"
          :key="mID"
          default-opened
          header-class="text-h4"
          :label="`Map: ${campaign.data.maps[+mID].name}`"
        >
          <i-input class="q-mb-sm" label="Map Notes" v-model="campaign.data.maps[+mID].notes" autogrow />

          <q-expansion-item
            class="q-mb-md rounded-borders q-pa-none col-grow"
            header-class="text-h6 card-bg"
            flat
            default-opened
            v-for="(cell, cID) in map"
            :key="cID"
            :label="`Cell: ${CellLabel(campaign.data.maps[+mID].cells[cID])}`"
          >
            <div class="q-pt-xs" />
            <q-card-section class="q-px-xs q-py-none" v-for="(itemIDs, oType) in cell" :key="oType">
              <div v-for="oID in itemIDs" :key="oID">
                <div v-if="oType === EMapItems.Locations">
                  <w-location
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID, oID)"
                  />
                </div>

                <div v-if="oType === EMapItems.Sites">
                  <w-site
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID, oID)"
                  />
                </div>

                <div v-if="oType === EMapItems.NPCs">
                  <w-npc
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID, oID)"
                  />
                </div>
              </div>
            </q-card-section>
          </q-expansion-item>
        </q-expansion-item>
      </div>
    </div>

    <q-dialog v-model="showMapConfig">
      <q-card>
        <q-card-section class="row card-bg items-center">
          <div class="col-grow">Map Config</div>
          <q-btn class="col-shrink" icon="close" flat dense @click="showMapConfig = false" />
        </q-card-section>
        <q-card-section>
          <q-input
            label="Height in px"
            type="number"
            v-model.number="campaign.data.maps[config.data.map].height"
            debounce="1000"
          />
          <q-input
            label="Width in px"
            type="number"
            v-model.number="campaign.data.maps[config.data.map].width"
            debounce="1000"
          />
          <q-input
            label="Hex Radius"
            type="number"
            v-model.number="campaign.data.maps[config.data.map].hexSize"
            debounce="1000"
          />
          <q-input
            label="Location Label Size"
            type="number"
            v-model.number="campaign.data.maps[config.data.map].fonts.label.size"
            debounce="1000"
          />
          <q-input
            label="Search Label Size"
            type="number"
            v-model.number="campaign.data.maps[config.data.map].fonts.search.size"
            debounce="1000"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { ISelectOpt, EMapItems, ISearchResults, ILocation, INPC, ISite } from 'src/components/models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import { CellLabel } from 'src/lib/world';

import HexMap from 'src/components/World/HexMap.vue';
import IInput from 'src/components/IInput.vue';
import WSite from 'src/components/World/WSite.vue';
import WNpc from 'src/components/World/WNpc.vue';
import WLocation from 'src/components/World/WLocation.vue';

export default defineComponent({
  name: 'World',
  components: { HexMap, IInput, WSite, WNpc, WLocation },
  setup() {
    const campaign = useCampaign();
    const config = useConfig();

    const searchText = ref('');
    const filters = ref([] as EMapItems[]);
    const showMapConfig = ref(false);

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

      EMapItems,
      filters,
      searchText,
      results,
      show,
      CellLabel,
    };
  },
});
</script>
