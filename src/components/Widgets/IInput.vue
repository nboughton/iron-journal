<template>
  <q-input
    :label="label"
    v-model="data"
    :autogrow="autogrow"
    :clearable="clearable"
    :square="square"
    dense
    standout="bg-blue-grey text-white"
    :input-style="{ color: '#ECEFF4' }"
    debounce="500"
  >
    <template v-slot:append>
      <slot name="append" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'IInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    autogrow: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    square: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const data = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value: string) => emit('update:modelValue', value),
    });

    return {
      data,
    };
  },
});
</script>
