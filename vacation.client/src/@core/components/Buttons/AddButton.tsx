import { Button } from "reactstrap"
import IconoIonic from "../Ionicon";
import { addOutline } from 'ionicons/icons';

interface AddButtonProps {
  onNew: () => void;
}

export const AddButton = ({ onNew }: AddButtonProps) => {
  return (
    <Button onClick={ onNew } className="mb-2 me-2 btn-icon btn-icon-only btn-info">
      <IconoIonic name={addOutline} className="btn-icon-wrapper"/>
    </Button>
  )
}
