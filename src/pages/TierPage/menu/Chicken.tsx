import { useState } from 'react';
import { chickenBrands } from './chickenBrands';
import './menu.css';

const Chicken = () => {
    const [search, setSearch] = useState('');

    const filteredBrands = chickenBrands.filter((item) =>
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="chicken-page">
            <h2 className="page-title">치킨 브랜드 랭킹 투표</h2>

            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="브랜드 또는 메뉴명을 검색하세요"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="menu-list">
                {filteredBrands.map((item, idx) => (
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
                {filteredBrands.length === 0 && (
                    <p className="no-result">검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default Chicken;
