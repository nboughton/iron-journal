<template>
  <div class="hexbox" @click="$emit('update:modelValue', !data)" :title="label">
    <svg class="box" viewBox="0 0 26 26" width="28" height="28">
      <circle :class="{ hex: true, checked: data }" cx="13" cy="13" r="10" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'Hexbox',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const data = computed(() => {
      return props.modelValue;
    });

    return {
      data,
    };
  },
});
</script>

<style lang="sass">
.hexbox
  padding: 0
  margin: 0
  cursor: pointer

.box circle.hex
  transition: fill 0.3s ease
  fill: #D8DEE9
  stroke: $dark
  stroke-width: 2

.box circle.checked
  transition: fill 0.3s ease
  fill: $primary

.box > circle.filler
  fill: $accent
  scale: 0.5
</style>
