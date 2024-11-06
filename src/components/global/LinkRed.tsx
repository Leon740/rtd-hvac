import { Link } from './Link';
import { Icon } from './Icon';

interface ILinkRedProps {
  tag: 'a' | 'button';
  style: 'Primary' | 'Secondary';
  buttonType?: 'button' | 'submit';
  href?: string;
  label: string;
}

export function LinkRed({
  tag,
  style = 'Secondary',
  buttonType = 'button',
  href,
  label
}: ILinkRedProps) {
  return (
    <Link
      tag={tag}
      buttonType={buttonType}
      href={href}
      isExternal={false}
      className={`text-16-bold tracking-wider py-16 px-32 flex flex-row gap-8 items-center max-w-max border-2 border-red-500 rounded-16 ${style === 'Secondary' ? 'text-red-500 bg-white hover:text-white hover:bg-red-500' : 'text-white bg-red-500 hover:bg-red-600'}`}
    >
      <span>{label}</span>
      <Icon icon="arrow" />
    </Link>
  );
}
