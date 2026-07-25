import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="ph-accordion-item">
            <h3 className="m-0">
              <button
                type="button"
                className="ph-accordion-button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.question}</span>
                <i className="bi bi-chevron-down" />
              </button>
            </h3>
            <div className={`ph-accordion-panel ${open ? 'open' : ''}`}>
              <div className="ph-accordion-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
