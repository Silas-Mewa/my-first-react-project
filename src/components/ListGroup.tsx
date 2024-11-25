import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface Props {
  items?: any[];
  heading: string;
  onSelectItem: (item: any) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = ""; //items.length === 0 && <p>No items found</p>;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items?.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
