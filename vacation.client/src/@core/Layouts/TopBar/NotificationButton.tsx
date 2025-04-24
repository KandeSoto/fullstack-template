import { Button } from "reactstrap";
import IconoIonic from "../../components/Ionicon";
import { checkmarkDone } from 'ionicons/icons';

export const NotificationButton = () => {
  return (
   <div className="header-dots"> 
    <Button color="link" className="p-0 mr-2 btn btn-link">
     <span className="icon-wrapper icon-wrapper-alt rounded-circle">
       <span className="icon-wrapper-bg bg-danger"></span>        
        <IconoIonic name={checkmarkDone} size="large" className="p-1 icon text-danger icon-anim-pulse"/>
       <span className="badge badge-dot badge-dot-sm badge-danger">Notifications</span>
     </span>  
    </Button>                
    <span className="badge rounded-pill bg-warning mb-4">2</span>                                                    
   </div>
  )
}
