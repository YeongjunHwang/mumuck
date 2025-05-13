import { pizzaBrands } from './pizzaBrands';
import MenuPage from './MenuPage';

const Pizza = () => {
  return (
    <MenuPage
      title="피자 브랜드 랭킹 투표"
      items={pizzaBrands}
      imageFolder="/images/pizza-images"
    />
  );
};

export default Pizza;
