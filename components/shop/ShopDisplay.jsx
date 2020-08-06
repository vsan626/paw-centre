import React from 'react';
import loadFirebase from '../../lib/database/config/fbConfig.js'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class ShopDisplay extends React.Component {

  render () {

    return (
      <div>
        <h1>Shop Component</h1>

      </div>
    );
  }
};

// Shop.propTypes = {
//   storeItems: PropTypes.array.isRequired
// }

// const mapStateToProps = state => {
//   console.log('HI FROM STATE', state)
//   return {
//     storeItems: state.storeItems.storeItems
//   }
// }

// //use compose function to use two HOC (higher order components)
// export default compose(
//   //automatically retrieves data from firestore when this component is active
//   firestoreConnect(['products']),
//   connect(mapStateToProps)
// )(Shop);

export default ShopDisplay
