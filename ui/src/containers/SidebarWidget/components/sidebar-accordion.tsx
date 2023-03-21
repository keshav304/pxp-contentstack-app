import React from 'react';
import { Accordion} from '@contentstack/venus-components';

interface AccordionProps {
  args:{ 
    title: String;
    hasBackgroundColor?: Boolean;
    renderExpanded?: Boolean;
    className?:String
  }
  content?: React.ReactNode
}

const SidebarAccordion: React.FC<AccordionProps> = ({ args, content }) => {
    return (
        <Accordion
          title={args.title}
          renderExpanded={args.renderExpanded}
          className={args.className}
        >
          {content}
        </Accordion>
      );
}
export default SidebarAccordion