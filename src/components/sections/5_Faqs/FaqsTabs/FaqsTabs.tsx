import { useState } from 'preact/hooks';
import { FaqsTabBody } from './FaqsTabBody';
import { type IFaqsItem } from './FaqsItem';
import { useWindowSize } from '@hooks/useWindowSize';

export type TTabKey =
  | 'general'
  | 'furnaces'
  | 'air_conditioning'
  | 'heatpumps'
  | 'minisplits'
  | 'brands';

interface IFaqsTabsPropsI {
  tabs: { [key in TTabKey]: IFaqsItem[] };
  activeTabKey?: TTabKey;
}

const COLORS: {
  [key in TTabKey]: {
    activeColor: string;
    hoverColor: string;
    background: string;
    border: string;
    activeBorder: string;
  };
} = {
  general: {
    activeColor: 'text-yellow-500',
    hoverColor: 'hover:text-yellow-500',
    background: 'bg-yellow-300',
    border: 'border-yellow-300',
    activeBorder: 'border-yellow-500'
  },
  furnaces: {
    activeColor: 'text-red-500',
    hoverColor: 'hover:text-red-500',
    background: 'bg-red-300',
    border: 'border-red-300',
    activeBorder: 'border-red-500'
  },
  air_conditioning: {
    activeColor: 'text-blue-500',
    hoverColor: 'hover:text-blue-500',
    background: 'bg-blue-300',
    border: 'border-blue-300',
    activeBorder: 'border-blue-500'
  },
  heatpumps: {
    activeColor: 'text-red-500',
    hoverColor: 'hover:text-red-500',
    background: 'bg-red-300',
    border: 'border-red-300',
    activeBorder: 'border-red-500'
  },
  minisplits: {
    activeColor: 'text-blue-500',
    hoverColor: 'hover:text-blue-500',
    background: 'bg-blue-300',
    border: 'border-blue-300',
    activeBorder: 'border-blue-500'
  },
  brands: {
    activeColor: 'text-yellow-500',
    hoverColor: 'hover:text-yellow-500',
    background: 'bg-yellow-300',
    border: 'border-yellow-300',
    activeBorder: 'border-yellow-500'
  }
};

export function FaqsTabs({ tabs, activeTabKey }: IFaqsTabsPropsI) {
  // data
  const tabsKeys = Object.keys(tabs);

  // tabSwitch
  const [activeTabKeySt, setActiveTabKeySt] = useState<TTabKey>(
    activeTabKey ? activeTabKey : (tabsKeys[0] as TTabKey)
  );

  // scrollIntoView
  const { width: windowWidth } = useWindowSize();

  const handleTabHeaderClick = (tab: TTabKey) => {
    setActiveTabKeySt(tab);

    window.scrollTo({
      top:
        document.getElementById('faqsTabsHeaderScrollIntoView')!.offsetTop -
        (windowWidth < 768 ? 96 : 136),
      behavior: 'smooth'
    });
  };

  return (
    <div className="pt-48 flex flex-col gap-16">
      {/* pt-48 -> 64 - tabHeader py-16 = 48 */}
      {/* gap-16 -> 32 - tabHeader py-16 = 16 */}

      {/* top = header height */}
      <ul className="flex flex-row gap-32 py-16 sticky z-faqsTabsHeader10 top-96 lg:top-[136px] bg-body overflow-auto">
        {tabsKeys.map((tabKey) => {
          const tabColors = COLORS[tabKey as TTabKey];

          return (
            <li key={`FaqsTabs_Header_${tabKey}`} className="flex-shrink-0">
              <button
                type="button"
                className={`text-16-regular capitalize py-8 px-16 rounded-16 ${tabColors.background} border-2 ${tabKey === activeTabKeySt ? tabColors.activeBorder : tabColors.border}`}
                onClick={() => handleTabHeaderClick(tabKey as TTabKey)}
              >
                {tabKey.replace('_', ' ')}
              </button>
            </li>
          );
        })}
      </ul>

      {tabsKeys.map((tabKey) => {
        if (tabKey === activeTabKeySt) {
          const tabColors = COLORS[tabKey as TTabKey];

          return (
            <FaqsTabBody
              key={`FaqsTabs_Body_${tabKey}`}
              tabKey={tabKey}
              activeItemColor={tabColors.activeColor}
              hoverItemColor={tabColors.hoverColor}
              faqs={tabs[tabKey]}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
