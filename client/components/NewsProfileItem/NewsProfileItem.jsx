import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IconSvg from '../../assets/font/icons-male-50.svg';
import './NewsProfileItem.scss';

class NewsProfileItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.loading || this.props.id !== nextProps.id;
  }

  render() {
    const {
      id, title, publishDate, about, content,
    } = this.props.newsItem;
    const { loading } = this.props;
    return (
      <div className="NewsProfileItem">
        { !loading &&
          <div key={id}>
            <div className="h1" >
              {title}
            </div>
            <div className="h5" >
              {publishDate}
            </div>
            <div className="h5" >
              {about}
            </div>
            <div>
              <img src={IconSvg} alt="usericon" width="100" height="100" />
            </div>
            <div >
              {content}
            </div>
          </div>
        }
      </div>
    );
  }
}

NewsProfileItem.propTypes = {
  newsItem: PropTypes.object,
  loading: PropTypes.bool,
};

NewsProfileItem.defaultProps = {
  newsItem: {},
  loading: true,
};

export default NewsProfileItem;
