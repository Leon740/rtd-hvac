import { useState } from 'preact/hooks';
import { FaqsItem, type IFaqsItem, type IFaqsItemProps } from './FaqsItem';

interface IFaqsBodyProps {
  tabKey: string;
  activeItemColor: string;
  hoverItemColor: string;
  faqs: IFaqsItem[];
}

export function FaqsBody({ tabKey, activeItemColor, hoverItemColor, faqs }: IFaqsBodyProps) {
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
          <li key={`FaqsBody_${tabKey}_FaqsItem_${title}`} className="bg-white rounded-16">
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
