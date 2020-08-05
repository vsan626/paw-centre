import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getDataClient  from '../../redux/actions/storeActions.js'

class Shop extends React.Component {
  componentDidMount() {
    this.props.getDataClient()
  }
  render () {
    return (
      <div>
        <h1>Shop Component</h1>
      </div>
    );
  }
};

Shop.propTypes = {
  getDataClient: PropTypes.func.isRequired,
  storeItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  storeItems: state.storeItems.items
})

export default connect(mapStateToProps, { getDataClient })(Shop);
