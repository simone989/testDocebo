import React, { Component } from 'react';
import { Container, Content, Input, Label, Card, CardItem, Item } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';
import OrderItem from '../components/OrderItem';

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
                    this.props.data.data.map((orderInfo, i) => (
                    <OrderItem key={i} test={orderInfo} />)
                    )
                  }

            </Card>
        </Content>
    </Container>
  );
}
}


export default connect(mapStateToProps, { downloadData })(listScreen);
