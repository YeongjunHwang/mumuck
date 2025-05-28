import './MenuPage.css';
import { useState } from 'react';

interface MenuItem {
  brand: string;
  name: string;
  description: string;
  votes: number;
  image: string;
}

interface MenuPageProps {
  title: string;
  items: MenuItem[];
  imageFolder: string;
}

const MenuPage = ({ title, items, imageFolder }: MenuPageProps) => {
  const [search, setSearch] = useState('');

  // 🔽 검색어 필터링
  const filteredItems = items.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔽 투표 수 기준 내림차순 정렬
  const sortedItems = [...filteredItems].sort((a, b) => b.votes - a.votes);

  // 🔽 공동 순위 로직
  let lastVotes: number | null = null;
  let rank = 0;
  let rankMap: number[] = [];

  sortedItems.forEach((item, i) => {
    if (item.votes !== lastVotes) {
      rank = i + 1;
      lastVotes = item.votes;
    }
    rankMap[i] = rank;
  });

  return (
    <div className="chicken-page">
      <h2 className="page-title">{title}</h2>

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
        {sortedItems.map((item, idx) => (
          <div key={idx} className="menu-card">
            <div className="menu-info">
              <span className="tag">인기 {rankMap[idx]}위</span>
              <h3 className="menu-title">{item.brand} | {item.name}</h3>
              <p className="menu-desc">{item.description}</p>
              <div className="menu-review">투표 수: {item.votes}표</div>
            </div>
            <img
              src={`${imageFolder}/${item.image}`}
              alt={item.name}
              className="menu-image"
              loading="eager"
            />
          </div>
        ))}
        {sortedItems.length === 0 && (
          <p className="no-result">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
