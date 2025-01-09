import DATA from './headerData.json';
import { Link } from '@components/global/Link';
import { Img } from '@components/global/Img';
import { Icon } from '@components/global/Icon';
import { Menu } from './Menu';
import { SocialNav } from '@partials/SocialNav/SocialNav';
import { ContactsNav } from './ContactsNav';
import { useState } from 'preact/hooks';

interface IHeaderInnerProps {
  currentPath: string;
}

export function HeaderInner({ currentPath }: IHeaderInnerProps) {
  const [isOpenedSt, setIsOpenedSt] = useState(false);

  const handleButtonClick = () => {
    setIsOpenedSt((prev) => {
      document.body.classList.toggle('modal-opened');
      return !prev;
    });
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-header1000 border-solid border-b-2 lg:border-0 border-gray-100">
        <div className="container">
          <div className="py-16 flex flex-row items-center justify-between">
            <Link href="/">
              <Img src={DATA.logo.src} alt={DATA.logo.alt} width={128} height={64} isLazy={false} />
            </Link>

            <Link
              buttonType="button"
              className={`lg:hidden hover:text-red-500 ${isOpenedSt ? 'text-red-500' : ''}`}
              handleClick={handleButtonClick}
              aria-label="Toggle Menu"
            >
              <span className="flex flex-col items-center">
                <Icon icon={isOpenedSt ? 'close' : 'bars'} className="text-32" />
                <span className="text-16">{isOpenedSt ? 'Close' : 'Menu'}</span>
              </span>
            </Link>

            <Menu
              className="hidden lg:flex flex-row gap-32"
              links={DATA.links}
              currentPath={currentPath}
            />
          </div>

          <div className="hidden lg:block">
            <ContactsNav />
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden w-full h-dvh pt-96 bg-white fixed top-0 z-menu100 transition-transform duration-500 ${isOpenedSt ? ' translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container flex flex-col gap-32 py-32">
          <Menu className="flex-col gap-16" links={DATA.links} currentPath={currentPath} />
          <ContactsNav />
          <SocialNav />
        </div>
      </div>
    </>
  );
}
