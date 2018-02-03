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
        <td>
          <NavLink to="profile">
            <img src={IconSvg} alt="usericon" width="22" height="22" />
          </NavLink>
        </td>
        <td>
          <NavLink to="profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            {PublishDate}
          </NavLink>
        </td>
        <td>
          <NavLink to="profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            {Title}
          </NavLink>
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
