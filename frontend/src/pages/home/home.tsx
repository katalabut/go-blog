import React from 'react';

import NewsItem from '../../component/news-item';

const Home: React.FC = () => {
  return (
    <div className="blog-list section">
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default Home;
