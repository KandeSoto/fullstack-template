// IconoReact.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconoReactProps } from './type';

const IconoFontAwesome = ({ icon, className }: IconoReactProps) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default IconoFontAwesome;
