import { AddButton, ExcelButton } from "../Buttons";

interface CatalogWidgetRightProps {
  onNew: () => void;
  onExport: () => void;
}

export const CatalogWidgetRight = ({ onNew, onExport }: CatalogWidgetRightProps) => {
  return (
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">                                                
          <div className="widget-content-right">    
              <ExcelButton onExport={ onExport } />                                                                                                                                                                                  
              <AddButton onNew={ onNew }/>   
          </div>                                    
      </div>
    </div>
  )
}
