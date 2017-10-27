import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Thumbnail from './Thumbnail';
import ProductDetail from './ProductDetail';

class CourseItem extends Component {
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.8}
      >
        <Thumbnail url={this.props.imgThumb !== '' ? 'https://'.concat(this.props.imgThumb) : 'https://www.oatey.com/ASSETS/WEB_THEMES//OATEY/images/NoImage.png'} />
        <ProductDetail
          title={this.props.itemName}
          type={this.props.itemType}
          price={this.props.itemPrice}
          desc={this.props.itemDescr}
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

export default CourseItem;
