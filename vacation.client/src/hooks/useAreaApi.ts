import { useCallback } from 'react';
import { doGet, doPost, doPut, doDelete, doGetFile } from '@src/apis/baseAPI';
import { AreaModel, ErrCallbackType, APIResponseMessage } from '@src/types';
import catalogs from '@src/configs/catalogs';

export const useAreaApi = () => {
  const getAllAreasApi = useCallback(
    async (errorCallback?: ErrCallbackType): Promise<AreaModel[] | undefined> => {
      try {
        const response = await doGet<APIResponseMessage<AreaModel[]>>(catalogs.getAllAreasEndPoint);

        const data: AreaModel[] = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        return undefined;
      }
    },
    []
  );

  const insertAreaApi = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<AreaModel> => {
      try {
        const response = await doPost<APIResponseMessage<AreaModel>>(
          catalogs.addAreasEndPoint,
          area
        );

        const data: AreaModel = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al agregar el área');
      }
    },
    []
  );

  const updateAreaApi = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<AreaModel> => {
      try {
        const response = await doPut<APIResponseMessage<AreaModel>>(
          catalogs.updateAreasEndPoint,
          area
        );

        const data: AreaModel = response.data;

        return data;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al actualizar el área');
      }
    },
    []
  );

  const deleteAreaApi = useCallback(
    async (idArea: number, errorCallback?: ErrCallbackType): Promise<number> => {
      try {
        const response = await doDelete<APIResponseMessage<number>>(catalogs.deleteAreasEndPoint, {
          idArea,
        });

        const result: number = response.data;

        return result;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al borrar el área');
      }
    },
    []
  );

  const enableDisableAreaApi = useCallback(
    async (area: AreaModel, errorCallback?: ErrCallbackType): Promise<number> => {
      try {
        const response = await doPost<APIResponseMessage<number>>(
          catalogs.enableAreasEndPoint,
          area
        );

        const result: number = response.data;

        return result;
      } catch (error) {
        if (errorCallback) errorCallback({ Error: error as string });
        throw new Error('Error al actualizar el estatus del área');
      }
    },
    []
  );

  const exportAreasToExcelApi = useCallback(async () => {
    const blob = await doGetFile(catalogs.exportAreasEndPoint);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Areas.xlsx');
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }, []);

  return {
    getAllAreasApi,
    insertAreaApi,
    updateAreaApi,
    deleteAreaApi,
    enableDisableAreaApi,
    exportAreasToExcelApi,
  };
};
