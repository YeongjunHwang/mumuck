import MenuPage from './MenuPage';
import { chickenBrands } from './chickenBrands';

const Chicken = () => {
  return (
    <MenuPage
      title="치킨 브랜드 랭킹 투표"
      items={chickenBrands}
      imageFolder="/images/chicken-images"
    />
  );
};

export default Chicken;
