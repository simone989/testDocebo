import React, { Component } from 'react';
import { Container, Content, Label, Card, CardItem, Item, Button, Header, Left, Body, Right, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';
import CourseItem from '../components/CourseItem';

const mapStateToProps = state => ({
        data: state.data,
        filterFunction: state.filterFunction
});

class listScreen extends Component {
/*
static navigationOptions = {
    title: 'Result Screen',
    headerRight: <Button title='Filters' onPress={() => console.log('Apri i filtri')} />,
}
*/

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
    const { navigate } = this.props.navigation;
    return (
        <Container>

          <Header>
             <Left>
               <Button
                onPress={() => navigate('home')}
               >
                <Text>Back</Text>
               </Button>
             </Left>
             <Body>
               <Title>List Screen</Title>
             </Body>
             <Right>
               <Button
                 title="Filter"
               />
             </Right>
         </Header>
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
