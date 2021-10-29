<template>
  <q-select label="Kin" v-model="data.kin" :options="Object.values(EKin)" dense />
  <o-input label="Name" v-model="data.name" @roll="roll.Name" />
  <o-input label="Pronouns" v-model="data.pronouns" no-roll />
  <o-input label="Descriptor" v-model="data.descriptor" @roll="roll.Desc" reroll :maxRerolls="3" />
  <o-input label="Disposition" v-model="data.disposition" @roll="roll.Disp" />
  <o-input label="Role" v-model="data.role" @roll="roll.Role" />
  <o-input label="Goal" v-model="data.goal" @roll="roll.Goal" />
  <o-input label="Activity" v-model="data.activity" @roll="roll.Activity" />
  <o-btns save @save="btns.Save" clear @clear="btns.Clear" initial @initial="btns.Initial" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { EKin, INPC } from '../models';

import { useCampaign } from 'src/store/campaign';

import { oracleRoll } from 'src/lib/roll';
import { Character } from 'src/lib/oracles/character';
import { Names } from 'src/lib/oracles/names';
import { NewNPC } from 'src/lib/world';

import OInput from './OInput.vue';
import OBtns from './OBtns.vue';

export default defineComponent({
  name: 'OCharacter',
  components: { OInput, OBtns },
  setup() {
    const data = ref(NewNPC());

    const roll = {
      Name: () => {
        if (data.value.kin.length > 0 && Object.values(EKin).includes(data.value.kin as EKin)) {
          data.value.name = oracleRoll(Names[data.value.kin]);
        } else {
          data.value.name = oracleRoll(Names[EKin.Ironlander]);
        }
      },
      Desc: () => {
        const d = oracleRoll(Character.Descriptor);
        data.value.descriptor = data.value.descriptor ? (data.value.descriptor += ', ' + d) : d;
      },
      Disp: () => {
        data.value.disposition = oracleRoll(Character.Disposition);
      },
      Role: () => {
        data.value.role = oracleRoll(Character.Role);
      },
      Goal: () => {
        data.value.goal = oracleRoll(Character.Goal);
      },
      Activity: () => {
        data.value.activity = oracleRoll(Character.Activity);
      },
    };

    const btns = {
      Clear: () => {
        const k = data.value.kin;
        data.value = NewNPC();
        data.value.kin = k;
      },
      Initial: () => {
        btns.Clear();
        roll.Name();
        roll.Disp();
        roll.Desc();
        roll.Activity();
      },
      Save: (args: { map: number; cell: number }) => {
        const storeCopy = JSON.parse(JSON.stringify(data.value)) as INPC;
        useCampaign().data.maps[args.map].cells[args.cell].npcs.unshift(storeCopy);
      },
    };
    return {
      data,
      roll,
      btns,
      EKin,
    };
  },
});
</script>
