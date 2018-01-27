import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import IconSvg from '../../assets/font/icons-male-50.svg';

const NewsItem = props => (
  <tr key={props.id} onClick={() => props.onClick(props.id)}>
    <td colSpan="2">
      <Link to="profile">
        <svg width="22" height="22" viewBox="0 0 600 600" transform="rotate(180)">
          <path d={IconSvg.path} />
        </svg>
      </Link>
    </td>
    <td>{props.PublishDate}</td>
    <td>{props.Title}</td>
  </tr>
);

NewsItem.propTypes = {
  id: PropTypes.number,
  Title: PropTypes.string,
  PublishDate: PropTypes.string,
  onClick: PropTypes.func,
};

NewsItem.defaultProps = {
  id: 0,
  Title: '',
  PublishDate: '',
  onClick: '',
};

export default NewsItem;
