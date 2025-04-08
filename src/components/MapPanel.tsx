/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import { useRef, useEffect, useState } from 'react';
import {
  compass,
  controlPanelExpand,
  legend_construction_mmsp,
  legend_construction_n1,
  legend_construction_n2,
  legend_construction_sc,
  map,
  overView,
  printExpand,
  stationExpand,
  view,
} from '../Scene';
import '../index.css';
import '../App.css';
import {
  mmspAlignmentRenderer,
  disableZooming,
  setup,
  mmspProgressRenderer,
  mmspNoneRenderer,
  AlignmentLegendOn,
  ProgressAllLegendOn,
  n1AlignmentRenderer,
  n1ProgressRenderer,
  n1NoneRenderer,
  n2AlignmentRenderer,
  n2NoneRenderer,
  scNoneRenderer,
  scAlignmentRenderer,
  scProgressRenderer,
  n2ProgressRenderer,
  homeExtentRenderer,
  stationLabeFontSizeDefault,
  stationPointSymbolToOriginal,
  originalConstructionLineWidth,
  projectConstructionLineWidth,
  stationPointSymbolToConstruction,
  openStationList,
  closeStationList,
  dateUpdate,
} from '../Query';
import '@esri/calcite-components/dist/components/calcite-card';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteCard, CalciteButton } from '@esri/calcite-components-react';
import ProjectListDisplay, { useProjectListContext } from './ProjectPanelContext';
import CategoryListDisplay, { useCategoryListContext } from './CateogryPanelContext';

import {
  cutoff_days,
  stationArray1,
  stationArray2,
  updatedDateCategoryNames,
} from '../UniqueValues';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';

function MapPanel() {
  const mapDiv = useRef(null);
  const overviewMapDiv = useRef(null);
  const compassDiv = useRef<HTMLDivElement | undefined | any>(null);
  const { categorySelected } = useCategoryListContext();
  const { projectSelected } = useProjectListContext();
  const [controlPanelExpanded, setControlPanelExpanded] = useState<boolean>(true);
  const [stationlPanelExpanded, setStationPanelExpanded] = useState<boolean>(false);
  const [printPanelExpanded, setPrintPanelExpanded] = useState<boolean>(false);
  const [trainOperationScheduleForAll, setTrainOperationScheduleForAll] = useState<boolean>(false);

  // 0. Updated date
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);
  const [daysPass, setDaysPass] = useState<boolean>(false);
  useEffect(() => {
    dateUpdate(updatedDateCategoryNames).then((response: any) => {
      setAsOfDate(response[0][0]);
      setDaysPass(response[0][1] >= cutoff_days ? true : false);
    });
  }, []);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');

      // Launch button
      const launchButton = document.querySelector(`[id=launch-button]`) as HTMLDivElement;

      // Compass
      compass.container = compassDiv.current;
      view.ui.add(compass, 'top-left');

      // Printer widget
      view.ui.add(printExpand, 'top-left');

      // Legend
      // legend.container = layerLegendDiv.current;
      // view.ui.add(legend, 'bottom-left');

      // Control Panel
      controlPanelExpand.content = document.querySelector(`[id="controlpanel"]`) as HTMLDivElement;
      view.ui.add(controlPanelExpand, 'top-right');

      // Station Name Panel (NSCR, NSCR-Ex)
      stationExpand.content = document.querySelector(`[id="stationpanel"]`) as HTMLDivElement;
      view.ui.add(stationExpand, 'bottom-right');
      view.ui.add(launchButton, 'top-left');
    }
  }, []);

  useEffect(() => {
    if (overviewMapDiv.current) {
      overView.container = overviewMapDiv.current;
      view.ui.add(overviewMapDiv.current, 'top-right');

      overView.when(disableZooming);

      overView.when(() => {
        view.when(() => {
          setup();
        });
      });
    }
  }, []);

  // Control Panle Expand
  reactiveUtils.when(
    () => controlPanelExpand?.expanded === false,
    () => setControlPanelExpanded(false),
  );

  reactiveUtils.when(
    () => controlPanelExpand?.expanded === true,
    () => setControlPanelExpanded(true),
  );

  // Station List Expand
  reactiveUtils.when(
    () => stationExpand?.expanded === false,
    () => setStationPanelExpanded(false),
  );

  reactiveUtils.when(
    () => stationExpand?.expanded === false,
    () => closeStationList(),
  );

  reactiveUtils.when(
    () => stationExpand?.expanded === true,
    () => setStationPanelExpanded(true),
  );

  reactiveUtils.when(
    () => stationExpand?.expanded === true,
    () => openStationList(),
  );

  // Printer widget
  reactiveUtils.when(
    () => printExpand?.expanded === false,
    () => setPrintPanelExpanded(false),
  );

  reactiveUtils.when(
    () => printExpand?.expanded === true,
    () => setPrintPanelExpanded(true),
  );

  // Alignment & Progress Line and Graphics
  useEffect(() => {
    if (categorySelected && projectSelected) {
      // 1. Category: Alignment
      if (categorySelected === 'Alignment') {
        AlignmentLegendOn();
        setTrainOperationScheduleForAll(true);
        if (projectSelected === 'All') {
          mmspAlignmentRenderer(projectSelected);
          n1AlignmentRenderer(projectSelected);
          n2AlignmentRenderer(projectSelected);
          scAlignmentRenderer(projectSelected);
          homeExtentRenderer();
          stationLabeFontSizeDefault();
          stationPointSymbolToOriginal();
        } else if (projectSelected === 'MMSP') {
          mmspAlignmentRenderer(projectSelected);
          n1NoneRenderer();
          n2NoneRenderer();
          scNoneRenderer();
        } else if (projectSelected === 'NSCR') {
          mmspNoneRenderer();
          n1AlignmentRenderer(projectSelected);
          n2NoneRenderer();
          scNoneRenderer();
        } else if (projectSelected === 'MCRP') {
          mmspNoneRenderer();
          n1NoneRenderer();
          n2AlignmentRenderer(projectSelected);
          scNoneRenderer();
        } else if (projectSelected === 'SCRP') {
          mmspNoneRenderer();
          n1NoneRenderer();
          n2NoneRenderer();
          scAlignmentRenderer(projectSelected);
        }
        // 2. Category: Project
      } else if (categorySelected === 'Progress') {
        originalConstructionLineWidth();
        projectConstructionLineWidth();
        setTrainOperationScheduleForAll(false);
        if (projectSelected === 'All') {
          mmspProgressRenderer(projectSelected);
          n1ProgressRenderer(projectSelected);
          n2ProgressRenderer(projectSelected);
          scProgressRenderer(projectSelected);
          homeExtentRenderer();
          ProgressAllLegendOn();
          stationPointSymbolToConstruction();
        } else if (projectSelected === 'MMSP') {
          mmspProgressRenderer(projectSelected);
          n1NoneRenderer();
          n2NoneRenderer();
          scNoneRenderer();
          legend_construction_n1.visible = false;
          legend_construction_n2.visible = false;
          legend_construction_sc.visible = false;
          legend_construction_mmsp.visible = true;
        } else if (projectSelected === 'NSCR') {
          mmspNoneRenderer();
          n1ProgressRenderer(projectSelected);
          n2NoneRenderer();
          scNoneRenderer();
          legend_construction_n1.visible = true;
          legend_construction_n2.visible = false;
          legend_construction_sc.visible = false;
          legend_construction_mmsp.visible = false;
        } else if (projectSelected === 'MCRP') {
          mmspNoneRenderer();
          n1NoneRenderer();
          n2ProgressRenderer(projectSelected);
          scNoneRenderer();
          legend_construction_n1.visible = false;
          legend_construction_n2.visible = true;
          legend_construction_sc.visible = false;
          legend_construction_mmsp.visible = false;
        } else if (projectSelected === 'SCRP') {
          mmspNoneRenderer();
          n1NoneRenderer();
          n2NoneRenderer();
          scProgressRenderer(projectSelected);
          legend_construction_n1.visible = false;
          legend_construction_n2.visible = false;
          legend_construction_sc.visible = true;
          legend_construction_mmsp.visible = false;
        }
      }
    }
  }, [categorySelected, projectSelected]);

  // Legend for Alignment & Progress
  useEffect(() => {
    if (projectSelected !== 'All') {
      view.rotation = 360;
    }
  }, [categorySelected, projectSelected]);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>

      {/* Launch button*/}
      <CalciteButton
        id="launch-button"
        href="https://eijigorilla.github.io/alignment_all"
        icon-end="launch"
        scale="s"
        label="Open in a new tab"
        target="_blank"
      ></CalciteButton>

      {/* Control Panel*/}
      <div id="controlpanel">
        <CalciteCard style={{ fontSize: '0.5rem' }}>
          <CategoryListDisplay />
          <ProjectListDisplay />
        </CalciteCard>
      </div>
      {/* Overview Map*/}
      <div
        className="overviewMapdDiv"
        ref={overviewMapDiv}
        style={{
          position: 'fixed',
          top: controlPanelExpanded === false ? '50px' : '200px',
        }}
      ></div>
      {/* Station Name List for NSCR and NSCR-Ex*/}
      <div
        id="stationpanel"
        style={{ display: stationlPanelExpanded === false ? 'none' : 'block' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '5px',
          }}
        >
          <CalciteCard>
            {stationArray1 &&
              stationArray1.map((station: any, index: any) => {
                return (
                  <dl
                    style={{
                      width: '8vw',
                      height: 'auto',
                      alignItems: 'center',
                      color: 'rgba(194, 194, 194, 0.884)',
                      fontSize: '1.2em',
                      lineHeight: '5px',
                    }}
                    key={index}
                  >
                    <dt>
                      {index + 1}. {station}
                    </dt>
                  </dl>
                );
              })}
          </CalciteCard>
          <CalciteCard>
            {stationArray2 &&
              stationArray2.map((station: any, index: any) => {
                return (
                  <dl
                    style={{
                      width: '8vw',
                      height: 'auto',
                      alignItems: 'center',
                      color: 'rgba(194, 194, 194, 0.884)',
                      fontSize: '1.2em',
                      lineHeight: '5px',
                    }}
                    key={index}
                  >
                    <dt>
                      {index + 19}. {station}
                    </dt>
                  </dl>
                );
              })}
          </CalciteCard>
        </div>
      </div>
      {/* Train Operation Schedule*/}
      <img
        style={{
          display: 'none', // trainOperationScheduleForAll === true ? 'block' : 'none',
          opacity: printPanelExpanded === true ? '0%' : '100%',
        }}
        src="https://EijiGorilla.github.io/Symbols/Gallery/Train_Operation_20240711.jpg"
      />

      {/* Updated date */}
      <div
        style={{
          color: daysPass === true ? 'red' : 'gray',
          fontSize: '0.8rem',
          float: 'right',
          marginRight: '5px',
          marginTop: '5px',
          zIndex: '1',
          position: 'fixed',
          bottom: 5,
          left: '25%',
        }}
      >
        {!asOfDate ? '' : 'As of ' + asOfDate}
      </div>
    </>
  );
}

export default MapPanel;
