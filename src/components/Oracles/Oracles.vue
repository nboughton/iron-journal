<template>
  <div class="content-start items-start">
    <q-expansion-item header-class="text-h5" label="Core">
      <q-expansion-item header-class="text-h6" label="Plot" :header-inset-level="0.5">
        <o-plot />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Character" :header-inset-level="0.5">
        <ONPC />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Location" :header-inset-level="0.5">
        <o-location />
      </q-expansion-item>
    </q-expansion-item>

    <q-expansion-item class="text-h5" label="Delve">
      <q-expansion-item header-class="text-h6" label="Site" :header-inset-level="0.5">
        <o-delve-site />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Feature" :header-inset-level="0.5">
        <o-delve-feature />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Monstrosity" :header-inset-level="0.5">
        <o-delve-monstrosity />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Trap" :header-inset-level="0.5">
        <o-delve-trap />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Combat Event" :header-inset-level="0.5">
        <o-delve-combat-event />
      </q-expansion-item>

      <q-expansion-item header-class="text-h6" label="Threat" :header-inset-level="0.5">
        <o-delve-threat />
      </q-expansion-item>
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Threat } from 'src/lib/oracles/delve/threat';

import ONPC from './ONPC.vue';
import OPlot from './OPlot.vue';
import OLocation from './OLocation.vue';
import ODelveSite from './ODelveSite.vue';
import ODelveFeature from './ODelveFeature.vue';
import ODelveMonstrosity from './ODelveMonstrosity.vue';
import ODelveTrap from './ODelveTrap.vue';
import ODelveCombatEvent from './ODelveCombatEvent.vue';
import ODelveThreat from './ODelveThreat.vue';

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
  },
  setup() {
    return {
      Threat,
    };
  },
});
</script>
