import { chickenBrands } from './chickenBrands';
import './menu.css';

const Chicken = () => {
    return (
        <div className="chicken-page">
            <h2 className="page-title">치킨 브랜드 인기 투표</h2>
            <div className="menu-list">
                {chickenBrands.map((item, idx) => (
                    <div key={idx} className="menu-card">
                        <div className="menu-info">
                            <span className="tag">인기 {idx + 1}위</span>
                            <h3 className="menu-title">{item.brand} | {item.name}</h3>
                            <p className="menu-desc">{item.description}</p>
                            <div className="menu-review">투표 수: {item.votes}표</div>
                        </div>
                        <img
                            src={`/images/chicken-images/${item.image}`}
                            alt={item.name}
                            className="menu-image"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chicken;
