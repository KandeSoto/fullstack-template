// IconoIonic.tsx
import { IonIcon } from '@ionic/react';
import { IconIonicProps } from './type';

const IconoIonic = ({ name, color, size, className }: IconIonicProps) => {
  return <IonIcon icon={name} color={color} size={size} className={className} />;
};

export default IconoIonic;