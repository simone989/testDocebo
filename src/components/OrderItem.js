import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Thumbnail from './Thumbnail';
import ProductDetail from './ProductDetail';

class OrderItem extends Component {
  state = { newPrice: 25 }

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.8}
      >
        <Thumbnail url="https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg" />
        <ProductDetail
          title="Mastering React Native"
          desc="Libro di testo utilizzato per il corso di LAP 2 @ Unict"
          price={this.state.newPrice}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    height: 200,
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});

export default OrderItem;
