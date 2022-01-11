import React from 'react';
import Catigories from '../component/Catigories';
import PizzaBlock from '../component/PizzaBlock';
import SortPopap from '../component/SortPopap';

function Home(props) {
  const [activeCategories, setActiveCategories] = React.useState(0);
  const [activePopupCategories, setActivePopupCategories] = React.useState(0);

  const catigories = ['Все', 'Овощи', 'Фрукты', 'Ягоды', 'Орехи', 'Грибы'];
  const sortPopap = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  const onClickCategories = (index) => setActiveCategories(index);
  const onClickPopupCategories = (index) => setActivePopupCategories(index);

  const propsItems = props.items;

  propsItems.sort((a, b) => {
    if (activePopupCategories === 0) {
      return a.rating > b.rating ? 1 : -1;
    } else if (activePopupCategories === 1) {
      return a.price > b.price ? 1 : -1;
    } else if (activePopupCategories === 2) {
      return a.name > b.name ? 1 : -1;
    }
    return null;
  });

  const filteredPizzaz = propsItems.filter((items) => items.category === activeCategories);

  // console.log(props);

  return (
    <div className="container">
      <div className="content__top">
        <Catigories items={catigories} onClickItem={onClickCategories} />
        <SortPopap items={sortPopap} onClickItem={onClickPopupCategories} />
      </div>
      <h2 className="content__title">Все продукты</h2>
      <div className="content__items">
        {activeCategories === 0
          ? propsItems.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : filteredPizzaz.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
