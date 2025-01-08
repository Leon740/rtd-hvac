import { Link } from '@components/global/Link';

interface ILink {
  href: string;
  label: string;
}

interface IMenuProps {
  className: string;
  links: ILink[];
  currentPath: string;
}

export function Menu({ className = '', links, currentPath = '' }: IMenuProps) {
  return (
    <ul className={`flex ${className}`}>
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link
            href={href}
            className={`text-16 hover:text-red-500 ${currentPath === href ? 'text-red-500' : ''}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
