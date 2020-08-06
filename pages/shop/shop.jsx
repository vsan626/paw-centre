import React from 'react';
import ShopDisplay from '../../components/shop/ShopDisplay';
import loadFirebase from '../../lib/database/config/fbConfig.js';
import { connect } from 'react-redux';
import actions from '../../redux/actions/storeActions.js'
import Router from 'next/router'

class Shop extends React.Component {
  //gets initial data from firestore and stores it into props
  static async getInitialProps() {
    let firebase = await loadFirebase();
    let result = await new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot) => {
          let data = [];
          snapshot.forEach((doc) => {
            data.push(
              Object.assign(
                {
                  id: doc.id
                },
                doc.data()
              )
            );
          });
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          reject([]);
        });
    });
    //need to send data to redux store
    return { products: result };
  }

  render() {
    const products = this.props.products;
    console.log('products', products);
    return (
      <div>
        Shop route page
        <ShopDisplay />
      </div>
    );
  }
}

export default Shop;
