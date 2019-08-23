import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  author: string;
  date: string;
  link: string;
  title: string;
  content?: string;
  image?: string;
};

const NewsItem: React.FC<Props> = ({
  author,
  content,
  date,
  link,
  title,
  image,
}) => {
  return (
    <article className="news-item">
      {image ? (
        <div
          className="news-item__cover"
          style={{
            backgroundImage: 'url("' + image + '")',
          }}
        >
          <Link to={link} />
        </div>
      ) : null}

      <h3 className="news-item__title subtitle is-3">
        <Link to={link}>{title}</Link>
      </h3>
      <h5
        className="news-item__subtitle subtitle"
        style={{ marginBottom: '0.5em' }}
      >
        @{author} <small>{date}</small>
      </h5>
      <div className="content">{content}</div>
    </article>
  );
};

export default NewsItem;
