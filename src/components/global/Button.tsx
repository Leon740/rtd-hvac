import { Icon } from '@components/global/Icon';
import { Link, type ILinkProps } from '@components/global/Link';

type TButtonProps = Omit<ILinkProps, 'children'>;

interface IButtonProps extends TButtonProps {
  style: 'Primary' | 'Secondary';
  label: string;
}

export function Button({
  tag = 'a',
  buttonType,
  href,
  isExternal = false,
  className = '',
  style = 'Secondary',
  label
}: IButtonProps) {
  return (
    <Link
      tag={tag}
      buttonType={buttonType}
      href={href}
      isExternal={isExternal}
      className={`text-16-bold tracking-wider py-16 px-32 flex flex-row gap-8 items-center max-w-max border-2 border-red-500 rounded-16 ${style === 'Secondary' ? 'text-red-500 bg-white hover:text-white hover:bg-red-500' : 'text-white bg-red-500 hover:bg-red-600'} ${className}`}
    >
      <span>{label}</span>
      <Icon icon="arrow" />
    </Link>
  );
}
