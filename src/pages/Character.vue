<template>
  <q-page padding>
    <!-- Name and XP -->
    <div class="row full-width items-center">
      <q-input
        class="col-grow"
        label="Name"
        v-model="campaign.data.character.name"
        outlined
        square
        dense
        debounce="750"
      />
      <q-input
        class="col-xs-2 col-sm-1 col-1"
        type="number"
        label="XP"
        v-model="campaign.data.character.xp"
        outlined
        square
        dense
        debounce="750"
      />
    </div>

    <!-- Momentum -->
    <div class="row justify-between items-center q-gutter-sm" v-if="$q.screen.gt.xs">
      <span class="col-shrink text-bold">Momentum</span>
      <resource-track class="col-grow" v-model="campaign.data.character.tracks.momentum" />
      <q-input
        class="col-xs-2 col-sm-1 col-1"
        label="Max"
        type="number"
        :max="10"
        :min="-6"
        v-model="campaign.data.character.tracks.momentum.max"
        dense
        borderless
        debounce="750"
      />
      <q-input
        class="col-xs-2 col-sm-1 col-1"
        label="Reset"
        type="number"
        :max="4"
        :min="0"
        v-model="campaign.data.character.tracks.momentum.reset"
        dense
        borderless
        debounce="750"
      />
      <q-btn class="col-shrink" icon="mdi-fire" @click="burnMomentum" flat dense>
        <q-tooltip>Burn momentum</q-tooltip>
      </q-btn>
    </div>
    <div v-else>
      <div class="row items-center">
        <span class="col-grow text-h6">Momentum</span>
        <q-input
          class="col-xs-2 col-sm-1 col-1"
          label="Max"
          type="number"
          :max="10"
          :min="-6"
          v-model="campaign.data.character.tracks.momentum.max"
          dense
          borderless
          debounce="750"
        />
        <q-input
          class="col-xs-2 col-sm-1 col-1"
          label="Reset"
          type="number"
          :max="4"
          :min="0"
          v-model="campaign.data.character.tracks.momentum.reset"
          dense
          borderless
          debounce="750"
        />
        <q-btn class="col-shrink" icon="mdi-fire" @click="burnMomentum" flat dense>
          <q-tooltip>Burn momentum</q-tooltip>
        </q-btn>
      </div>
      <resource-track class="row full-width" v-model="campaign.data.character.tracks.momentum" />
    </div>

    <q-separator />

    <!-- Tracks -->
    <div class="row justify-between items-center q-gutter-sm q-pt-xs q-pb-xs" v-if="$q.screen.gt.xs">
      <span class="col-shrink text-bold">Health</span>
      <resource-track class="col-grow" v-model="campaign.data.character.tracks.health" />
      <q-separator vertical />

      <span class="col-shrink text-bold">Spirit</span>
      <resource-track class="col-grow" v-model="campaign.data.character.tracks.spirit" />
      <q-separator vertical />

      <span class="col-shrink text-bold">Supply</span>
      <resource-track class="col-grow" v-model="campaign.data.character.tracks.supply" />
    </div>
    <div v-else>
      <div class="row q-gutter-sm justify-between items-center">
        <span class="col-2 text-bold">Health</span>
        <resource-track class="col-grow" v-model="campaign.data.character.tracks.health" />
      </div>

      <div class="row q-gutter-sm justify-between items-center">
        <span class="col-2 text-bold">Spirit</span>
        <resource-track class="col-grow" v-model="campaign.data.character.tracks.spirit" />
      </div>

      <div class="row q-gutter-sm justify-between items-center">
        <span class="col-2 text-bold">Supply</span>
        <resource-track class="col-grow" v-model="campaign.data.character.tracks.supply" />
      </div>
    </div>

    <q-separator />

    <!-- Stats -->
    <stats class="q-mt-md" v-model="campaign.data.character.stats" />
    <i-input class="q-mt-md q-mb-md" label="Gear &amp; Notes" v-model="campaign.data.character.gear" autogrow />

    <q-separator />

    <!-- Assets -->
    <div class="text-h4 sf-header text-center q-mt-md q-mb-sm" id="assets">
      Assets<q-btn icon="add_circle" flat dense @click="showAssetSelect = true" />
    </div>

    <div class="row assets-container" v-if="$q.screen.gt.sm">
      <div class="col left-assets q-mr-xs">
        <div v-for="(a, i) in campaign.data.character.assets" :key="i">
          <asset class="q-mb-sm" v-if="i % 2 == 0" v-model="campaign.data.character.assets[i]">
            <template v-slot:append>
              <q-btn icon="delete" flat dense @click="removeAsset(i)" v-if="config.data.edit">
                <q-tooltip>Remove asset</q-tooltip>
              </q-btn>
            </template>
          </asset>
        </div>
      </div>

      <div class="col right-assets q-ml-xs">
        <div v-for="(a, i) in campaign.data.character.assets" :key="i">
          <asset class="q-mb-sm" v-if="i % 2 != 0" v-model="campaign.data.character.assets[i]">
            <template v-slot:append>
              <q-btn icon="delete" flat dense @click="removeAsset(i)" v-if="config.data.edit">
                <q-tooltip>Remove asset</q-tooltip>
              </q-btn>
            </template>
          </asset>
        </div>
      </div>
    </div>
    <div class="column assets-container" v-else>
      <div v-for="(a, i) in campaign.data.character.assets" :key="i">
        <asset class="q-mb-sm" v-model="campaign.data.character.assets[i]">
          <template v-slot:append>
            <q-btn icon="delete" flat dense @click="removeAsset(i)" v-if="config.data.edit">
              <q-tooltip>Remove asset</q-tooltip>
            </q-btn>
          </template>
        </asset>
      </div>
    </div>

    <q-separator />

    <!-- Bonds -->
    <div class="text-h4 text-center q-mt-md q-mb-sm">Bonds</div>
    <progress-track
      class="q-mb-md"
      v-model="campaign.data.character.bonds"
      :showDifficulty="false"
      :setDifficulty="5"
      :showMenaceBtn="false"
    />

    <q-separator />

    <div class="row">
      <!-- Debilities -->
      <div class="col-12 text-h4 text-center q-pt-md">Debilities</div>
      <div class="col-4">
        <span class="row text-h6">Conditions</span>
        <q-checkbox
          label="Wounded"
          v-model="campaign.data.character.debilities.conditions.wounded"
          @click="markDebility"
        />
        <q-checkbox
          label="Shaken"
          v-model="campaign.data.character.debilities.conditions.shaken"
          @click="markDebility"
        />
        <q-checkbox
          label="Unprepared"
          v-model="campaign.data.character.debilities.conditions.unprepared"
          @click="markDebility"
        />
        <q-checkbox
          label="Encumbered"
          v-model="campaign.data.character.debilities.conditions.encumbered"
          @click="markDebility"
        />
      </div>

      <div class="col-4">
        <span class="row text-h6">Banes</span>
        <q-checkbox label="Maimed" v-model="campaign.data.character.debilities.banes.maimed" @click="markDebility" />
        <q-checkbox
          label="Corrupted"
          v-model="campaign.data.character.debilities.banes.corrupted"
          @click="markDebility"
        />
      </div>

      <div class="col-4">
        <span class="row text-h6">Burdens</span>
        <q-checkbox label="Cursed" v-model="campaign.data.character.debilities.burdens.cursed" @click="markDebility" />
        <q-checkbox
          label="Tormented"
          v-model="campaign.data.character.debilities.burdens.tormented"
          @click="markDebility"
        />
      </div>
    </div>

    <assets v-model="showAssetSelect" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import ResourceTrack from 'src/components/Tracks/ResourceTrack.vue';
import ProgressTrack from 'src/components/Tracks/ProgressTrack.vue';
import Stats from 'src/components/Stats/Stats.vue';
import Asset from 'src/components/Assets/Asset.vue';
import Assets from 'src/components/Assets/Assets.vue';
import IInput from 'src/components/Widgets/IInput.vue';

export default defineComponent({
  name: 'Character',
  components: { ResourceTrack, Stats, ProgressTrack, Asset, Assets, IInput },
  setup() {
    const campaign = useCampaign();

    const removeAsset = (index: number) => campaign.data.character.assets.splice(index, 1);
    const showAssetSelect = ref(false);

    const markDebility = () => {
      let marked = 0;
      Object.values(campaign.data.character.debilities.conditions).forEach((v) => {
        if (v) {
          marked++;
        }
      });
      Object.values(campaign.data.character.debilities.banes).forEach((v) => {
        if (v) {
          marked++;
        }
      });
      Object.values(campaign.data.character.debilities.burdens).forEach((v) => {
        if (v) {
          marked++;
        }
      });

      if (marked === 1) {
        campaign.data.character.tracks.momentum.reset = 1;
      } else if (marked > 1) {
        campaign.data.character.tracks.momentum.reset = 0;
      } else {
        campaign.data.character.tracks.momentum.reset = 2;
      }

      campaign.data.character.tracks.momentum.max = 10 - marked;
    };

    const burnMomentum = () => {
      const n = +campaign.data.character.tracks.momentum.reset;
      campaign.data.character.tracks.momentum.value = n;
    };

    const config = useConfig();

    return {
      campaign,

      removeAsset,
      showAssetSelect,

      markDebility,

      burnMomentum,
      config,
    };
  },
});
</script>
