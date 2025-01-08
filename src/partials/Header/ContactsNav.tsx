import DATA from './headerData.json';
import { Link } from '@components/global/Link';
import { Icon } from '@components/global/Icon';

export function ContactsNav() {
  return (
    <ul className="flex flex-col lg:flex-row">
      {DATA.buttons.map(({ href, icon, label }, index) => (
        <li key={label} className={`w-full ${index === 0 ? 'bg-red-500' : 'bg-blue-500'}`}>
          <Link
            href={href}
            className="py-8 px-16 max-w-max flex flex-row items-center gap-8 text-white text-16"
          >
            <Icon icon={icon} />
            <span>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
