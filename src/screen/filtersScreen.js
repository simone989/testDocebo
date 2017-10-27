import React, { Component } from 'react';
import { Container, Content, Label, Card, CardItem, Item, Button, Header, Left, Body, Right, Title, Text, ListItem, Radio, Picker } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';
import CourseItem from '../components/CourseItem';

const mapStateToProps = state => ({
        data: state.data,
        filterFunction: state.filterFunction
});

class listScreen extends Component {
  state = {
      courseType: 'all'
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
                  onPress={() => navigate('list')}
                 >
                  <Text>Back</Text>
                 </Button>
               </Left>
               <Body>
                 <Title>List Screen</Title>
               </Body>
               <Right>
                 <Button
                   onPress={() => console.log('Cancella tutto')}
                 >
                 <Text>Clear All</Text>
                </Button>
               </Right>
           </Header>
              <Content>

                  <Label>Sort type by</Label>
                  <ListItem>
                    <Text>A to Z</Text>
                    <Right>
                      <Radio selected={true} />
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Text>Z to A</Text>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                  </ListItem>

                  <Label>Course Type</Label>
                  <Picker
                     mode="dropdown"
                     placeholder="Select One"
                     note={false}
                     selectedValue={this.state.courseType}
                     onValueChange={this.onValueChangeType.bind(this)}
                  >
                     <Item label="All" value="all" />
                     <Item label="Classroom" value="classroom" />
                     <Item label="E-learning" value="elearning" />
                     <Item label="Mobile" value="mobile" />
                     <Item label="Webinar" value="webinar" />
                     <Item label="Learning plan" value="learning_plan" />
                  </Picker>
                  <Button
                    block primary onPress={() => {
                        this.props.downloadData({
                            itemName: this.state.itemName,
                            courseType: this.state.courseType,
                            navigateTo: (screen) => this.props.navigation.navigate(screen)
                        });
                    }
                  }
                  >
                  <Text>Apply Filters</Text>
                  </Button>

          </Content>
      </Container>
    );
  }
}


export default connect(mapStateToProps, { downloadData })(listScreen);
