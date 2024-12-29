import { marked } from 'marked';
import faqsItemStyles from './faqs_item.module.css';
import { useEffect, useRef } from 'preact/hooks';
import { useWindowSize } from '@hooks/useWindowSize';
import { Icon } from '@components/global/Icon';

export interface IFaqsItem {
  title: string;
  paragraph: string;
}

export interface IFaqsItemProps extends IFaqsItem {
  handleClick: () => void;
  isActive: boolean;
  activeColor: string;
  hoverColor: string;
}

export function FaqsItem({
  handleClick,
  isActive,
  activeColor,
  hoverColor,
  title,
  paragraph
}: IFaqsItemProps) {
  // handleClick
  const buttonOnClick = () => {
    handleClick();
  };

  // toggle
  const { width: windowWidth } = useWindowSize();

  const faqsItemBodyRf = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (faqsItemBodyRf.current) {
      faqsItemBodyRf.current.style.maxHeight = isActive
        ? `${faqsItemBodyRf.current.scrollHeight}px`
        : `0px`;
    }
  }, [isActive, windowWidth]);

  return (
    <>
      <button
        type="button"
        onClick={buttonOnClick}
        className={`w-full text-16 p-16 xl:p-32 flex flex-row items-center justify-between ${hoverColor} ${isActive ? activeColor : ''}`}
      >
        <span className="text-left">{title}</span>

        <Icon icon="arrow" className={`${isActive ? '-rotate-90' : 'rotate-90'}`} />
      </button>

      <div className="overflow-hidden transition-all" ref={faqsItemBodyRf}>
        <div
          className={`px-16 pb-16 xl:px-32 xl:pb-32 text-p ${faqsItemStyles['faqs-p']}`}
          dangerouslySetInnerHTML={{ __html: marked(paragraph) as string }}
        />
      </div>
    </>
  );
}
