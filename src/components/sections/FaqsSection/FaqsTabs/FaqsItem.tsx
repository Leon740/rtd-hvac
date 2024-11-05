import { marked } from 'marked';
import faqsItemStyles from './faqs_item.module.css';
import { useEffect, useRef } from 'preact/hooks';
import { useWindowSize } from '@hooks/useWindowSize';

export interface IFaqsItem {
  title: string;
  paragraph: string;
}

export interface IFaqsItemProps extends IFaqsItem {
  handleOnClick: () => void;
  isActive: boolean;
  activeItemColor: string;
  hoverItemColor: string;
}

export function FaqsItem({
  handleOnClick,
  isActive,
  activeItemColor,
  hoverItemColor,
  title,
  paragraph
}: IFaqsItemProps) {
  // handleOnClick
  const handleButtonOnClick = () => {
    handleOnClick();
  };

  // toggle faqsItemBodyRf
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
        onClick={handleButtonOnClick}
        className={`w-full text-16 p-16 xl:p-32 flex flex-row items-center justify-between ${hoverItemColor} ${isActive ? activeItemColor : ''}`}
      >
        <span className="text-left">{title}</span>

        <i className={`icon-arrow ${isActive ? '-rotate-90' : 'rotate-90'}`} />
      </button>

      <div className="overflow-hidden transition-all" ref={faqsItemBodyRf}>
        <div
          className={`px-16 pb-16 xl:px-32 xl:pb-32 text-p faqs-p ${faqsItemStyles['faqs-p']}`}
          dangerouslySetInnerHTML={{ __html: marked(paragraph) }}
        />
      </div>
    </>
  );
}
