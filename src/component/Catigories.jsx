import React from 'react';

const Catigories = (props) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    props.onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {props.items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catigories;
