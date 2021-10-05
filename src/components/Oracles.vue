<template>
  <div class="content-start items-start">
    <q-expansion-item>
      <template v-slot:header>
        <div class="text-h6">Core</div>
      </template>
      <oracle label="Plot" :oracle="Plot" />
      <oracle label="Location" :oracle="Location" />
      <oracle label="Character" :oracle="Character" />
      <oracle label="Names" :oracle="Names" />
    </q-expansion-item>

    <q-expansion-item>
      <template v-slot:header>
        <div class="text-h6">Delve</div>
      </template>
      <oracle label="Feature" :oracle="Feature" />
      <oracle label="Site Name" :oracle="SiteName" />
      <oracle label="Site Nature" :oracle="SiteNature" />
      <oracle label="Theme Features" :oracle="ThemeFeatures" />
      <oracle label="Theme Dangers" :oracle="ThemeDangers" />
      <oracle label="Domain Features" :oracle="DomainFeatures" />
      <oracle label="Domain Dangers" :oracle="DomainDangers" />
      <oracle label="Monstrosity" :oracle="Monstrosity" />
      <oracle label="Trap" :oracle="Trap" />
      <oracle label="Combat Event" :oracle="CombatEvent" />
      <oracle label="Threat" :oracle="Threat" />
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Oracle from 'src/components/Oracle.vue'
import { Plot } from 'src/lib/oracles/plot'
import { Location } from 'src/lib/oracles/location'
import { Character } from 'src/lib/oracles/character'
import { Names } from 'src/lib/oracles/names'
import { Feature } from 'src/lib/oracles/delve/feature'
import { SiteName } from 'src/lib/oracles/delve/site_name'
import { SiteNature, ThemeFeatures, ThemeDangers, DomainFeatures, DomainDangers } from 'src/lib/oracles/delve/site_nature'
import { Monstrosity } from 'src/lib/oracles/delve/monstrosity'
import { Trap } from 'src/lib/oracles/delve/trap'
import { CombatEvent } from 'src/lib/oracles/delve/combat_event'
import { Threat } from 'src/lib/oracles/delve/threat'

export default defineComponent({
  name: 'Oracles',
  components: { Oracle },
  setup() {
    return {
      Plot,
      Location,
      Character,
      Names,

      Feature,
      SiteName,
      SiteNature,
      ThemeFeatures,
      ThemeDangers,
      DomainFeatures,
      DomainDangers,
      Monstrosity,
      Trap,
      CombatEvent,
      Threat
    }
  }
})
</script>
