import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import IconSvg from '../../assets/font/icons-male-50.svg';

class NewsItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.loading;
  }

  render() {
    const {
      id,
      onClick,
      PublishDate,
      Title,
    } = this.props;
    return (
      <tr key={id} onClick={() => onClick(id)}>
        <td colSpan="2">
          <NavLink to="profile">
            <img src={IconSvg} alt="usericon" width="22" height="22" />
          </NavLink>
        </td>
        <td>{PublishDate}</td>
        <td>
          {Title}
        </td>
      </tr>
    );
  }
}

NewsItem.propTypes = {
  id: PropTypes.number,
  Title: PropTypes.string,
  PublishDate: PropTypes.string,
  onClick: PropTypes.func,
};

NewsItem.defaultProps = {
  id: -1,
  Title: '',
  PublishDate: '',
  onClick: '',
};

export default NewsItem;
