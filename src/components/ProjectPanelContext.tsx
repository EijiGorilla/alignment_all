/* eslint-disable prettier/prettier */
import { createContext, useContext, useState, ReactNode } from 'react';
import { useBetween } from 'use-between';
import '../index.css';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteLabel,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from '@esri/calcite-components-react';

function ProjectListData() {
  const [projectSelected, setProjectValueSelected] = useState<any>('All');
  const projectLabel = ['All', 'NSCR', 'MMSP', 'MCRP', 'SCRP'];

  // handle change event of the project
  const handleProjectListChange = (obj: any) => {
    setProjectValueSelected(obj);
  };

  return {
    handleProjectListChange,
    projectSelected,
    projectLabel,
  };
}

function ProjectListDisplay() {
  const { handleProjectListChange, projectSelected, projectLabel } = useBetween(ProjectListData);

  return (
    <>
      <CalciteLabel>
        Project
        <CalciteSegmentedControl
          scale="m"
          onCalciteSegmentedControlChange={(event: any) =>
            handleProjectListChange(event.target.selectedItem.id)
          }
        >
          {projectSelected &&
            projectLabel.map((project: any, index: any) => {
              return (
                <CalciteSegmentedControlItem
                  {...(projectSelected === project ? { checked: true } : {})}
                  key={index}
                  value={project}
                  id={project}
                >
                  {project}
                </CalciteSegmentedControlItem>
              );
            })}
        </CalciteSegmentedControl>
      </CalciteLabel>
    </>
  );
}

type ProjectContextType = {
  projectSelected: any;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  projectSelected: undefined,
};

const ProjectListContext = createContext<ProjectContextType>({
  ...initialState,
});

export function ProjectListDataProvider({ children }: Props) {
  const { projectSelected } = useBetween(ProjectListData);

  return (
    <ProjectListContext.Provider
      value={{
        projectSelected,
      }}
    >
      {children}
    </ProjectListContext.Provider>
  );
}

export const useProjectListContext = () => useContext(ProjectListContext);
export default ProjectListDisplay;
