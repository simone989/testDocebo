import React, { Component } from 'react';
import { Container, Content, Input, Label, Card, CardItem, Item } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';
import CourseItem from '../components/CourseItem';

const mapStateToProps = state => ({
        data: state.data,
        filterFunction: state.filterFunction
});

class listScreen extends Component {

static navigationOptions = {
    title: 'Result Screen',
    //headerLeft: <Button title="Login" onPress={() => navigation.goBack()} />,
    //headerRight: <Button title="Login" onPress={() => navigation.goBack()} />,
}

state = {
    itemName: '',
    courseType: 'all',
    loginLoad: false,
    error_input_itemName: false,
    error_input_courseType: false
  }

onValueChangeType(value: string) {
  this.setState({
    courseType: value
  });
}
render() {
    return (
        <Container>
            <Content>
                <Card>
                  <CardItem>
                  <Item stackedLabel style={{ flex: 1 }}>
                    <Label>{this.props.data.data.length} Items</Label>
                  </Item>
                </CardItem>
                  {
                    this.props.data.data.map((courseInfo, i) => (
                    <CourseItem
                      key={i}
                      imgThumb={courseInfo.item_thumbnail.slice(2)}
                      itemName={courseInfo.item_name}
                      itemType={courseInfo.item_type}
                      itemPrice={courseInfo.item_price}
                      itemDescr={courseInfo.item_description}
                    />)
                    )
                  }
            </Card>
        </Content>
    </Container>
  );
}
}


export default connect(mapStateToProps, { downloadData })(listScreen);
