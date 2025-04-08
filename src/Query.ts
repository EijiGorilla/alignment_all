/* eslint-disable prettier/prettier */
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import {
  dateTable,
  lineSymbol_construction,
  lineSymbol_construction_project,
  mmspCenterlineConstruction,
  mmspCenterlineLayer,
  mmspGraphicsLayer,
  mmspGraphicsLayer_cpLabel,
  mmspStationLayer,
  n1_station_label,
  n1BreakPointsCP,
  n1CenterlineConstruction,
  n1CenterlineLayer,
  n1GraphicsLayer,
  n1GraphicsLayer_cpLabel,
  n1StationLayer,
  n2_station_label,
  n2BreakPointsCP,
  n2CenterlineConstruction,
  n2CenterlineLayer,
  n2GraphicsLayer,
  n2GraphicsLayer_cpLabel,
  n2LabelStation,
  n2LabelStation_number,
  n2StationLayer,
  sc_station_label,
  scBreakPointsCP,
  scCenterlineConstruction,
  scCenterlineLayer,
  scGraphicsLayer,
  scGraphicsLayer_cpLabel,
  scLabelStation,
  scLabelStation_number,
  scStationLayer,
  stationPointRenderer_construction_mmsp,
  stationPointRenderer_construction_nscr,
  stationPointSymbol_mmsp,
  stationPointSymbol_nscr,
} from './layers';
import {
  legend_construction_mmsp,
  legend_construction_n1,
  legend_construction_n2,
  legend_construction_sc,
  overView,
  view,
} from './Scene';
import {
  centerlineProjectColor,
  cpFontSize,
  cpLabelColor,
  cpLineColor,
  cpLineWidth,
  home_rotation,
  labelStation_fontSize_default,
  projectLabelFontSize,
  xoffset_mmsp,
  xoffset_mmsp_reset,
  xoffset_n1,
  xoffset_n1_reset,
  xoffset_n2,
  xoffset_n2_reset,
  xoffset_sc,
  xoffset_sc_reset,
  yoffset_mmsp,
  yoffset_mmsp_reset,
  yoffset_n1,
  yoffset_n1_reset,
  yoffset_n2,
  yoffset_n2_reset,
  yoffset_sc,
  yoffset_sc_reset,
} from './UniqueValues';
import Graphic from '@arcgis/core/Graphic';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

export function lastDateOfMonth(date: Date) {
  const old_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const year = old_date.getFullYear();
  const month = old_date.getMonth() + 1;
  const day = old_date.getDate();
  const final_date = `${year}-${month}-${day}`;

  return final_date;
}

// Updat date
export async function dateUpdate(category: any) {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  const queryExpression = "project = 'N2'" + ' AND ' + "category = '" + category + "'";
  query.where = queryExpression; // "project = 'N2'" + ' AND ' + "category = 'Land Acquisition'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      // get today and date recorded in the table
      const today = new Date();
      const date = new Date(result.attributes.date);

      // Calculate the number of days passed since the last update
      const time_passed = today.getTime() - date.getTime();
      const days_passed = Math.round(time_passed / (1000 * 3600 * 24));

      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return [final, days_passed];
    });
    return dates;
  });
}

//// Legend
export function AlignmentLegendOn() {
  legend_construction_n1.visible = false;
  legend_construction_mmsp.visible = false;
  legend_construction_n2.visible = false;
  legend_construction_sc.visible = false;
}

export function ProgressAllLegendOn() {
  legend_construction_n1.visible = false;
  legend_construction_mmsp.visible = false;
  legend_construction_n2.visible = true;
  legend_construction_sc.visible = false;
}

//// --------------------- MMSP ------------------------------- ////
export function mmspAlignmentRenderer(projectSelected: any) {
  mmspStationLayer.renderer = stationPointSymbol_mmsp;
  mmspStationLayer.visible = true;
  mmspGraphicsLayer.visible = true;
  mmspGraphicsLayer_cpLabel.visible = true;
  mmspCenterlineLayer.visible = true;
  mmspCenterlineConstruction.visible = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(mmspStationLayer);
  mmspGraphicsLayerMove(projectSelected);
}

export function mmspProgressRenderer(projectSelected: any) {
  mmspStationLayer.renderer = stationPointRenderer_construction_mmsp;
  mmspStationLayer.visible = true;
  mmspGraphicsLayer.visible = true;
  mmspGraphicsLayer_cpLabel.visible = true;
  mmspCenterlineLayer.visible = false;
  mmspCenterlineConstruction.visible = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(mmspStationLayer);
  mmspGraphicsLayerMove(projectSelected);
}

export function mmspNoneRenderer() {
  mmspStationLayer.visible = false;
  mmspGraphicsLayer.visible = false;
  mmspGraphicsLayer_cpLabel.visible = false;
  mmspCenterlineLayer.visible = false;
  mmspCenterlineConstruction.visible = false;
}

function mmspGraphics(xoffset: any, yoffset: any) {
  var query = mmspStationLayer.createQuery();
  query.orderByFields = ['Id'];
  query.where = 'Id >= 1';

  mmspStationLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const paths: any = [];
    const points: any = [];
    const CPs: any = [];

    stats.forEach((result: any, index: any) => {
      const attributes = result.attributes;
      const cp = attributes.CPs;
      CPs.push(cp);

      // Collect geometry of each break point
      const pointX0 = result.geometry.longitude;
      const pointY0 = result.geometry.latitude;

      // Calculate end poins and store it in a path for line generation
      const pointX1 = pointX0 + 0.04;
      const path = [
        [pointX0, pointY0],
        [pointX1, pointY0],
      ];

      // Append each path to paths
      paths.push(path);

      // Calculate a point for text symbol
      const point = [pointX1, pointY0];
      points.push(point);
    });

    // 1. Draw a horizontal line at break points of individual CPs
    // Define polyline paths and type
    const polyline: any = {
      type: 'polyline',
      paths: paths,
    };

    // Set line properties
    const simpleLineSymbol: any = {
      type: 'simple-line',
      color: cpLineColor,
      width: cpLineWidth,
    };

    // Add to Graphic
    const mmspPolylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol,
    });

    mmspGraphicsLayer_cpLabel.add(mmspPolylineGraphic);
    // 2. Add text symbol
    for (var i = 0; i < points.length; i++) {
      if (i <= points.length - 2) {
        const pointTextX = points[i][0] + 0.01;
        const pointTextY0 = points[i][1];
        const pointTextY1 = points[i + 1][1];
        const pointTextY = (pointTextY0 + pointTextY1) / 2;

        const point: any = {
          type: 'point',
          longitude: pointTextX,
          latitude: pointTextY,
        };

        let textSymbol = {
          type: 'text', // autocasts as new TextSymbol()
          color: cpLabelColor,
          //haloColor: "black",
          //haloSize: "1px",
          text: CPs[i],
          //xoffset: 3,
          //yoffset: -5,
          font: {
            // autocasts as new Font()
            size: cpFontSize,
            //family: "Josefin Slab",
            weight: 'bold',
          },
        };

        const mmspPointGraphic = new Graphic({
          geometry: point,
          symbol: textSymbol,
        });
        mmspGraphicsLayer_cpLabel.add(mmspPointGraphic);
      }
    }
    // Add Project label
    let mmspProjectLableSymbol = {
      type: 'text', // autocasts as new TextSymbol()
      color: centerlineProjectColor.mmsp_hex,
      //backgroundColor: projectBackgroundColor,
      //haloColor: "black",
      //haloSize: "0.3px",
      text: 'Metro Manila Subway Project\n33km',
      horizontalAlignment: 'left',
      //xoffset: 3,
      //yoffset: -5,
      font: {
        // autocasts as new Font()
        size: projectLabelFontSize,
        //family: "Merriweather",
        //style: "italic",
        weight: 'bold',
      },
    };
    const j = 0;
    const pointTextX_pLabel = points[j][0] + 0.038 + xoffset;
    const pointTextY0_pLabel = points[j][1];
    const pointTextY1_pLabel = points[j + 1][1] - 0.01 + yoffset;
    const pointTextY_pLabel = (pointTextY0_pLabel + pointTextY1_pLabel) / 2;

    const projectPoint: any = {
      type: 'point',
      longitude: pointTextX_pLabel,
      latitude: pointTextY_pLabel,
    };

    const mmspProjectLabelGraphic = new Graphic({
      geometry: projectPoint,
      symbol: mmspProjectLableSymbol,
    });
    mmspGraphicsLayer.add(mmspProjectLabelGraphic);
  });
}

export function mmspGraphicsLayerMove(projectSelected: any) {
  mmspGraphicsLayer_cpLabel.removeAll();
  mmspGraphicsLayer.removeAll();

  let xoffset: any;
  let yoffset: any;
  if (projectSelected === 'All') {
    xoffset = xoffset_mmsp;
    yoffset = yoffset_mmsp;
  } else {
    xoffset = xoffset_mmsp_reset;
    yoffset = yoffset_mmsp_reset;
  }
  mmspGraphics(xoffset, yoffset);
}

//// --------------------- N1 ------------------------------- ////
export function n1AlignmentRenderer(projectSelected: any) {
  n1StationLayer.renderer = stationPointSymbol_nscr;
  n1StationLayer.visible = true;
  n1GraphicsLayer.visible = true;
  n1GraphicsLayer_cpLabel.visible = true;
  n1CenterlineLayer.visible = true;
  n1CenterlineConstruction.visible = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(n1StationLayer);
  n1GraphicsLayerMove(projectSelected);
}

export function n1ProgressRenderer(projectSelected: any) {
  n1StationLayer.renderer = stationPointRenderer_construction_nscr;
  n1StationLayer.visible = true;
  n1GraphicsLayer.visible = true;
  n1GraphicsLayer_cpLabel.visible = true;
  n1CenterlineLayer.visible = false;
  n1CenterlineConstruction.visible = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(n1StationLayer);
  n1GraphicsLayerMove(projectSelected);
}

export function n1NoneRenderer() {
  n1StationLayer.visible = false;
  n1GraphicsLayer.visible = false;
  n1GraphicsLayer_cpLabel.visible = false;
  n1CenterlineLayer.visible = false;
  n1CenterlineConstruction.visible = false;
}

function n1Graphics(xoffset: any, yoffset: any) {
  var query = n1BreakPointsCP.createQuery();
  query.orderByFields = ['Id'];
  query.where = 'Id >= 1';

  n1BreakPointsCP.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const paths: any = [];
    const points: any = [];
    const CPs: any = [];

    stats.forEach((result: any, index: any) => {
      const attributes = result.attributes;
      const cp = attributes.CP;
      CPs.push(cp);

      // Collect geometry of each break point
      const pointX0 = result.geometry.longitude;
      const pointY0 = result.geometry.latitude;

      // Calculate end poins and store it in a path for line generation
      const pointX1 = pointX0 - 0.04;
      const path = [
        [pointX0, pointY0],
        [pointX1, pointY0],
      ];

      // Append each path to paths
      paths.push(path);

      // Calculate a point for text symbol
      const point = [pointX1, pointY0];
      points.push(point);
    });
    // 1. Draw a horizontal line at break points of individual CPs
    // Define polyline paths and type
    const polyline: any = {
      type: 'polyline',
      paths: paths,
    };

    // Set line properties
    const simpleLineSymbol = {
      type: 'simple-line',
      color: cpLineColor,
      width: cpLineWidth,
    };

    // Add to Graphic
    const n1PolylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol,
    });
    n1GraphicsLayer_cpLabel.add(n1PolylineGraphic);
    // 2. Add text symbol
    for (var i = 0; i < points.length; i++) {
      if (i <= points.length - 2) {
        const pointTextX = CPs[i] === 'CP02' ? points[i][0] - 0.1 : points[i][0] - 0.03;
        const pointTextY0 = CPs[i] === 'CP02' ? points[i][1] : points[i][1];
        const pointTextY1 =
          CPs[i] === 'CP02' || CPs[i] === 'CP05' ? points[i + 1][1] - 0.02 : points[i + 1][1];
        const pointTextY = (pointTextY0 + pointTextY1) / 2;

        const point: any = {
          type: 'point',
          longitude: pointTextX,
          latitude: pointTextY,
        };

        let textSymbol = {
          type: 'text', // autocasts as new TextSymbol()
          color: cpLabelColor,
          //haloColor: "black",
          //haloSize: "1px",
          text: CPs[i],
          //xoffset: 3,
          //yoffset: -5,
          font: {
            // autocasts as new Font()
            size: cpFontSize,
            //family: "Josefin Slab",
            weight: 'bold',
          },
        };

        const n1PointGraphic = new Graphic({
          geometry: point,
          symbol: textSymbol,
        });
        n1GraphicsLayer_cpLabel.add(n1PointGraphic);
      }
    }
    // Add Project label
    let n1ProjectLableSymbol = {
      type: 'text', // autocasts as new TextSymbol()
      color: centerlineProjectColor.nscr_hex,
      //backgroundColor: projectBackgroundColor,
      text: 'North-South Commuter Railway\n(Malolos-Tutuban)\n37km',
      horizontalAlignment: 'left',
      //yoffset: -5,
      font: {
        // autocasts as new Font()
        size: projectLabelFontSize,
        //family: "Merriweather",
        //style: "italic",
        weight: 'bold',
      },
    };
    const j = 2;
    const pointTextX_pLabel = points[j][0] + xoffset; // points[j][0] + 0.15 + xoffset;
    const pointTextY0_pLabel = points[j][1];
    const pointTextY1_pLabel = points[j + 1][1] + yoffset; // points[j + 1][1] + 0.05 + yoffset;
    const pointTextY_pLabel = (pointTextY0_pLabel + pointTextY1_pLabel) / 2;

    const projectPoint: any = {
      type: 'point',
      longitude: pointTextX_pLabel,
      latitude: pointTextY_pLabel,
    };

    const n1ProjectLabelGraphic = new Graphic({
      geometry: projectPoint,
      symbol: n1ProjectLableSymbol,
    });

    n1GraphicsLayer.add(n1ProjectLabelGraphic);
  });
}

export function n1GraphicsLayerMove(projectSelected: any) {
  n1GraphicsLayer_cpLabel.removeAll();
  n1GraphicsLayer.removeAll();

  let xoffset: any;
  let yoffset: any;
  if (projectSelected === 'All') {
    xoffset = xoffset_n1;
    yoffset = yoffset_n1;
  } else {
    xoffset = xoffset_n1_reset;
    yoffset = yoffset_n1_reset;
  }
  n1Graphics(xoffset, yoffset);
}

//// --------------------- N2 ------------------------------- ////
export function n2AlignmentRenderer(projectSelected: any) {
  n2StationLayer.renderer = stationPointSymbol_nscr;
  n2StationLayer.visible = true;
  n2GraphicsLayer.visible = true;
  n2GraphicsLayer_cpLabel.visible = true;
  n2CenterlineLayer.visible = true;
  n2CenterlineConstruction.visible = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(n2StationLayer);
  n2GraphicsLayerMove(projectSelected);
}

export function n2ProgressRenderer(projectSelected: any) {
  n2StationLayer.renderer = stationPointRenderer_construction_nscr;
  n2StationLayer.visible = true;
  n2GraphicsLayer.visible = true;
  n2GraphicsLayer_cpLabel.visible = true;
  n2CenterlineLayer.visible = false;
  n2CenterlineConstruction.visible = true;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(n2StationLayer);
  n2GraphicsLayerMove(projectSelected);
}

export function n2NoneRenderer() {
  n2StationLayer.visible = false;
  n2GraphicsLayer.visible = false;
  n2GraphicsLayer_cpLabel.visible = false;
  n2CenterlineLayer.visible = false;
  n2CenterlineConstruction.visible = false;
}

function n2Graphics(xoffset: any, yoffset: any) {
  var query = n2BreakPointsCP.createQuery();
  query.orderByFields = ['Id'];
  n2BreakPointsCP.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const paths: any = [];
    const points: any = [];
    const CPs: any = [];

    stats.forEach((result: any, index: any) => {
      const attributes = result.attributes;
      const cp = attributes.CP;
      CPs.push(cp);

      // Collect geometry of each break point
      const pointX0 = result.geometry.longitude;
      const pointY0 = result.geometry.latitude;

      // Calculate end poins and store it in a path for line generation
      const pointX1 = pointX0 + 0.05;
      const path = [
        [pointX0, pointY0],
        [pointX1, pointY0],
      ];

      // Append each path to paths
      paths.push(path);

      // Calculate a point for text symbol
      const point = [pointX1, pointY0];
      points.push(point);
    });

    // 1. Draw a horizontal line at break points of individual CPs
    // Define polyline paths and type
    const polyline: any = {
      type: 'polyline',
      paths: paths,
    };

    // Set line properties
    const simpleLineSymbol = {
      type: 'simple-line',
      color: cpLineColor,
      width: cpLineWidth,
    };

    // Add to Graphic
    const n2PolylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol,
    });
    n2GraphicsLayer_cpLabel.add(n2PolylineGraphic);

    // 2. Add text symbol
    for (var i = 0; i < points.length; i++) {
      if (i <= points.length - 2) {
        const pointTextX = points[i][0] + 0.03;
        const pointTextY0 = points[i][1];
        const pointTextY1 = points[i + 1][1];
        const pointTextY = (pointTextY0 + pointTextY1) / 2;

        const point: any = {
          type: 'point',
          longitude: pointTextX,
          latitude: pointTextY,
        };

        let textSymbol = {
          type: 'text', // autocasts as new TextSymbol()
          color: cpLabelColor,
          //haloColor: "black",
          //haloSize: "1px",
          text: CPs[i],
          //xoffset: 3,
          //yoffset: -5,
          font: {
            // autocasts as new Font()
            size: cpFontSize,
            //family: "Josefin Slab",
            weight: 'bold',
          },
        };

        const n2PointGraphic = new Graphic({
          geometry: point,
          symbol: textSymbol,
        });

        n2GraphicsLayer_cpLabel.add(n2PointGraphic);
      }
    }

    // Project Label
    // Add Project label (N2)
    let n2ProjectLableSymbol = {
      type: 'text', // autocasts as new TextSymbol()
      color: centerlineProjectColor.nscrex_hex,
      //backgroundColor: projectBackgroundColor,
      //haloColor: "black",
      //haloSize: "1px",
      text: 'North-South Commuter Railway Ext.\n(Malolos-Clark)\n51km',
      horizontalAlignment: 'right',
      //xoffset: 3,
      //yoffset: -5,
      font: {
        // autocasts as new Font()
        size: projectLabelFontSize,
        //family: "Calibri",
        //style: "italic",
        weight: 'bold',
      },
    };

    const j = 4;
    const pointTextX_pLabel = points[j][0] + xoffset; //points[j][0] + 0.2 + xoffset; //- 0.17 + xoffset
    const pointTextY0_pLabel = points[j][1];
    const pointTextY1_pLabel = points[j + 1][1] + yoffset; //0.25 + yoffset
    const pointTextY_pLabel = (pointTextY0_pLabel + pointTextY1_pLabel) / 2;

    const projectPoint: any = {
      type: 'point',
      longitude: pointTextX_pLabel,
      latitude: pointTextY_pLabel,
    };

    const n2ProjectLabelGraphic = new Graphic({
      geometry: projectPoint,
      symbol: n2ProjectLableSymbol,
    });

    n2GraphicsLayer.add(n2ProjectLabelGraphic);
  });
}

export function n2GraphicsLayerMove(projectSelected: any) {
  n2GraphicsLayer_cpLabel.removeAll();
  n2GraphicsLayer.removeAll();

  let xoffset: any;
  let yoffset: any;
  if (projectSelected === 'All') {
    xoffset = xoffset_n2;
    yoffset = yoffset_n2;
  } else {
    xoffset = xoffset_n2_reset;
    yoffset = yoffset_n2_reset;
  }
  n2Graphics(xoffset, yoffset);
}

//// --------------------- SC ------------------------------- ////
export function scAlignmentRenderer(projectSelected: any) {
  scStationLayer.renderer = stationPointSymbol_nscr;
  scStationLayer.visible = true;
  scGraphicsLayer.visible = true;
  scGraphicsLayer_cpLabel.visible = true;
  scCenterlineLayer.visible = true;
  scCenterlineConstruction.visible = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(scStationLayer);
  scGraphicsLayerMove(projectSelected);
}

export function scProgressRenderer(projectSelected: any) {
  scStationLayer.renderer = stationPointRenderer_construction_nscr;
  scStationLayer.visible = true;
  scGraphicsLayer.visible = true;
  scGraphicsLayer_cpLabel.visible = true;
  scCenterlineLayer.visible = false;
  scCenterlineConstruction.visible = true;
  n2LabelStation.labelPlacement = 'below-left';
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  projectSelected === 'All' ? null : zoomToLayer(scStationLayer);
  scGraphicsLayerMove(projectSelected);
}

export function scNoneRenderer() {
  scStationLayer.visible = false;
  scGraphicsLayer.visible = false;
  scGraphicsLayer_cpLabel.visible = false;
  scCenterlineLayer.visible = false;
  scCenterlineConstruction.visible = false;
}

function scGraphics(xoffset: any, yoffset: any) {
  var query = scBreakPointsCP.createQuery();
  query.orderByFields = ['Id'];
  scBreakPointsCP.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const paths: any = [];
    const points: any = [];
    const CPs: any = [];

    stats.forEach((result: any, index: any) => {
      const attributes = result.attributes;
      const cp = attributes.CP;
      CPs.push(cp);

      // Collect geometry of each break point
      const pointX0 = result.geometry.longitude;
      const pointY0 = result.geometry.latitude;

      // Calculate end poins and store it in a path for line generation
      const pointX1 = pointX0 - 0.05;
      const path = [
        [pointX0, pointY0],
        [pointX1, pointY0],
      ];

      // Append each path to paths
      paths.push(path);

      // Calculate a point for text symbol
      const point = [pointX1, pointY0];
      points.push(point);
    });

    // 1. Draw a horizontal line at break points of individual CPs
    // Define polyline paths and type
    const polyline: any = {
      type: 'polyline',
      paths: paths,
    };

    // Set line properties
    const simpleLineSymbol = {
      type: 'simple-line',
      color: cpLineColor,
      width: cpLineWidth,
    };

    // Add to Graphic
    const scPolylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol,
    });
    scGraphicsLayer_cpLabel.add(scPolylineGraphic);

    // 2. Add text symbol
    for (var i = 0; i < points.length; i++) {
      if (i <= points.length - 2 && i !== 8) {
        const pointTextX = points[i][0] - 0.01;
        const pointTextY0 = CPs[i] === 'S-01' ? points[i][1] + 0.01 : points[i][1];
        const pointTextY1 = points[i + 1][1];
        const pointTextY = (pointTextY0 + pointTextY1) / 2;

        const point: any = {
          type: 'point',
          longitude: pointTextX,
          latitude: pointTextY,
        };

        let textSymbol = {
          type: 'text', // autocasts as new TextSymbol()
          color: cpLabelColor,
          //haloColor: "black",
          //haloSize: "1px",
          text: CPs[i],
          //xoffset: 3,
          //yoffset: -5,
          font: {
            // autocasts as new Font()
            size: cpFontSize,
            //family: "Josefin Slab",
            weight: 'bold',
          },
        };

        const scPointGraphic = new Graphic({
          geometry: point,
          symbol: textSymbol,
        });

        scGraphicsLayer_cpLabel.add(scPointGraphic);
      }
    }

    // Project Label
    // Add Project label (N2)
    let scProjectLableSymbol = {
      type: 'text', // autocasts as new TextSymbol()
      color: centerlineProjectColor.nscrex_hex,
      //backgroundColor: projectBackgroundColor,
      //haloColor: "black",
      //haloSize: "1px",
      text: 'North-South Commuter Railway Ext.\n(Solis-Calamba)\n55km',
      horizontalAlignment: 'right',
      //xoffset: 3,
      //yoffset: -5,
      font: {
        // autocasts as new Font()
        size: projectLabelFontSize,
        //family: "Calibri",
        //style: "italic",
        weight: 'bold',
      },
    };

    const j = 5;
    const pointTextX_pLabel = points[j][0] + xoffset;
    const pointTextY0_pLabel = points[j][1] + yoffset;
    const pointTextY1_pLabel = points[j + 1][1];
    const pointTextY_pLabel = (pointTextY0_pLabel + pointTextY1_pLabel) / 2;

    const projectPoint: any = {
      type: 'point',
      longitude: pointTextX_pLabel,
      latitude: pointTextY_pLabel,
    };

    const scProjectLabelGraphic = new Graphic({
      geometry: projectPoint,
      symbol: scProjectLableSymbol,
    });

    scGraphicsLayer.add(scProjectLabelGraphic);
  });
}

export function scGraphicsLayerMove(projectSelected: any) {
  scGraphicsLayer_cpLabel.removeAll();
  scGraphicsLayer.removeAll();

  let xoffset: any;
  let yoffset: any;
  if (projectSelected === 'All') {
    xoffset = xoffset_sc;
    yoffset = yoffset_sc;
  } else {
    xoffset = xoffset_sc_reset;
    yoffset = yoffset_sc_reset;
  }
  scGraphics(xoffset, yoffset);
}

///////////////////////////////////////////////////////////
export function stationLabeFontSizeDefault() {
  n2_station_label.font.size = labelStation_fontSize_default;
  sc_station_label.font.size = labelStation_fontSize_default;
  n1_station_label.font.size = labelStation_fontSize_default;
}

export function stationPointSymbolToOriginal() {
  n1StationLayer.renderer = stationPointSymbol_nscr;
  n2StationLayer.renderer = stationPointSymbol_nscr;
  scStationLayer.renderer = stationPointSymbol_nscr;
  mmspStationLayer.renderer = stationPointSymbol_mmsp;
}

export function stationPointSymbolToConstruction() {
  n1StationLayer.renderer = stationPointRenderer_construction_nscr;
  n2StationLayer.renderer = stationPointRenderer_construction_nscr;
  scStationLayer.renderer = stationPointRenderer_construction_nscr;
  mmspStationLayer.renderer = stationPointRenderer_construction_mmsp;
}

export function originalConstructionLineWidth() {
  mmspCenterlineConstruction.renderer = lineSymbol_construction;
  n1CenterlineConstruction.renderer = lineSymbol_construction;
  n2CenterlineConstruction.renderer = lineSymbol_construction;
  scCenterlineConstruction.renderer = lineSymbol_construction;
}

/// 2. Individual Projects
export function projectConstructionLineWidth() {
  mmspCenterlineConstruction.renderer = lineSymbol_construction_project;
  n1CenterlineConstruction.renderer = lineSymbol_construction_project;
  n2CenterlineConstruction.renderer = lineSymbol_construction_project;
  scCenterlineConstruction.renderer = lineSymbol_construction_project;
}

///////////////////////////////////////////////////////
// Overview Map constraint
export function disableZooming(overView: any) {
  overView.popup.dockEnabled = true;

  // Removes the zoom action on the popup
  overView.popup.actions = [];

  // stops propagation of default behavior when an event fires
  function stopEvtPropagation(event: any) {
    event.stopPropagation();
  }

  // exlude the zoom widget from the default UI
  view.ui.components = [];
  overView.ui.components = [];

  // disable mouse wheel scroll zooming on the overView
  overView.on('mouse-wheel', stopEvtPropagation);

  // disable zooming via double-click on the overView
  overView.on('double-click', stopEvtPropagation);

  // disable zooming out via double-click + Control on the overView
  overView.on('double-click', ['Control'], stopEvtPropagation);

  // disables pinch-zoom and panning on the overView
  overView.on('drag', stopEvtPropagation);

  // disable the overView's zoom box to prevent the Shift + drag
  // and Shift + Control + drag zoom gestures.
  overView.on('drag', ['Shift'], stopEvtPropagation);
  overView.on('drag', ['Shift', 'Control'], stopEvtPropagation);

  // prevents zooming with the + and - keys
  overView.on('key-down', (event: any) => {
    const prohibitedKeys = [
      '+',
      '-',
      'Shift',
      '_',
      '=',
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
      'ArrowLeft',
    ];
    const keyPressed = event.key;
    if (prohibitedKeys.indexOf(keyPressed) !== -1) {
      event.stopPropagation();
    }
  });

  return overView;
}

const extentDebouncer = promiseUtils.debounce((extent3Dgraphic: any, extent: any) => {
  extent3Dgraphic.geometry = extent;
});

export function setup() {
  let initialGeometry: any = null;
  const extent3Dgraphic = new Graphic({
    geometry: initialGeometry, // default: null
    symbol: new SimpleFillSymbol({
      color: [0, 0, 0, 0],
      outline: {
        width: 2,
        color: '#ff1947', //[178,34,34]
      },
    }),
  });
  overView.graphics.add(extent3Dgraphic);

  reactiveUtils.watch(
    () => view.extent,
    (extent: any) => {
      // Sync the overview map location
      // whenever the 3d view is stationary
      extentDebouncer(extent3Dgraphic, extent);
    },
    {
      initial: true,
    },
  );
}

// Zoom to layer
function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name != 'AbortError') {
          console.error(error);
        }
      });
  });
}

// Return to home extent
const home_center: any = [120.9, 14.7832299];
export function homeExtentRenderer() {
  view.rotation = home_rotation;
  view.scale = 577790.5542885;
  view.center = home_center;
}

// Station List

export function openStationList() {
  n1StationLayer.labelingInfo = [scLabelStation_number, scLabelStation];
  n2StationLayer.labelingInfo = [n2LabelStation_number, n2LabelStation];
  scStationLayer.labelingInfo = [scLabelStation_number, scLabelStation];
}

export function closeStationList() {
  n1StationLayer.labelingInfo = [scLabelStation];
  n2StationLayer.labelingInfo = [n2LabelStation];
  scStationLayer.labelingInfo = [scLabelStation];
}
