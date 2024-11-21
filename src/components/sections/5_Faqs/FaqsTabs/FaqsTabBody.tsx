import { useState } from 'preact/hooks';
import { FaqsItem, type IFaqsItem } from './FaqsItem';

interface IFaqsTabBodyProps {
  tabKey: string;
  activeItemColor: string;
  hoverItemColor: string;
  faqs: IFaqsItem[];
}

export function FaqsTabBody({ tabKey, activeItemColor, hoverItemColor, faqs }: IFaqsTabBodyProps) {
  const initialActiveItemId = `${tabKey}_0`;
  const [activeItemIdSt, setActiveItemIdSt] = useState<string>(initialActiveItemId);

  const handleFaqsItemOnClick = (id: string) => {
    setActiveItemIdSt(id === activeItemIdSt ? initialActiveItemId : id);
  };

  return (
    <ul className="flex flex-col gap-32">
      {faqs.map(({ title, paragraph }: IFaqsItem, index) => {
        const itemId = `${tabKey}_${index}`;

        return (
          <li key={`FaqsItem_${title}`} className="bg-white rounded-16">
            <FaqsItem
              handleOnClick={() => handleFaqsItemOnClick(itemId)}
              isActive={activeItemIdSt === itemId}
              activeItemColor={activeItemColor}
              hoverItemColor={hoverItemColor}
              title={title}
              paragraph={paragraph}
            />
          </li>
        );
      })}
    </ul>
  );
}
