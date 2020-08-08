import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import ShopDisplay from '../../components/shop/ShopDisplay';

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('storeITEMMM', this.props.fireData);
    return (
      <div>
        Shop route page
        <ShopDisplay />
      </div>
    );
  }
}

export default compose(
  firestoreConnect(() => ['products']),
  connect((state) => ({
    fireData: state.firestore.ordered.products
  }))
)(Shop);
