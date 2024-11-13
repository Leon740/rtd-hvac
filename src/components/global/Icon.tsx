interface IIconProps {
  icon: 'arrow' | 'bars' | 'mobile' | 'calendar'
  className?: string
}

export function Icon({ icon, className = '' }: IIconProps) {
  return <i className={`icon-${icon} ${className}`}></i>
}
