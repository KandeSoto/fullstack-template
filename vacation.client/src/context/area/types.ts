import { AreaModel } from '@src/types';

export type AreaContextType = {
  areaList: AreaModel[];
  area: AreaModel | null;
  isModalOnEditMode: boolean;
  submitArea: (data: AreaModel, isUpdating: boolean) => Promise<AreaModel>;
  selectAreaToEdit: (idArea: number) => AreaModel | null;
  setModalOnEditMode: (isEditModal: boolean) => void;
  removeArea: (idArea: number) => Promise<number>;
  enableDisableArea: (data: AreaModel) => Promise<number>;
  exportAreasToExcel: () => Promise<void>;
};
