import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Lottie from 'lottie-react';
import chickenAnim from './tierData/chicken.json';
import pizzaAnim from './tierData/pizza.json';
import burgerAnim from './tierData/burger.json';
import SiteInfo from '../../components/SiteInfo/SiteInfo';



import './TierIntro.css';

const categories = [
    {
        label: '치킨',
        value: 'chicken',
        lottie: chickenAnim,
        description: '지금 가장 인기 있는 치킨은?'
    },
    {
        label: '피자',
        value: 'pizza',
        lottie: pizzaAnim,
        description: '피자 브랜드 베스트 순위'
    },
    {
        label: '햄버거',
        value: 'burger',
        lottie: burgerAnim,
        description: '햄버거 브랜드 랭킹 확인'
    },
];

const TierIntro = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSelect = (value: string) => {
        navigate(`/tier/${value}`);
    };

    const filteredCategories = categories.filter((cat) =>
        cat.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="tier-intro">
            <div className="intro-header">
                <h1><span className="gold-title">브랜드 인기 랭킹</span></h1>
            </div>

            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="카테고리를 선택해 브랜드 순위를 살펴보세요."
                    className="category-search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="category-list">
                {filteredCategories.map((cat) => (
                    <div
                        key={cat.value}
                        className="category-card"
                        onClick={() => handleSelect(cat.value)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <div className="card-content">
                            <div className="category-label">{cat.label}</div>
                            <div className="category-sub">{cat.description}</div>
                        </div>
                        {cat.lottie && (
                            <div className={`category-lottie lottie-${cat.value}`}>
                                <Lottie animationData={cat.lottie} loop={true} />
                            </div>
                        )}
                    </div>
                ))}
                {filteredCategories.length === 0 && (
                    <p className="no-result">검색 결과가 없습니다.</p>
                )}
            </div>
            <SiteInfo />

        </div>
    );
};

export default TierIntro;
