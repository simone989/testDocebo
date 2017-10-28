import React, { Component } from 'react';
import { Container, Content, Label, Card, CardItem, Item, Button, Header, Left, Body, Right, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';
import CourseItem from '../components/CourseItem';

const mapStateToProps = state => ({
        data: state.data
});

class listScreen extends Component {
  render() {
      const { navigate } = this.props.navigation;
      console.log(this.props)
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
                   onPress={() => navigate('filters', { radioSelect_AtoZ: this.props.data.radioSelect_AtoZ, radioSelect_ZtoA: this.props.data.radioSelect_ZtoA, courseType: this.props.data.courseType })}
                 >
                 <Text>Filters</Text>
                </Button>
               </Right>
           </Header>
              <Content>
                  <Card>
                    <CardItem>
                    <Item stackedLabel style={{ flex: 1 }}>
                      <Label>{this.props.data.dataFilter.length} Items</Label>
                    </Item>
                  </CardItem>
                    {
                      this.props.data.dataFilter.map((courseInfo, i) => (
                      <CourseItem
                        key={i}
                        imgThumb={courseInfo.item_thumbnail != null ? courseInfo.item_thumbnail.slice(2) : ''}
                        itemName={courseInfo.item_name}
                        itemType={courseInfo.course_type}
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
