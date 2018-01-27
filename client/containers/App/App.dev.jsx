import {
  DevTools,
  LoginPage,
  NewsContainer,
  NavigationBar,
} from 'containers';
import { NewsProfileItem } from 'components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Route,
  HashRouter,
} from 'react-router-dom';

import './App.scss';

const App = props => (
  <HashRouter>
    <div>
      <div>
        { props.isHiddenLogin && <NavigationBar /> }
      </div>
      <div className="text-center App">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/news" render={() => <NewsContainer news={props.news} />} />
        <Route exact path="/profile" render={() => <NewsProfileItem newsItem={props.newsItem} />} />
        <DevTools />
      </div>
    </div>
  </HashRouter>
);

App.propTypes = {
  isHiddenLogin: PropTypes.bool,
  news: PropTypes.array,
  newsItem: PropTypes.object,
};

App.defaultProps = {
  isHiddenLogin: false,
  news: [],
  newsItem: {},
};

function mapStateToProps(state) {
  return {
    isHiddenLogin: state.mainManager.isHiddenLogin,
    news: state.mainManager.news,
    newsItem: state.mainManager.newsItem,
  };
}

export default connect(mapStateToProps, null)(App);
