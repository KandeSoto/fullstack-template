import IconoIonic from "../Ionicon";
import { constructOutline, home } from 'ionicons/icons';

interface AppPageTitleProps {
    title: string;
    description: string;
    route: string;
}

export const AppPageTitle = ({title, description, route}: AppPageTitleProps) => {
  return (
    <div className="app-page-title">
        <div className="page-title-wrapper">
            <div className="page-title-heading">
                <div className="page-title-icon">                                   
                    <IconoIonic name={constructOutline} className="text-primary"/>
                </div>
                <div>
                    {title}
                    <div className="page-title-subheading">{description}</div>
                </div>
            </div>
            <div className="page-title-actions">
                <a href="#">
                <IconoIonic name={home} className="text-primary"/>
                {route}
            </a>                                    
            </div>
        </div>
    </div>  
  )
}
