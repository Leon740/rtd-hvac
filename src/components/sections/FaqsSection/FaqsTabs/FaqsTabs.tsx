import { useEffect, useState } from 'preact/hooks';
import { FaqsTabBody } from './FaqsTabBody';
import { type IFaqsItem } from './FaqsItem';

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

  let faqsTabsHeaderScrollIntoView: HTMLElement | null = null;

  useEffect(() => {
    faqsTabsHeaderScrollIntoView = document.getElementById('faqsTabsHeaderScrollIntoView');
  }, []);

  const handleTabHeaderOnClick = (tab: TTabKey) => {
    setActiveTabKeySt(tab);

    faqsTabsHeaderScrollIntoView?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="pt-48 flex flex-col gap-16">
      {/* pt-48 -> 64 - tabHeader py-16 = 48 */}
      {/* gap-16 -> 32 - tabHeader py-16 = 16 */}

      <ul className="flex flex-row gap-32 py-16 sticky z-10 top-[177px] md:top-[137px] bg-body overflow-auto">
        {tabsKeys.map((tabKey) => {
          const tabColors = COLORS[tabKey as TTabKey];

          return (
            <li key={`FaqsTabHeader_${tabKey}`} className="flex-shrink-0">
              <button
                type="button"
                className={`text-16-regular capitalize py-8 px-16 rounded-16 ${tabColors.background} border-2 ${tabKey === activeTabKeySt ? tabColors.activeBorder : tabColors.border}`}
                onClick={() => handleTabHeaderOnClick(tabKey as TTabKey)}
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
              key={`FaqsTabBody_${tabKey}`}
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
