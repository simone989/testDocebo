import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    flex: 2
  },
  title: {
    fontSize: 16,
    fontWeight: '400'
  },
  desc: {
    fontSize: 12
  },
  price: {
    fontSize: 20,
    fontWeight: '600'
  },
  newPrice: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    height: 44,
    paddingLeft: 5
  }
});


class ProductDetail extends React.Component {
  render() {
    const { title, type, price, desc } = this.props;
    const { wrapper } = styles;
    return (
      <View style={wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text>{type} | {price}</Text>
          <HTMLView
            value={desc}
          />
      </View>
    );
  }
}
export default ProductDetail;
