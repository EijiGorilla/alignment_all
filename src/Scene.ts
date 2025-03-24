/* eslint-disable prettier/prettier */
import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';
import Legend from '@arcgis/core/widgets/Legend';
import Expand from '@arcgis/core/widgets/Expand';

import Print from '@arcgis/core/widgets/Print';
import { home_center, home_rotation, home_scale } from './UniqueValues';
import {
  airport_pin_lineGraphicsLayer,
  airport_pin_pointGraphicLayer,
  clarkAirport_pin_lineGraphicsLayer,
  clarkAirport_pin_pointGraphicLayer,
  manila_pin_lineGraphicsLayer,
  manila_pin_pointGraphicLayer,
  mmspCenterlineConstruction,
  mmspCenterlineLayer,
  mmspCenterlineOverView,
  mmspGraphicsLayer,
  mmspGraphicsLayer_cpLabel,
  mmspStationLayer,
  n1BreakPointsCP,
  n1CenterlineConstruction,
  n1CenterlineLayer,
  n1CenterlineOverView,
  n1GraphicsLayer,
  n1GraphicsLayer_cpLabel,
  n1StationLayer,
  n2BreakPointsCP,
  n2CenterlineConstruction,
  n2CenterlineLayer,
  n2CenterlineOverView,
  n2GraphicsLayer,
  n2GraphicsLayer_cpLabel,
  n2StationLayer,
  scBreakPointsCP,
  scCenterlineConstruction,
  scCenterlineLayer,
  scCenterlineOverView,
  scGraphicsLayer,
  scGraphicsLayer_cpLabel,
  scStationLayer,
} from './layers';
import Basemap from '@arcgis/core/Basemap';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Compass from '@arcgis/core/widgets/Compass';

const basemap = new Basemap({
  baseLayers: [
    new VectorTileLayer({
      portalItem: {
        id: '824fe99ab989479f83b9a6d7f2da0bcb',
      },
    }),
  ],
});

export const map = new Map({
  basemap: basemap, //basemap, // "streets-night-vector", basemap
  ground: 'world-elevation',
});

export const view = new MapView({
  map: map,
  container: undefined,
  rotation: home_rotation,
  center: home_center,
  scale: home_scale,
  background: {
    color: [0, 0, 0, 0.5],
  },
});

export const overViewMap = new Map({
  basemap: 'streets-night-vector', // "streets-night-vector", basemap
});

const overViewCenter = [120.9411264, 14.735462];
const zoom = 5;

export const overView = new MapView({
  map: overViewMap,
  container: undefined,
  center: overViewCenter,
  zoom: zoom,
  //extent: fixedExtent,
  constraints: {
    rotationEnabled: false,
  },
  ui: {
    components: ['attribution'],
  },
});

// add layer
map.add(n1CenterlineLayer);
map.add(n1CenterlineConstruction);
map.add(n1StationLayer);
map.add(n1BreakPointsCP);
map.add(n1GraphicsLayer);
map.add(n1GraphicsLayer_cpLabel);

map.add(mmspCenterlineLayer);
map.add(mmspCenterlineConstruction);
map.add(mmspStationLayer);
map.add(mmspGraphicsLayer);
map.add(mmspGraphicsLayer_cpLabel);

map.add(n2CenterlineLayer);
map.add(n2CenterlineConstruction);
map.add(n2StationLayer);
map.add(n2BreakPointsCP);
map.add(n2GraphicsLayer);
map.add(n2GraphicsLayer_cpLabel);

map.add(scCenterlineLayer);
map.add(scCenterlineConstruction);
map.add(scStationLayer);
map.add(scBreakPointsCP);
map.add(scGraphicsLayer);
map.add(scGraphicsLayer_cpLabel);

map.add(clarkAirport_pin_pointGraphicLayer);
map.add(clarkAirport_pin_lineGraphicsLayer);
map.add(airport_pin_pointGraphicLayer);
map.add(airport_pin_lineGraphicsLayer);
map.add(manila_pin_pointGraphicLayer);
map.add(manila_pin_lineGraphicsLayer);

overViewMap.add(n2CenterlineOverView);
overViewMap.add(n1CenterlineOverView);
overViewMap.add(scCenterlineOverView);
overViewMap.add(mmspCenterlineOverView);

// Compass
export const compass = new Compass({
  view: view,
  container: undefined,
});

// Control panel
export const controlPanelExpand = new Expand({
  view,
  expanded: true,
  content: undefined,
});

// Station Name (NSCR, NSCR-Ex)
export const stationExpand = new Expand({
  view: view,
  expanded: false,
  content: undefined,
  expandTooltip: 'Station List',
  expandIcon: 'list',
});

// Legend
export const legend_construction_mmsp = new Legend({
  view,
  container: 'construction-legend',
  layerInfos: [
    {
      layer: mmspCenterlineConstruction,
      title: 'Civil Construction Progress',
    },
  ],
});
view.ui.add(legend_construction_mmsp, 'bottom-left');

export const legend_construction_n1 = new Legend({
  view,
  container: 'construction-legend',
  layerInfos: [
    {
      layer: n1CenterlineConstruction,
      title: 'Civil Construction Progress',
    },
  ],
});
view.ui.add(legend_construction_n1, 'bottom-left');

export const legend_construction_n2 = new Legend({
  view,
  container: 'construction-legend',
  layerInfos: [
    {
      layer: n2CenterlineConstruction,
      title: 'Civil Construction Progress',
    },
  ],
});
view.ui.add(legend_construction_n2, 'bottom-left');

export const legend_construction_sc = new Legend({
  view,
  container: 'construction-legend',
  layerInfos: [
    {
      layer: scCenterlineConstruction,
      title: 'Civil Construction Progress',
    },
  ],
});
view.ui.add(legend_construction_sc, 'bottom-left');

// Print widget
const print = new Print({
  view: view,
  // specify your own print service
  printServiceUrl:
    'https://gis.railway-sector.com/server/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
});

export const printExpand = new Expand({
  view: view,
  expanded: false,
  content: print,
  expandTooltip: 'Print screen',
  expandIcon: 'print',
});
