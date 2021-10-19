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
            minWidth: `${campaign.data.maps[config.data.map].width}px`,
            height: `${campaign.data.maps[config.data.map].height}px`,
          }"
          @click="click($event)"
        ></div>
      </q-page>
    </q-page-container>
  </q-layout>

  <q-dialog v-model="showDialog" transition-show="fade" transition-hide="fade">
    <q-card class="card-bg" style="min-width: 40%">
      <q-card-section class="row justify-between items-center bg-secondary text-h5">
        <q-input
          class="col"
          label="Cell Name"
          v-model="campaign.data.maps[config.data.map].cells[selectedID].name"
          dense
          borderless
        />
        <q-btn class="col-shrink" icon="close" flat dense @click="showDialog = false" />
      </q-card-section>

      <q-card-section class="q-pa-sm q-mb-sm">
        <div class="row q-gutter-sm items-center">
          <q-select
            class="col-grow"
            label="Set cell status"
            hint="Set to 'location' to save Oracle generated content and enable search for this cell"
            v-model="campaign.data.maps[config.data.map].cells[selectedID].stat"
            :options="Object.values(ECellStatus)"
          />
          <q-btn
            class="col-shrink"
            dense
            outline
            label="Go here"
            @click="campaign.data.character.location = selectedID"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-pa-sm">
        <cell :mapID="config.data.map" :cellID="selectedID" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType, watch } from 'vue';

import { ECellStatus, EMapItems, ISearchResults } from '../models';

import { useCampaign } from 'src/store/campaign';
import { useConfig } from 'src/store/config';

import { Svg, SVG } from '@svgdotjs/svg.js';
import { extendHex, defineGrid, HexFactory, Grid, Hex } from 'honeycomb-grid';
import { CellLabel, NewCell } from 'src/lib/world';
import { colours } from 'src/lib/colours';
import { icon } from 'src/lib/icons';

import Cell from './Cell.vue';

export default defineComponent({
  name: 'HexMap',
  components: { Cell },
  props: {
    searchResults: {
      type: Object as PropType<ISearchResults>,
      default: <ISearchResults>{},
    },
  },
  setup(props) {
    const campaign = useCampaign();
    const config = useConfig();
    const showDialog = ref(false);
    const selectedID = ref('');

    const hexmap = ref(null);
    const h = (x: number, y: number): string => {
      return `h-${x}-${y}`;
    };

    const width = (): number => {
      const w = campaign.data.maps[config.data.map].width; // Map width in px
      const r = campaign.data.maps[config.data.map].hexSize; // hex radius
      const hw = r * 2; // width of 1 hex

      return Math.ceil(w / hw) + Math.ceil(w % hw);
    };

    const height = (): number => {
      return Math.ceil(
        campaign.data.maps[config.data.map].height / (campaign.data.maps[config.data.map].hexSize * 1.5)
      );
    };

    // Create initial values
    let Hx: HexFactory<{ size: number }> = extendHex({ size: campaign.data.maps[config.data.map].hexSize });
    let Grid = defineGrid(Hx);
    let grid: Grid<Hex<{ size: number }>>;

    let map: Svg;
    onMounted(() => {
      map = SVG()
        .addTo(hexmap.value as unknown as HTMLElement)
        .size('100%', '100%');

      console.log('initial map render');
      fullRender();
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

    const fullRender = () => {
      renderGrid();
      renderFills();
      renderIcons();
      renderLabels();
      renderSearch();
      map.transform({
        origin: [0, 0],
        scale: campaign.data.maps[config.data.map].zoom,
      });
    };

    const renderGrid = () => {
      console.log('Rendering map');
      map.clear();

      Hx = extendHex({ size: campaign.data.maps[config.data.map].hexSize });
      Grid = defineGrid(Hx);
      grid = Grid.rectangle({
        width: width(),
        height: height(),
      });
      const corners = Hx().corners();
      const points = corners.map((p) => `${p.x},${p.y}`).join(' ');

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

    const renderFills = () => {
      console.log('Rendering fills');
      const cells = campaign.data.maps[config.data.map].cells;
      Object.keys(cells).forEach((id) => {
        map.find(`.${id}`).forEach((cell) => {
          const c = cells[id];
          switch (c.stat) {
            case ECellStatus.Location:
              cell.fill(colours.location);
              break;

            case ECellStatus.Route:
              cell.fill(colours.route);
              break;

            default:
              cell.fill('none');
              break;
          }
        });
      });
    };

    const renderLabels = () => {
      console.log('Rendering labels');
      map.find('.labels').forEach((i) => i.remove());

      // Create a new group
      const labels = SVG().group().addClass('labels');
      const hexSize = campaign.data.maps[config.data.map].hexSize;

      // Populate it
      const cells = campaign.data.maps[config.data.map].cells;
      Object.keys(cells).forEach((id) => {
        const c = cells[id];

        if (c.stat === ECellStatus.Location) {
          const { label, type } = CellLabel(c);
          const { x, y } = getXY(id);

          SVG()
            .text(label)
            .addClass('label')
            .addTo(labels)
            .font({
              fill: colours[type] || 'white',
              weight: 'bold',
              size: campaign.data.maps[config.data.map].fonts.label.size,
            })
            .stroke({ color: 'black', width: 1 })
            .move(x - hexSize * 0.5, y - hexSize);
        }
      });

      labels.addTo(map).front();
    };

    const renderSearch = () => {
      console.log('Rendering search results');
      //clear existing search labels
      map.find('.search-label').forEach((i) => i.remove());

      if (!(props.searchResults != {} && props.searchResults[config.data.map])) return;

      // Add search results
      Object.keys(props.searchResults[config.data.map]).forEach((id) => {
        if (props.searchResults[config.data.map][id]) {
          const { x, y } = getXY(id);
          const cell = props.searchResults[config.data.map][id];
          const { label } = CellLabel(campaign.data.maps[config.data.map].cells[id]);

          if (map.find(`.${id}`).length > 0) {
            SVG()
              .text(function (add) {
                Object.keys(cell).forEach((oType) => {
                  cell[oType].forEach((i) => {
                    const c = campaign.data.maps[config.data.map].cells[id][oType as EMapItems][i];
                    if (c && c.name !== label) {
                      add.tspan(c.name).stroke({ color: 'black', width: 1 }).fill(colours[oType]).newLine();
                    }
                  });
                });
              })
              .addClass('search-label')
              .addTo(map)
              .move(x, y + campaign.data.maps[config.data.map].hexSize * 2)
              .font({ size: campaign.data.maps[config.data.map].fonts.search.size, weight: 'bold' });
          }
        }
      });
    };

    const renderIcons = () => {
      console.log('Rendering icons');
      map.find('.icons').forEach((i) => i.remove());

      const icons = SVG().group().addClass('icons');
      const cells = campaign.data.maps[config.data.map].cells;
      Object.keys(cells).forEach((id) => {
        const c = cells[id];

        if (c.stat === ECellStatus.Location) {
          const { x, y } = getXY(id);

          const size = campaign.data.maps[config.data.map].hexSize;
          let i = '';
          if (c.npcs.length > 0) i = icon.person();
          if (c.sites.length > 0) i = icon.dungeon();
          if (c.locations.length > 0) i = icon.location(c.locations[0].type);

          const img = SVG()
            .image(i)
            .addClass('icon')
            .size(size, size)
            .addTo(icons)
            .move(x + size / 2.6, y + size / 2);

          img.mouseenter(() => img.animate(100).transform({ scale: 1.3 }));
          img.mouseleave(() => img.animate(100).transform({ scale: 1 }));
        }
      });

      icons.addTo(map);
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
        map.find(`.${id}`).forEach((c) => c.fill(colours.route));

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

    // Zoom
    watch(
      () => campaign.data.maps[config.data.map].zoom,
      () =>
        map.transform({
          origin: [0, 0],
          scale: campaign.data.maps[config.data.map].zoom,
        })
    );

    // Map config
    watch(
      () => [
        campaign.data.maps[config.data.map].fonts,
        campaign.data.maps[config.data.map].height,
        campaign.data.maps[config.data.map].width,
        campaign.data.maps[config.data.map].hexSize,
      ],
      () => {
        console.log('Map config triggered render');
        fullRender();
      },
      { deep: true }
    );

    // Cell data change
    watch(
      () => campaign.data.maps[config.data.map].cells,
      () => {
        console.log('Cell data triggered render');
        renderFills();
        renderIcons();
        renderLabels();
      },
      { deep: true }
    );

    // Search
    watch(
      () => props.searchResults,
      () => {
        console.log('Search data triggered render');
        renderSearch();
      },
      { deep: true }
    );

    return {
      campaign,
      config,
      hexmap,
      click,
      showDialog,
      selectedID,
      ECellStatus,
    };
  },
});
</script>

<style lang="sass">
.hexmap svg
  transform-origin: 0 0

svg polygon.hex
  stroke: rgba(256, 256, 256, 0.1)
  stroke-width: 1pt

svg .search-label, .label
  paint-order: stroke fill
</style>
