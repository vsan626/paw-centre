This file is a record of different codes / articles I encountered

*To get data from firestore within a component. Gets initial data from firestore and stores it into props
   
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


  ================================================================

  *Storing data retrieved from firestore into redux store
  https://react-redux-firebase.com/docs/api/firestoreConnect.html

  import { connect } from 'react-redux';
  import { compose } from 'redux';
  import { firestoreConnect } from 'react-redux-firebase';
  
  ---
  ---

  export default compose(
    firestoreConnect(() => ['products']),
    connect((state) => ({
    fireData: state.firestore.ordered.products
    }))
  )(Shop);


  ================================================================
  Tips / Notes:
  *To query more specific data: Create a redux action that will make an async call to the database. Call the function from a component
  *Firestore reducer gets combined with redux reducer to return a source of truth state for application
  *