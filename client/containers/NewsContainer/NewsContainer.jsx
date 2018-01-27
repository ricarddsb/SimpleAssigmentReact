import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { apiActions } from 'actions';
import { NewsItem } from 'components';

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickNewsItem = this.handleOnClickNewsItem.bind(this);
  }

  componentWillMount() {
    return this.props.news.length > 0;
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
        Title={item.Title}
        PublishDate={item.PublishDate}
        About={item.About}
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
  userData: PropTypes.object,
};

NewsContainer.defaultProps = {
  news: [],
  userData: {},
};

function mapStateToProps(state) {
  return {
    userData: state.mainManager.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
