<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h6 norse">
          IRON JOURNAL <span class="title-pipe">|</span> IRONSWORN
          <!--q-input input-class="text-h5" v-model="campaign.data.name" borderless /-->
        </q-toolbar-title>

        <q-btn v-if="config.data.saving" icon="save" flat dense disable />

        <q-btn icon="mdi-dice-6" flat dense @click="showRoller = !showRoller">
          <q-tooltip>Toggle Dice Roller</q-tooltip>
        </q-btn>

        <q-toggle icon="delete" v-model="config.data.edit">
          <q-tooltip>Toggle Delete buttons</q-tooltip>
        </q-toggle>

        <q-btn dense flat icon="edit_note" @click="toggleRightDrawer">
          <q-tooltip>Toggle right drawer for Oracles, Moves and Journal</q-tooltip>
        </q-btn>
      </q-toolbar>

      <q-tabs align="center" dense>
        <q-route-tab to="/campaign" label="Campaign" />
        <q-route-tab v-if="config.data.journalTab" to="/journal" label="Journal" />
        <q-route-tab to="/" :label="campaign.data.character.name" />
        <q-route-tab to="/challenges" label="Challenges" />
        <q-route-tab to="/world" label="World" />
      </q-tabs>
    </q-header>

    <q-drawer elevated overlay v-model="leftDrawerOpen" side="left" bordered>
      <!-- left drawer content -->
      <q-btn class="full-width" label="New Campaign" flat @click="addCampaign" icon-right="add" />
      <q-list>
        <q-item class="items-center" v-for="(item, index) in config.data.index" :key="index" clickable v-ripple>
          <q-item-section @click="config.data.current = item.id" class="row full-width no-wrap">
            {{ item.name }}
          </q-item-section>
          <q-item-section class="col-shrink" v-if="config.data.index.length > 1 && config.data.edit">
            <q-btn icon="delete" flat dense @click="removeCampaign(item.id)" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator size="lg" />

      <q-list class="text-primary">
        <q-item clickable v-ripple @click="campaign.exportData">
          <q-item-section avatar>
            <q-icon name="download" />
          </q-item-section>
          <q-item-section>
            Export Campaign Data
            <q-tooltip>Downlaod your current campaign database as a .json file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="showDataLoad = true">
          <q-item-section avatar>
            <q-icon name="upload" />
          </q-item-section>
          <q-item-section>
            Load Campaign Data
            <q-tooltip>Load a previously exported campaign database</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item clickable v-ripple @click="customAssets.exportData">
          <q-item-section avatar>
            <q-icon name="download" />
          </q-item-section>
          <q-item-section>
            Export Custom Assets
            <q-tooltip>Download your custom Assets as a .json file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="showAssetLoad = true">
          <q-item-section avatar>
            <q-icon name="upload" />
          </q-item-section>
          <q-item-section>
            Load Custom Assets
            <q-tooltip>Load a custom Assets file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item clickable v-ripple @click="customOracles.exportData">
          <q-item-section avatar>
            <q-icon name="download" />
          </q-item-section>
          <q-item-section>
            Export Custom Oracles
            <q-tooltip>Download your custom Oracles as a .json file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="showOracleLoad = true">
          <q-item-section avatar>
            <q-icon name="upload" />
          </q-item-section>
          <q-item-section>
            Load Custom Oracles
            <q-tooltip>Load a custom Oracles file</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item clickable v-ripple @click="campaign.exportJournal">
          <q-item-section avatar>
            <q-icon name="download" />
          </q-item-section>
          <q-item-section>
            Export Journal
            <q-tooltip>Export Journal as HTML</q-tooltip>
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item>
          <q-item-section avatar>
            <q-toggle v-model="config.data.journalTab" label="Use Journal Tab" />
          </q-item-section>
        </q-item>

        <q-separator size="lg" />

        <q-item clickable v-ripple @click="showAbout = true">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            About
            <q-tooltip>About this app</q-tooltip>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" :width="width" bordered id="rightDrawer">
      <!-- right drawer content -->
      <div class="row">
        <q-expansion-item class="col-12" id="oracles">
          <template v-slot:header>
            <div class="text-h5 col-grow">ORACLES</div>
          </template>
          <oracles class="q-pl-sm q-pr-sm" />
        </q-expansion-item>
      </div>

      <div class="row">
        <q-expansion-item class="col-12" id="moves">
          <template v-slot:header>
            <div class="text-h5 col-grow">MOVES</div>
          </template>
          <moves class="q-pl-sm q-pr-sm" />
        </q-expansion-item>
      </div>

      <div id="journal" />
      <journal v-if="!config.data.journalTab" />

      <q-fab color="primary" icon="keyboard_arrow_left" direction="left" class="journal-to-top">
        <q-fab-action color="primary" @click="scrollTo('oracles')" icon="mdi-dice-multiple">
          <q-tooltip>Scroll to Oracles</q-tooltip>
        </q-fab-action>
        <q-fab-action color="primary" @click="scrollTo('moves')" icon="mdi-file-document-multiple">
          <q-tooltip>Scroll to Moves</q-tooltip>
        </q-fab-action>
        <q-fab-action v-if="!config.data.journalTab" color="primary" @click="scrollTo('journal')" icon="mdi-notebook">
          <q-tooltip>Scroll to Journal</q-tooltip>
        </q-fab-action>
      </q-fab>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="showDataLoad">
      <q-card>
        <q-card-section class="text-center text-bold bg-secondary"> Load Character Database </q-card-section>

        <q-card-section class="text-subtitle">
          Please bear in mind that this data will overwrite any existing versions of the same Campaigns
        </q-card-section>

        <q-card-section>
          <q-file
            v-model="fileToLoad"
            standout="bg-blue-grey text-white"
            :input-style="{ color: '#ECEFF4' }"
            label="Select File"
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="load" color="primary" @click="loadData" flat />
          <q-btn label="close" color="warning" @click="showDataLoad = false" flat />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showOracleLoad" :maximized="$q.platform.is.mobile">
      <q-card>
        <q-card-section class="text-center text-bold bg-secondary"> Load Custom Oracles </q-card-section>

        <q-card-section class="text-subtitle text-center">
          <q-avatar icon="warning" size="xl" color="warning" />
          <div class="text-justify">
            Warning: loading user supplied oracle data can be risky. Iron Journal attempts to strip any potentially
            malicious code (i.e script tags in oracles) but cannot absolutely guarantee the safety of any data loaded.
            Please check over the contents of the Oracle file before loading it. And always ensure you only load data
            from sources you trust.
          </div>
        </q-card-section>

        <q-card-section>
          <q-file
            v-model="oraclesToLoad"
            standout="bg-blue-grey text-white"
            :input-style="{ color: '#ECEFF4' }"
            label="Select File"
            accept=".json"
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="load" color="primary" @click="loadOracleData" flat />
          <q-btn label="close" color="warning" @click="showOracleLoad = false" flat />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showAssetLoad">
      <q-card>
        <q-card-section class="text-center text-bold bg-secondary"> Load Custom Assets </q-card-section>

        <q-card-section class="text-subtitle text-center">
          <q-icon name="warning" size="xl" color="warning" />
          <div class="text-justify">
            Warning: loading user supplied asset data can be risky. Iron Journal attempts to strip any potentially
            malicious code (i.e script tags in asset items) but cannot absolutely guarantee the safety of any data
            loaded. Please check over the contents of the Asset file before loading it. And always ensure you only load
            data from sources you trust.
          </div>
        </q-card-section>

        <q-card-section>
          <q-file
            v-model="assetsToLoad"
            standout="bg-blue-grey text-white"
            :input-style="{ color: '#ECEFF4' }"
            label="Select File"
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn label="load" color="primary" @click="loadAssetData" flat />
          <q-btn label="close" color="warning" @click="showAssetLoad = false" flat />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showAbout">
      <q-card class="card-bg">
        <q-card-section class="row bg-secondary text-h6 justify-between">
          <div class="col-grow">About</div>
          <q-btn class="col-shrink" flat dense icon="close" @click="showAbout = false" />
        </q-card-section>

        <q-card-section class="about-text text-justify">
          <div class="q-my-sm">
            Ironsworn and Ironsworn Delve are &copy;
            <a href="https://www.ironswornrpg.com">Shawn Tomkin</a>
          </div>

          <div class="q-my-sm">
            Code &copy;
            <a href="https://twitter.com/tiberianpun">Nick Boughton</a>, 2021
          </div>

          <div class="q-my-sm">
            Made with icons from <a href="https://game-icons.net/">game-icons.net</a> by
            <a href="https://lorcblog.blogspot.com/">Lorc</a> and <a href="https://delapouite.com/">Delapouite</a>
          </div>

          <div class="q-my-sm">
            If you like this app and want to say thanks you can
            <a href="https://ko-fi.com/tiberianpun">buy me a coffee</a>
          </div>

          <div class="q-my-sm">
            With extra thanks to
            <a href="https://twitter.com/r_sek">rsek</a> for the amazing
            <a href="https://github.com/rsek/datasworn">Datasworn repository</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <roller v-model="showRoller" :btnSize="btnSize" />
  </q-layout>
</template>

<script lang="ts">
/* eslint-disable no-unused-vars */
import { ref, defineComponent, computed } from 'vue';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';
import { scroll, useQuasar } from 'quasar';
import { useAssets } from 'src/store/assets';
import { useOracles } from 'src/store/oracles';

import Journal from 'src/components/Journal/Journal.vue';
import Oracles from 'src/components/Oracles/Oracles.vue';
import Moves from 'src/components/Moves/Moves.vue';
import Roller from 'src/components/Widgets/Roller.vue';

export default defineComponent({
  components: { Oracles, Moves, Roller, Journal },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const campaign = useCampaign();
    const config = useConfig();

    const addCampaign = () => campaign.new();
    const removeCampaign = (id: string) => campaign.delete(id);

    const fileToLoad = ref(null);
    const showDataLoad = ref(false);
    const loadData = async () => {
      const f: File = fileToLoad.value as unknown as File;
      await campaign.loadData(f);
      showDataLoad.value = false;
    };

    const customAssets = useAssets();
    const assetsToLoad = ref(null);
    const showAssetLoad = ref(false);
    const loadAssetData = async () => {
      const f: File = assetsToLoad.value as unknown as File;
      await customAssets.loadData(f);
      showAssetLoad.value = false;
    };

    const customOracles = useOracles();
    const oraclesToLoad = ref(null);
    const showOracleLoad = ref(false);
    const loadOracleData = () => {
      const f: File = oraclesToLoad.value as unknown as File;
      customOracles.loadData(f);
      showOracleLoad.value = false;
    };

    const $q = useQuasar();
    const width = computed((): number => {
      return !$q.platform.is.ipad && ($q.screen.lt.sm || $q.platform.is.mobile)
        ? Math.floor($q.screen.width * 0.9)
        : Math.floor($q.screen.width * 0.4);
    });
    const btnSize = computed((): string => {
      if ($q.screen.lt.sm) {
        return 'sm';
      }
      return 'md';
    });

    const showRoller = ref(false);
    const showAbout = ref(false);

    const { getScrollTarget, setVerticalScrollPosition } = scroll;
    const scrollTo = (id: string) => {
      const el = document.getElementById(id);
      if (el !== null) {
        const target = getScrollTarget(el);
        const offset = el.offsetTop;
        const duration = 200;
        setVerticalScrollPosition(target, offset, duration);
      }
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      width,

      campaign,
      config,
      customAssets,
      customOracles,

      addCampaign,
      removeCampaign,

      showDataLoad,
      fileToLoad,
      loadData,

      showAssetLoad,
      assetsToLoad,
      loadAssetData,

      showOracleLoad,
      oraclesToLoad,
      loadOracleData,

      showRoller,
      showAbout,
      btnSize,

      scrollTo,
    };
  },
});
</script>

<style lang="sass">
.about-text a
  color: $primary

.about-text a:visited
    color: $primary

.journal-to-top
  position: fixed
  bottom: 10px
  right: 10px

.title-pipe
  margin: 0
  padding: 0
  margin-left: 10px
  margin-right: 10px
  text-shadow: 1px 1px 1px $dark
  color: darkgrey
</style>
