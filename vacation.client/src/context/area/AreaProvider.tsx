import { ReactNode, useCallback, useEffect, useState } from 'react';
import { AreaModel } from '@src/types';
import { useAreaApi  } from '@src/hooks/useAreaApi';
import { AreaContext } from './AreaContext';
import { updateAndSortList } from '@src/utils/sortAndUpdate';

 export const AreaProvider = ({ children }: { children: ReactNode }) => {
  const [areaList, setAreaList] = useState<AreaModel[]>([]);
  const [area, setArea] = useState<AreaModel | null>(null);
  const [isModalOnEditMode, setIsUpdating] = useState<boolean>(false);

  const { getAllAreasApi , insertAreaApi , updateAreaApi , deleteAreaApi , enableDisableAreaApi, exportAreasToExcelApi  } = useAreaApi ();

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getAllAreasApi(error => {
        console.error('Error fetching areas:', error);
      });

      if (data) setAreaList(data);
    };

    fetchAreas();
  }, [getAllAreasApi]);

  const selectAreaToEdit = useCallback((idArea: number) => {
    const areaSelected = areaList?.find(item => item.idArea === idArea);
    setArea(areaSelected || null);

    return area;

  }, [areaList, area]);

  const setModalOnEditMode = useCallback((isEditModal: boolean) => {
    setIsUpdating(isEditModal);

  }, []);

  const submitArea = useCallback(async (data: AreaModel, isUpdating: boolean): Promise<AreaModel> => {
    const area: AreaModel = { ...data };
    const newArea = isUpdating ? await updateAreaApi(area) : await insertAreaApi(area);
    
    if (newArea) {      
      const newList = updateAndSortList(areaList, newArea, 'idArea', 'description');
      setAreaList(newList);

    } else {
      console.error('No se pudo guardar el área.');
    }

    return newArea;

  }, [insertAreaApi, updateAreaApi, areaList]);

  const removeArea = useCallback(async (idArea: number): Promise<number> => {
    const result = await deleteAreaApi(idArea);

    if (result === 1) {      
      setAreaList(areaList.filter(area => area.idArea !== idArea));
    }else {
      console.error('Error al eliminar el área.');
    }

    return result;
  }
  , [deleteAreaApi, areaList]); 

  const enableDisableArea = useCallback(async (data: AreaModel): Promise<number> => {    
    const result = await enableDisableAreaApi(data);

    if (result === 1) {      
      setAreaList(prev =>
        prev.map(area =>
          area.idArea === data.idArea ? { ...area, active: !area.active } : area
        )
      );
    
    }else {
      console.error('Error al actualizar su estatus del área.');
    }

    return result;
  }
  , [enableDisableAreaApi]); 

  const values = {
     //properties
     areaList,
     area,
     isModalOnEditMode,
 
     //functions    
     selectAreaToEdit,
     setModalOnEditMode,
     submitArea,
     removeArea,
     enableDisableArea,
     exportAreasToExcel: exportAreasToExcelApi,
  }

  return (
    <AreaContext.Provider value={values}>
      {children}
    </AreaContext.Provider>
  );

};
