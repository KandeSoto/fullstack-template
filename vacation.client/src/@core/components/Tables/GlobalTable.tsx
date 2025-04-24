import { Button, Table } from "reactstrap";
import IconoFontAwesome from "../FontAwesomeIcon";
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import IconoIonic from "../Ionicon";
import { pencilOutline, trashOutline } from 'ionicons/icons';

export const GlobalTable = () => {
  return (    
    <Table bordered striped hover>
      <thead className="bg-night-sky">
        <tr>
            <th className="th-active-column">
                Activo
            </th>
            <th className="th-action-column">
                Acciones
            </th>
            <th>
                Descripción
            </th>                                         
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
            <IconoFontAwesome icon={faToggleOn} className="text-success fs-3"/>            
        </td>
        <td>    
            <Button className="mb-2 me-2 btn-icon btn-icon-only btn-warning">
                <IconoIonic name={pencilOutline} className="btn-icon-wrapper" />
            </Button>   
            <Button className="mb-2 me-2 btn-icon btn-icon-only btn-danger">
                <IconoIonic name={trashOutline} className="btn-icon-wrapper" />
            </Button>                                                                                                                         
        </td>
        <td>
            Area 1
        </td>
      </tr>
      <tr>
          <td>
              <IconoFontAwesome icon={faToggleOff} className="fs-3"/>              
          </td>
          <td>                                                    
            <Button className="mb-2 me-2 btn-icon btn-icon-only btn-warning">
                <IconoIonic name={pencilOutline} className="btn-icon-wrapper" />
            </Button>   
            <Button className="mb-2 me-2 btn-icon btn-icon-only btn-danger">
                <IconoIonic name={trashOutline} className="btn-icon-wrapper" />
            </Button>
          </td>
          <td>
              Area 2
          </td>
      </tr>
      </tbody>
    </Table>
  )
}
