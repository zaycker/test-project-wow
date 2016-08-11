import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Layout, Header, Footer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router';

function mapStateToProps(data) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const WeatherApp = (props) => (
  <Layout>
    <Header title="Here is the header of website">
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/second-page">Second page</Link>
      </Navigation>
    </Header>
    <Content>{props.children}</Content>
    <Footer>
      <div>Copyrights</div>
    </Footer>
  </Layout>
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
