<template>
  <q-page padding>
    <!-- content -->
    <div class="row items-center q-mb-md q-gutter-sm">
      <q-btn
        class="col-shrink"
        flat
        dense
        icon="add_circle"
        @click="
          mapLoad = NewMapLoad();
          mapLoad.show = true;
        "
      />
      <q-select
        class="col"
        label="Map"
        v-model="config.data.map"
        :options="mapOpts"
        emit-value
        map-options
        standout="bg-blue-grey text-white"
        :input-style="{ color: '#ECEFF4' }"
        dense
      />
      <q-btn
        class="col-shrink"
        flat
        dense
        icon="delete"
        v-if="config.data.edit && campaign.data.maps.length > 1"
        @click="removeMap"
      />
      <div class="col-shrink">
        <q-btn
          icon="mdi-magnify-minus"
          flat
          dense
          @click="if (campaign.data.maps[config.data.map].zoom > 1) campaign.data.maps[config.data.map].zoom -= 0.5;"
        />
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
        <q-btn class="col-shrink" flat dense icon="mdi-cog" @click="openMapConfig" />
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
        <q-btn class="col-shrink" flat dense icon="mdi-cog" @click="openMapConfig" />
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
          :label="campaign.data.maps[+mID].name"
        >
          <i-input class="q-mb-sm" label="Map Notes" v-model="campaign.data.maps[+mID].notes" autogrow />

          <q-expansion-item
            class="q-mb-md rounded-borders q-pa-none col-grow"
            header-class="text-h6 card-bg"
            flat
            default-opened
            v-for="(cell, cID) in map"
            :key="cID"
            :label="CellLabel(campaign.data.maps[+mID].cells[cID], cID as string).label"
          >
            <div class="q-pt-xs" />
            <q-card-section class="q-px-xs q-py-none" v-for="(itemIDs, oType) in cell" :key="oType">
              <div v-for="oID in itemIDs" :key="oID">
                <div v-if="oType === EMapItems.Locations">
                  <w-location
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID as string, oID)"
                  />
                </div>

                <div v-if="oType === EMapItems.Sites">
                  <w-site
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID as string, oID)"
                  />
                </div>

                <div v-if="oType === EMapItems.NPCs">
                  <w-npc
                    v-model="campaign.data.maps[+mID].cells[cID][oType][+oID]"
                    @delete="campaign.removeObject(oType, +mID, cID as string, oID)"
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

        <q-card-section class="text-justify">
          Warning: Changing hex radius/width/height values will change the positioning of any locations you currently
          have saved. You should aim to have your hexes configured before you start adding locations.
        </q-card-section>

        <q-card-section class="row justify-between q-gutter-sm">
          <div class="col">
            <q-input label="Height (px)" type="number" v-model.number="mapConfig.height" />
            <q-input label="Width (px)" type="number" v-model.number="mapConfig.width" />
            <q-input label="Location Label Size" type="number" v-model.number="mapConfig.locLabel" />
            <q-input label="Search Label Size" type="number" v-model.number="mapConfig.srcLabel" />
          </div>
          <div class="col">
            <q-input label="Hex Radius (px)" type="number" v-model.number="mapConfig.hex" :min="10" />
            <q-input label="Hexes (wide)" type="number" v-model.number="mapConfig.hexW" :min="0" />
            <q-input label="Hexes (high)" type="number" v-model.number="mapConfig.hexH" :min="0" />
            <q-toggle label="Flat hexes" v-model="mapConfig.flat" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" flat label="Save" @click="saveMapConfig" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="mapLoad.show">
      <q-card class="card-bg">
        <q-card-section class="text-center text-bold bg-secondary">Add Map</q-card-section>

        <q-card-section>
          <q-input class="q-mb-sm" label="Name" v-model="mapLoad.name" dense />
          <q-file class="q-mb-sm" v-model="mapLoad.image" dense label="Select Image" accept="image/*" />
          <q-input class="q-mb-sm" label="Height (px)" type="number" v-model.number="mapLoad.height" dense />
          <q-input class="q-mb-sm" label="Width (px)" type="number" v-model.number="mapLoad.width" dense />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="Load" flat color="primary" @click="loadMap" />
          <q-btn label="Save" flat color="primary" @click="saveMap" :disable="!mapLoad.loaded" />
          <q-btn label="Close" flat color="warning" dense @click="mapLoad.show = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { ISelectOpt, EMapItems, ISearchResults, ILocation, INPC, ISite } from 'src/components/models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import { CellLabel, NewMap } from 'src/lib/world';
import { estimateHexH, estimateHexW } from 'src/lib/util';

import HexMap from 'src/components/World/HexMap.vue';
import IInput from 'src/components/Widgets/IInput.vue';
import WSite from 'src/components/World/WSite.vue';
import WNpc from 'src/components/World/WNpc.vue';
import WLocation from 'src/components/World/WLocation.vue';

export default defineComponent({
  name: 'World',
  components: { HexMap, IInput, WSite, WNpc, WLocation },
  setup() {
    const campaign = useCampaign();
    const config = useConfig();

    // Go back to the default map if need be
    if (!campaign.data.maps[config.data.map]) config.data.map = 0;

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

    const NewMapLoad = () => {
      return {
        show: false,
        image: null,
        loaded: false,
        name: '',
        height: 0,
        width: 0,
      };
    };

    const mapLoad = ref(NewMapLoad());
    let mapData = NewMap('');

    const loadMap = () => {
      // load and get h/w
      const f: File = mapLoad.value.image as unknown as File;

      const reader = new FileReader();
      reader.onload = (ev) => {
        const data = ev.target?.result as string;

        const img = new Image();
        img.src = data;
        void img.decode().then(() => {
          mapData = NewMap(data, mapLoad.value.name);
          mapLoad.value.height = img.naturalHeight;
          mapLoad.value.width = img.naturalWidth;
          mapLoad.value.loaded = true;
        });
      };

      reader.readAsDataURL(f);
    };

    const saveMap = () => {
      // save it to the store
      mapData.height = mapLoad.value.height;
      mapData.width = mapLoad.value.width;
      mapData.hexSize = 20;

      campaign.data.maps.push(mapData);
      mapLoad.value.show = false;
    };

    const removeMap = () => {
      const index = config.data.map;
      config.data.map = 0;
      campaign.data.maps.splice(index, 1);
    };

    const mapConfig = ref({
      height: 0,
      width: 0,
      hex: 0,
      hexW: 0,
      hexH: 0,
      flat: false,
      locLabel: 0,
      srcLabel: 0,
    });
    const openMapConfig = () => {
      mapConfig.value.height = campaign.data.maps[config.data.map].height;
      mapConfig.value.width = campaign.data.maps[config.data.map].width;
      mapConfig.value.hex = campaign.data.maps[config.data.map].hexSize;
      mapConfig.value.hexW = campaign.data.maps[config.data.map].hexW
        ? (campaign.data.maps[config.data.map].hexW as number)
        : estimateHexW(campaign.data.maps[config.data.map].width, campaign.data.maps[config.data.map].hexSize);
      mapConfig.value.hexH = campaign.data.maps[config.data.map].hexH
        ? (campaign.data.maps[config.data.map].hexH as number)
        : estimateHexH(campaign.data.maps[config.data.map].height, campaign.data.maps[config.data.map].hexSize);
      mapConfig.value.flat = campaign.data.maps[config.data.map].hexFlat || false;
      mapConfig.value.locLabel = campaign.data.maps[config.data.map].fonts.label.size;
      mapConfig.value.srcLabel = campaign.data.maps[config.data.map].fonts.search.size;
      showMapConfig.value = true;
    };
    const saveMapConfig = () => {
      // do major values in one go
      Object.assign(campaign.data.maps[config.data.map], {
        height: mapConfig.value.height,
        width: mapConfig.value.width,
        hexSize: mapConfig.value.hex,
        hexW: mapConfig.value.hexW,
        hexH: mapConfig.value.hexH,
        hexFlat: mapConfig.value.flat,
      });
      campaign.data.maps[config.data.map].fonts.label.size = mapConfig.value.locLabel;
      campaign.data.maps[config.data.map].fonts.search.size = mapConfig.value.srcLabel;
    };

    return {
      campaign,
      config,
      mapOpts,
      NewMapLoad,
      showMapConfig,
      openMapConfig,
      saveMapConfig,
      mapConfig,
      mapLoad,
      loadMap,
      saveMap,
      removeMap,

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
