import React from 'react';
import ShopDisplay from '../../components/shop/ShopDisplay';
import {loadFirebase} from '../../lib/database/config/fbConfig.js';


class Shop extends React.Component {
  constructor(props){
    super(props);
  }
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
    return { products: result };
  }

  render() {
    const products = this.props.products;
    console.log('products', products);
    return (
      <div>
        Shop route page
        <ShopDisplay products={products}/>
      </div>
    );
  }
}


export default Shop;
