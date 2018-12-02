import React from 'react';
import { connect } from 'react-redux';

class OnUpdate extends React.Component {
  shouldComponentUpdate(nextProps) {
    // route changed so force menu on half second timeout
    setTimeout(nextProps.menuClose, 500);
    return false;
  }
  render() {
    return null;
  }
}

export default connect(null, {
  menuClose: () => ({type: 'MENU_CLOSE'})
})(OnUpdate);
