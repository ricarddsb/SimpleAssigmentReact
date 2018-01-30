import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiActions } from 'actions';
import { NewsItem } from 'components';

import './NewsContainer';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickNewsItem = this.handleOnClickNewsItem.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !nextProps.loading && nextProps.news !== this.props.news;
  }

  handleOnClickNewsItem(itemIndex) {
    const { username, password } = this.props.userData;
    this.props.apiActions.fetchNewsById(itemIndex, username, password);
  }

  renderData(item, index) {
    return (
      <NewsItem
        key={index}
        id={item.id}
        Title={item.title}
        PublishDate={item.publishDate}
        About={item.about}
        onClick={this.handleOnClickNewsItem}
      />
    );
  }

  render() {
    const { news } = this.props;
    return (
      <div className="container">
        <table className="table table-sm table-striped table-hover table-bordered ">
          <tbody>
            { news.map((item, index) => this.renderData(item, index)) }
          </tbody>
        </table>
      </div>
    );
  }
}

NewsContainer.propTypes = {
  news: PropTypes.array,
};

NewsContainer.defaultProps = {
  news: [],
};

function mapStateToProps(state) {
  return {
    userData: state.mainManager.userData,
    showNews: state.mainManager.showNews,
    loading: state.mainManager.loading,
    errorMessage: state.errorManager.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
