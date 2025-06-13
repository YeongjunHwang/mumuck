import MenuPage from '../../../components/MenuPage';
import { burgerBrands } from '../../../data/ts/burgerBrands';

const Burger = () => {
  return (
    <MenuPage
      title="햄버거 브랜드 랭킹 투표"
      items={burgerBrands}
      imageFolder="/images/burger-images"
    />
  );
};

export default Burger;
