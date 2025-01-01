import { Icon, type TIcon } from '@components/global/Icon';
import { Link, type ILinkProps } from '@components/global/Link';

type TButtonProps = Omit<ILinkProps, 'children'>;

interface IButtonProps extends TButtonProps {
  style: 'Primary' | 'Secondary';
  label: string;
  icon?: TIcon;
  iconClassName?: string;
}

export function Button({
  buttonType,
  href,
  handleClick = () => {},
  isExternal = false,
  className = '',
  style = 'Secondary',
  label,
  icon = 'arrow',
  iconClassName = ''
}: IButtonProps) {
  return (
    <Link
      buttonType={buttonType}
      href={href}
      handleClick={handleClick}
      isExternal={isExternal}
      className={`text-16-bold tracking-wider py-16 px-32 flex flex-row gap-8 items-center max-w-max border-2 border-red-500 rounded-16 ${style === 'Secondary' ? 'text-red-500 bg-white hover:text-white hover:bg-red-500' : 'text-white bg-red-500 hover:bg-red-600'} ${className}`}
    >
      <span>{label}</span>
      <Icon icon={icon} className={`text-16 ${iconClassName}`} />
    </Link>
  );
}
