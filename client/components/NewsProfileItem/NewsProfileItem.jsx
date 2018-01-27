import PropTypes from 'prop-types';
import React from 'react';
import IconSvg from '../../assets/font/icons-male-50.svg';

const NewsProfileItem = props => (
  <div key={props.newsItem.id}>
    <div className="h1 NewsProfileItem" >
      {props.newsItem.Title}
    </div>
    <div className="h5 NewsProfileItem" >
      {props.newsItem.PublishDate}
    </div>
    <div className="h5 NewsProfileItem" >
      {props.newsItem.About}
    </div>
    <div className="NewsProfileItem">
      <svg width="100" height="100" viewBox="0 0 500 500" transform="rotate(180)">
        <path d={IconSvg.path} />
      </svg>
    </div>
    <div className="NewsProfileItem Content" >
      { props.newsItem.Content}
    </div>
  </div>
);

NewsProfileItem.propTypes = {
  newsItem: PropTypes.object,
};

NewsProfileItem.defaultProps = {
  newsItem: {},
};

export default NewsProfileItem;
