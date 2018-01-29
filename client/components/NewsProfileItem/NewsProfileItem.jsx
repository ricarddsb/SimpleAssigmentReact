import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IconSvg from '../../assets/font/icons-male-50.svg';

class NewsProfileItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.loading || this.props.id !== nextProps.id;
  }

  render() {
    const {
      id, Title, PublishDate, About, Content,
    } = this.props.newsItem;
    const { loading } = this.props;
    return (
      <div>
        { !loading &&
          <div key={id}>
            <div className="h1 NewsProfileItem" >
              {Title}
            </div>
            <div className="h5 NewsProfileItem" >
              {PublishDate}
            </div>
            <div className="h5 NewsProfileItem" >
              {About}
            </div>
            <div className="NewsProfileItem">
              <img src={IconSvg} alt="usericon" width="100" height="100" />
            </div>
            <div className="NewsProfileItem Content" >
              {Content}
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
