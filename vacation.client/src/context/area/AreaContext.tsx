import { createContext } from 'react';
import { AreaContextType } from './types';
import { AreaModel } from '@src/types';

const defaultProvider: AreaContextType = {
  areaList: [],
  area: null, 
  isModalOnEditMode: false,

  //Dummy functions to implement later
  submitArea: async () => {
    console.warn('submitArea not implemented');
    return {} as AreaModel;
  },
  selectAreaToEdit: () => {
    console.warn('selectAreaToEdit not implemented');
    return null;
  },
  setModalOnEditMode: () => {
    console.warn('setModalOnEditMode not implemented');
  },
  removeArea: async () => {
    console.warn('removeArea not implemented');
    return 0 as number;
  },
  enableDisableArea: async () => {
    console.warn('enableDisableArea not implemented');
    return 0 as number;
  },
  exportAreasToExcel: async () => {
    console.warn('exportAreasToExcel not implemented');
  },
};

export const AreaContext = createContext<AreaContextType>(defaultProvider);