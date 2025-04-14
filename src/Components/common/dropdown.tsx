import { useState } from "react";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";

interface DropdownProps {
  title?: string;
  items?: string[];
}

const Dropdown = ({ title = "Select", items = [] }: DropdownProps) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <BootstrapDropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={show}
    >
      <BootstrapDropdown.Toggle className="fs-5" variant="light">
        {title}
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu
        style={{
          width: "250px",
          maxWidth: "250px",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(195, 195, 195, 0.679)",
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          padding: "0.5rem",
        }}
      >
        {items.map((item, index) => (
          <BootstrapDropdown.Item
            key={index}
            className="text-wrap"
            style={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              padding: "0.25rem 0.5rem",
            }}
          >
            {item}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

export default Dropdown;
