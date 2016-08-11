import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

function mapStateToProps(data) {
  return { data };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const WeatherApp = (props) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Here is the header of website</span>
      </div>
    </header>
    <main className="mdl-layout__content">
      <div className="page-content">{props.children}</div>
    </main>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
