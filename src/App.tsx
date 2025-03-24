/* eslint-disable prettier/prettier */
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteShell } from '@esri/calcite-components-react';
import MapPanel from './components/MapPanel';
import { CategoryListDataProvider } from './components/CateogryPanelContext';
import { ProjectListDataProvider } from './components/ProjectPanelContext';

function App() {
  return (
    <>
      <CalciteShell>
        <CategoryListDataProvider>
          <ProjectListDataProvider>
            <MapPanel />
          </ProjectListDataProvider>
        </CategoryListDataProvider>
      </CalciteShell>
    </>
  );
}

export default App;
