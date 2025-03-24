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

function CategoryListData() {
  const [categorySelected, setCategoryValueSelected] = useState<any>('Alignment');
  const categoryLabel = ['Alignment', 'Progress'];

  // handle change event of the category
  const handleCategoryListChange = (obj: any) => {
    setCategoryValueSelected(obj);
  };

  return {
    handleCategoryListChange,
    categorySelected,
    categoryLabel,
  };
}

function CategoryListDisplay() {
  const { handleCategoryListChange, categorySelected, categoryLabel } =
    useBetween(CategoryListData);

  return (
    <>
      <CalciteLabel>
        Cateogry
        <CalciteSegmentedControl
          scale="m"
          onCalciteSegmentedControlChange={(event: any) =>
            handleCategoryListChange(event.target.selectedItem.id)
          }
        >
          {categorySelected &&
            categoryLabel.map((category: any, index: any) => {
              return (
                <CalciteSegmentedControlItem
                  {...(categorySelected === category ? { checked: true } : {})}
                  key={index}
                  value={category}
                  id={category}
                >
                  {category}
                </CalciteSegmentedControlItem>
              );
            })}
        </CalciteSegmentedControl>
      </CalciteLabel>
    </>
  );
}

type CategoryContextType = {
  categorySelected: any;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  categorySelected: undefined,
};

const CategoryListContext = createContext<CategoryContextType>({
  ...initialState,
});

export function CategoryListDataProvider({ children }: Props) {
  const { categorySelected } = useBetween(CategoryListData);

  return (
    <CategoryListContext.Provider
      value={{
        categorySelected,
      }}
    >
      {children}
    </CategoryListContext.Provider>
  );
}

export const useCategoryListContext = () => useContext(CategoryListContext);
export default CategoryListDisplay;
