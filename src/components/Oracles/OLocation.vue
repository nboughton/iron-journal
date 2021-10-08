<template>
  <o-input label="Region" v-model="data.region" @roll="roll.Region" />
  <o-input label="Location" v-model="data.type" @roll="roll.Location" />
  <o-input label="Name" v-model="data.name" @roll="roll.Name" />
  <o-input label="Descriptor" v-model="data.descriptor" @roll="roll.Desc" />
  <o-input label="Trouble" v-model="data.trouble" @roll="roll.Trouble" />

  <o-btns clear @clear="btns.Clear" save @save="btns.Save" initial @initial="btns.Initial" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { ILocation } from '../models';

import { useCampaign } from 'src/store/campaign';

import { oracleRoll } from 'src/lib/roll';
import { Location } from 'src/lib/oracles/location';
import { Plot } from 'src/lib/oracles/plot';
import { NewLocation } from 'src/lib/world';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'OLocation',
  components: { OInput, OBtns },
  setup() {
    const data = ref(NewLocation());

    const roll = {
      Region: () => (data.value.region = oracleRoll(Location.Region)),
      Location: () => {
        if (/(coast|island)/i.test(data.value.region)) {
          data.value.type = oracleRoll(Location.CoastalWatersLocation);
        } else {
          data.value.type = oracleRoll(Location.Location);
        }
      },
      Name: () =>
        (data.value.name = `${oracleRoll(Location.QuickSettlementNamePrefix)} ${oracleRoll(
          Location.QuickSettlementNameSuffix
        )}`),
      Desc: () => (data.value.descriptor = oracleRoll(Location.Descriptor)),
      Trouble: () => (data.value.trouble = oracleRoll(Plot.SettlementTrouble)),
    };

    const btns = {
      Clear: () => {
        data.value = NewLocation();
      },
      Initial: () => {
        btns.Clear();
        roll.Region();
        roll.Location();
        roll.Name();
      },
      Save: (args: { map: number; cell: number }) => {
        const storeCopy = JSON.parse(JSON.stringify(data.value)) as ILocation;
        useCampaign().data.maps[args.map].cells[args.cell].locations.unshift(storeCopy);
      },
    };

    return {
      data,
      btns,
      roll,
    };
  },
});
</script>
