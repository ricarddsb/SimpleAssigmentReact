import { connect } from 'react-redux';
import {
  LoginPage,
  Modal,
  NewsContainer,
  NavigationBar,
} from 'containers';
import { NewsProfileItem } from 'components';
import React from 'react';
import {
  Route,
  HashRouter,
} from 'react-router-dom';

import './App.scss';

const App = props => (
  <HashRouter>
    <div>
      { props.errorMessage !== '' && <Modal /> }
      <div>
        <div>
          { props.showLogin && <NavigationBar />}
        </div>
        <div className="text-center container App">
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/news" render={() => <NewsContainer news={props.news} />} />
          <Route
            exact
            path="/profile"
            render={() => <NewsProfileItem newsItem={props.newsItem} loading={props.loading} />
            }
          />
        </div>
      </div>
    </div>
  </HashRouter>
);

function mapStateToProps(state) {
  return {
    showLogin: state.mainManager.showLogin,
    news: state.mainManager.news,
    newsItem: state.mainManager.newsItem,
    loading: state.mainManager.loading,
  };
}

export default connect(mapStateToProps, null)(App);
