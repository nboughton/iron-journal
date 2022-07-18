<template>
  <div class="content-start items-start">
    <q-expansion-item header-class="text-h5" label="Core" default-opened>
      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Plot"
        :header-inset-level="0.5"
      >
        <o-plot />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Character"
        :header-inset-level="0.5"
      >
        <ONPC />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Location"
        :header-inset-level="0.5"
      >
        <o-location />
      </q-expansion-item>
    </q-expansion-item>

    <q-expansion-item class="text-h5" label="Delve">
      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Site"
        :header-inset-level="0.5"
      >
        <o-delve-site />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Feature"
        :header-inset-level="0.5"
      >
        <o-delve-feature />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Monstrosity"
        :header-inset-level="0.5"
      >
        <o-delve-monstrosity />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Trap"
        :header-inset-level="0.5"
      >
        <o-delve-trap />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Combat Event"
        :header-inset-level="0.5"
      >
        <o-delve-combat-event />
      </q-expansion-item>

      <q-expansion-item
        class="shadow-1 overflow-hidden oracles q-mb-sm"
        header-class="text-h6"
        label="Threat"
        :header-inset-level="0.5"
      >
        <o-delve-threat />
      </q-expansion-item>
    </q-expansion-item>

    <q-expansion-item
      class="shadow-1 overflow-hidden oracles q-mb-sm"
      header-class="text-h6"
      label="Custom"
      :header-inset-level="0.5"
    >
      <o-custom @new="addOracle" @edit="editOracle" />
    </q-expansion-item>

    <q-dialog v-model="showEditor" :maximized="$q.platform.is.mobile">
      <o-editor @close="showEditor = false" :oracle="editorData" />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { ICustomOracle } from '../models';

import { useOracles } from 'src/store/oracles';

import { NewCustomOracle } from 'src/lib/oracles/custom';
import { deepCopy } from 'src/lib/util';

import ONPC from './ONPC.vue';
import OPlot from './OPlot.vue';
import OLocation from './OLocation.vue';
import ODelveSite from './ODelveSite.vue';
import ODelveFeature from './ODelveFeature.vue';
import ODelveMonstrosity from './ODelveMonstrosity.vue';
import ODelveTrap from './ODelveTrap.vue';
import ODelveCombatEvent from './ODelveCombatEvent.vue';
import ODelveThreat from './ODelveThreat.vue';
import OCustom from './OCustom.vue';
import OEditor from './OEditor.vue';

export default defineComponent({
  name: 'Oracles',
  components: {
    ONPC,
    OPlot,
    OLocation,
    ODelveSite,
    ODelveFeature,
    ODelveMonstrosity,
    ODelveTrap,
    ODelveCombatEvent,
    ODelveThreat,
    OCustom,
    OEditor,
  },
  setup() {
    const showEditor = ref(false);
    const editorData = ref(<ICustomOracle>{});
    const addOracle = () => {
      editorData.value = NewCustomOracle('Custom Oracle');
      showEditor.value = true;
    };
    const editOracle = (id: string) => {
      // make a copy so that we don't pass a reference and modify the store
      const d = useOracles().data.find((o) => o.$id === id) as ICustomOracle;
      editorData.value = deepCopy(d);
      showEditor.value = true;
    };

    return {
      showEditor,
      editorData,
      addOracle,
      editOracle,
    };
  },
});
</script>

<style lang="sass">
.oracles
  background: #604d6966
</style>
