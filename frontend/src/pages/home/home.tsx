import React from 'react';

import NewsItem from '../../component/news-item';

const Home: React.FC = () => {
  const news = [
    {
      author: 'spoooty',
      date: '31m',
      image: 'https://miro.medium.com/max/1200/1*83PZeBAFQkP1XyOfDigxsg.png',
      link: '#1',
      title: 'Настраиваем ESlin + Prettier для React',
    },
    {
      author: 'spoooty',
      date: '31m',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      link: '#2',
      title: 'Настраиваем ESlin + Prettier для React',
    },
    {
      author: 'spoooty',
      date: '31m',
      image: 'https://bulma.io/images/placeholders/640x480.png',
      link: '#3',
      title: 'Настраиваем ESlin + Prettier для React',
    },
  ];

  return (
    <div className="blog-list section">
      {news.map((item) => (
        <NewsItem key={item.link} {...item} />
      ))}
    </div>
  );
};

export default Home;
