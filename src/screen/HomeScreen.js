import React, { Component } from 'react';
import { Container, Content, Button, Text, Item, Input, Label, Card, CardItem, Picker, Spinner, Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import { downloadData } from '../actions/actions';

const mapStateToProps = state => ({
        data: state.data,
        filterFunction: state.filterFunction
});

class HomeScreen extends Component {

static navigationOptions = {
    title: 'Home'
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
  if (this.props.isLoading) {
    return (
      <Spinner />
    );
  }
    return (
        <Container>
          <Header>
             <Body>
               <Title>Search Screen</Title>
             </Body>
         </Header>
            <Content>
                <Card>
                    <Label>Item Name</Label>
                    <Input
                    onChangeText={(itemName) => {
                          this.setState({ itemName });
                        }
                    }
                    />
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
                    <CardItem>
                    <Item stackedLabel style={{ flex: 1 }}>
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
                    <Text>Search</Text>
                    </Button>
                    </Item>
                    </CardItem>
            </Card>
        </Content>
    </Container>
  );
}
}


export default connect(mapStateToProps, { downloadData })(HomeScreen);
