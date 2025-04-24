import { useCallback, useContext } from "react";
import { Card, CardBody } from "reactstrap"
import { ActionDropdown, AppPageTitle, CatalogWidgetRight, DataTable } from "@src/@core/components";
import { ColumnDef } from '@tanstack/react-table';
import { AreaContext } from "@src/context/area/AreaContext";
import { AreaModel } from "@src/types";
import IconoFontAwesome from "@src/@core/components/FontAwesomeIcon";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { AreaModal } from "@src/views/modals/areas/AreaModal";
import { useModal } from "@src/hooks/useModal";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

export const AreasListView = () => {

  const { t } = useTranslation();
  const { areaList, selectAreaToEdit, setModalOnEditMode, removeArea, enableDisableArea, exportAreasToExcel } = useContext(AreaContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal(false);

  const getAreaColumns: ColumnDef<AreaModel>[] = [
    {
      accessorKey: 'active',
      header: t('area.headers.active'),
      enableSorting: false,
      meta: {
        className: 'th-active-column',
      },
      cell: ({ row, getValue }) => {
        const activo = getValue() as boolean;
        const area = row.original;
    
        return (
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => handleToggleActive(area)}
          >
            <IconoFontAwesome
              icon={activo ? faToggleOn : faToggleOff}
              className={activo ? 'text-success fs-3' : 'text-secondary fs-3'}
            />
          </span>
        );
      }
    },
    {
      accessorKey: 'description',
      header: t('area.headers.description'),
      enableSorting: true,
      cell: info => info.getValue(),
    },    
    {
      id: 'acciones',
      header: t('area.headers.actions'),
      enableSorting: false,
      meta: {
        className: 'th-action-column',
      },
      cell: ({ row }) => {
        const area = row.original;
  
        return (          
          <ActionDropdown 
            item={area} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />              
        );
      },
    },
  ];

  const handleEdit = (area: AreaModel) => {
    selectAreaToEdit(area.idArea);
    setModalOnEditMode(true);
    handleOpenModal();
  };
  
  const handleDelete = useCallback(async (area: AreaModel) => {
    
    const result = await removeArea(area.idArea);
    if (result === 1) {            
      toast.success(t('messageToast.successDelete'));
    }
    else {
      toast.error('Error al eliminar el área');
    }

  }, [removeArea, t]);

  const handleToggleActive = useCallback(async (area: AreaModel) => {       
    const result = await enableDisableArea(area);
    if (result === 1) {            
      toast.success(t('messageToast.successActive'));
    }
    else {      
      toast.error("Error al actualizar el área");
    }
  
  },[enableDisableArea, t]);

  return (
    <>
      <AppPageTitle 
        title={ t('area.title') }
        description={ t('area.description') }
        route={ t('area.route') }/>

      <div className="row">
        <div className="col-sm-12">
          <Card>
            <CardBody>
              <CatalogWidgetRight 
              onExport={ exportAreasToExcel}
              onNew={
                () => {
                  setModalOnEditMode(false);
                  handleOpenModal();
                }
              }/>
              <DataTable
                data={areaList || []}
                columns={getAreaColumns}
              />
            </CardBody>
          </Card>    
          <AreaModal
            isOpen={isOpen}
            onClose={handleCloseModal}            
          />              
        </div>
      </div>
    </>
  )
}
