export type TIcon = 'arrow' | 'bars' | 'mobile' | 'calendar' | 'star';

interface IIconProps {
  icon: TIcon;
  className?: string;
}

export function Icon({ icon, className = '' }: IIconProps) {
  return <i className={`icon-${icon} ${className}`} />;
}
