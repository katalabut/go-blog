import React from 'react';

const NewsItem: React.FC = () => {
  return (
    <article className="news-item">
      <div
        className="news-item__cover"
        style={{
          backgroundImage:
            'url("https://bulma.io/images/placeholders/640x480.png");',
        }}
      ></div>
      <h3 className="title">Настраиваем ESlin + Prettier для React</h3>
      <h5 className="subtitle is-6" style={{ marginBottom: '0.5em' }}>
        @spoooty <small>31m</small>
      </h5>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
          turpis.
        </p>
      </div>
    </article>
  );
};

export default NewsItem;
