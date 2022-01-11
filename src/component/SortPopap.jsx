import React from 'react';

function SortPopap(props) {
  const [activeItem, setActiveItem] = React.useState(0);
  const [visiblePopup, setvisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  //хук useRef вместо document.querySelector('sort') #4 React 55.15
  // sortRef = {current: undefined}
  React.useEffect(() => {
    document.addEventListener('click', handleOudsideClick);
  }, []);
  const activeLable = props.items[activeItem].name;
  // activeLable - меняет категорию в заголовке попапа

  const onSelectItem = (index) => {
    setActiveItem(index);
    props.onClickItem(index);
    setvisiblePopup(false);
  };
  // setActiveItem(index) - выбирает нужную категорию
  // setvisiblePopup(false) - закрывает попап блок после того, как был произведен клик по категории в попапе

  const togglevisiblePopup = () => {
    setvisiblePopup(!visiblePopup);
  };
  // #4 React 1.15.15
  // открывает по клику попап блок

  const handleOudsideClick = (domElement) => {
    if (!domElement.path.includes(sortRef.current)) {
      setvisiblePopup(false);
    }
  };
  // #4 React 47.27
  // закрывает попап блок, если клик был произведен не по нему
  // inclides - метод массива (проверяет, есть ли нужный дом элемент в массиве дом элементов ) #4 React 1.10.00
  // domElement.path путь до того элемента, по которобы был клик
  return (
    <div ref={sortRef} className="sort">
      {/* аналгичная запись ref = {(ref) => sort.current = ref;} */}
      {/* Чтобы хранить в current ссылку на DOM элемент (вместо document.querySelector('sort')) # 4 React 1.04.00*/}
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglevisiblePopup}>{activeLable}</span>
        {/* см. #4 React 16.05 */}
        {/* activeLable см # 4 React 1.15.00*/}
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {props.items.map((obj, index) => (
              <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key={`${obj.type}_${obj.index}`}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopap;
