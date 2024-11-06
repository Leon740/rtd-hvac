interface IIconProps {
  icon: 'arrow' | 'bars' | 'calendar';
  className?: string;
}

export function Icon({ icon, className = '' }: IIconProps) {
  return <i class={`icon-${icon} ${className}`}></i>;
}
