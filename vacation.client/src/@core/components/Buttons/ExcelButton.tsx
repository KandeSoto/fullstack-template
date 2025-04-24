import { Button } from "reactstrap"
import IconoFontAwesome from "../FontAwesomeIcon";
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

interface ExcelButtonProps {
  onExport: () => void;
}

export const ExcelButton = ({ onExport }: ExcelButtonProps) => {
  return (
    <Button onClick={ onExport } className="mb-2 me-2 btn-icon btn-icon-only btn-success">
      <IconoFontAwesome icon={faFileExcel} className="btn-icon-wrapper fa-fw" />
    </Button>
  )
}
