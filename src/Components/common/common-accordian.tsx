import { useState } from "react";
import { Accordion } from "react-bootstrap";

export interface AccordionItem {
  title: string;
  content: string;
}

interface CommonAccordionProps {
  items: AccordionItem[];
}

const CommonAccordion = ({ items }: CommonAccordionProps) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="d-flex w-100 flex-column gap-3">
      {items.map((item, index) => {
        const key = index.toString();
        const isOpen = activeKey === key;

        return (
          <Accordion
            key={index}
            activeKey={isOpen ? key : null}
            onSelect={() => handleToggle(key)}
          >
            <Accordion.Item
              eventKey={key}
              className="border rounded-3 overflow-hidden "
            >
              <Accordion.Header className={isOpen ? "bg-primary" : ""}>
                {item.title}
              </Accordion.Header>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CommonAccordion;
