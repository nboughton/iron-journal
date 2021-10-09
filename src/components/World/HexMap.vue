<template>
  <q-layout
    view="hHh lpR fFf"
    container
    :style="{
      width: '800px',
      height: '600px',
    }"
  >
    <q-page-container>
      <q-page>
        <div
          class="hexmap"
          ref="hexmap"
          :style="{
            width: `${campaign.data.maps[config.data.map].width}px`,
            height: `${campaign.data.maps[config.data.map].height}px`,
          }"
          @click="click($event)"
        ></div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';

import { ECellStatus, ISearchResults } from '../models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import { Svg, SVG } from '@svgdotjs/svg.js';
import { extendHex, defineGrid } from 'honeycomb-grid';
import { NewCell } from 'src/lib/world';

export default defineComponent({
  name: 'HexMap',
  props: {
    searchResults: {
      type: Object as PropType<ISearchResults>,
      default: <ISearchResults>{},
    },
  },
  setup() {
    const campaign = useCampaign();
    const config = useConfig();
    const showDialog = ref(false);
    const selectedID = ref('');

    const hexmap = ref(null);
    const h = (x: number, y: number): string => {
      return `h-${x}-${y}`;
    };

    const Hex = extendHex({ size: campaign.data.maps[config.data.map].hexSize });
    const Grid = defineGrid(Hex);
    const grid = Grid.rectangle({
      width: Math.floor(
        campaign.data.maps[config.data.map].width / (campaign.data.maps[config.data.map].hexSize * 1.5)
      ),
      height: Math.floor(
        campaign.data.maps[config.data.map].height / (campaign.data.maps[config.data.map].hexSize * 1.5)
      ),
    });
    const corners = Hex().corners();
    const points = corners.map((p) => `${p.x},${p.y}`).join(' ');

    let map: Svg;
    onMounted(() => {
      map = SVG()
        .addTo(hexmap.value as unknown as HTMLElement)
        .size('100%', '100%');
      console.log('initial map render');
      renderGrid();
    });

    // Render functions
    const getXY = (id: string): { x: number; y: number } => {
      const s = id.split(/-/g);
      if (s.length === 3) {
        // h, x, y
        const hex = grid.get({ x: +s[1], y: +s[2] });
        if (hex) {
          const { x, y } = hex.toPoint();
          return { x: x, y: y };
        }
      }
      return { x: 0, y: 0 };
    };

    const renderGrid = () => {
      console.log('Rendering map');
      map.clear();

      // Place hexes and content
      grid.forEach((hex) => {
        const { x, y } = hex.toPoint();
        const id = h(hex.x, hex.y);
        const cell = map.polygon(points).addClass('hex').addClass(id);
        cell.translate(x, y);
        cell.fill('none');
      });

      const bgk = SVG().image(campaign.data.maps[config.data.map].image);
      bgk.addTo(map).back();
    };

    // PRIMARY CLICK EVENT
    const click = (ev: { offsetX: number; offsetY: number }) => {
      // Get the SVG hex that was clicked on
      const hex = grid.get(Grid.pointToHex(ev.offsetX, ev.offsetY));

      // Derive its ID
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const id = h(hex!.x, hex!.y);

      // If no data exists for the cell then create it initially and make it a route
      if (
        !campaign.data.maps[config.data.map].cells[id] ||
        campaign.data.maps[config.data.map].cells[id].stat == ECellStatus.Empty
      ) {
        // Set hex fill here (rather than trigger a map re-render) for better mobile performance
        map.find(`.${id}`).forEach((c) => c.fill('rgba(256,256,256, 0.4)'));

        const c = NewCell(id);
        c.stat = ECellStatus.Route;
        campaign.data.maps[config.data.map].cells[id] = c;
        return;
      }

      // If we've reached here then we probably want to open the dialog and do something with it
      // const c = campaign.data.maps[config.data.map].cells[id]
      selectedID.value = id;
      showDialog.value = true;
    };

    return {
      campaign,
      config,
      hexmap,
      click,
    };
  },
});
</script>

<style lang="sass">
svg polygon.hex
  stroke: rgba(256, 256, 256, 0.1)
  stroke-width: 1pt

svg .search-label, .label
  paint-order: stroke fill
</style>
