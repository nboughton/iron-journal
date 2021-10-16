<template>
  <div>
    <q-expansion-item
      :icon="`img:${icon.location(data.type)}`"
      header-class="person-header sf-header rounded-borders q-mb-sm"
      :label="data.name"
      caption="Location"
    >
      <controls v-if="controls" @move="$emit('move', $event)" />

      <div class="row q-gutter-sm q-mb-sm no-wrap" v-if="$q.screen.gt.xs">
        <i-input class="col" label="Name" v-model="data.name" />
        <i-input class="col" label="Type" v-model="data.type" />
        <i-input class="col" label="Region" v-model="data.region" />
        <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
      </div>
      <div v-else>
        <div class="row q-gutter-sm q-mb-sm no-wrap">
          <i-input class="col" label="Name" v-model="data.name" />
          <q-btn v-if="config.data.edit" icon="delete" flat dense @click="$emit('delete')" />
        </div>

        <div class="row q-gutter-sm q-mb-sm">
          <i-input class="col" label="Region" v-model="data.region" />
          <i-input class="col" label="Type" v-model="data.type" />
        </div>
      </div>

      <div class="row q-gutter-sm q-mb-sm">
        <i-input class="col" label="Descriptor" v-model="data.descriptor" />
        <i-input class="col" label="Trouble" v-model="data.trouble" />
      </div>

      <i-input label="Notes" v-model="data.notes" autogrow />
    </q-expansion-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

import { ILocation } from '../models';

import { icon } from 'src/lib/icons';

import IInput from 'src/components/IInput.vue';
import Controls from 'src/components/World/Controls.vue';
import { useConfig } from 'src/store/config';

export default defineComponent({
  name: 'WLocation',
  components: { IInput, Controls },
  props: {
    modelValue: {
      type: Object as PropType<ILocation>,
      required: true,
    },
    controls: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'delete', 'move'],
  setup(props, { emit }) {
    const data = ref(props.modelValue);
    watch(
      () => props.modelValue,
      () => (data.value = props.modelValue),
      { deep: true }
    );
    watch(
      () => data.value,
      () => emit('update:modelValue', data.value),
      { deep: true }
    );

    const config = useConfig();

    return {
      data,
      icon,
      config,
    };
  },
});
</script>
