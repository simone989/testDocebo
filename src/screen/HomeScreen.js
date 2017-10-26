import React, { Component } from 'react';
import { Container, Content, Button, Text, Item, Input, Label, Card, CardItem, Picker } from 'native-base';

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
    selected2: value
  });
}
render() {
    return (
        <Container>
            <Content>
                <Card>
                    <Item stackedLabel error={this.state.error_input_itemName} style={{ flex: 1 }}>
                    <Label>Item Name</Label>
                    <Input
                    onChangeText={(itemName) => {
                        if (itemName === '') {
                          this.setState({ error_input_itemName: true });
                        } else {
                          this.setState({ itemName, error_input_itemName: false });
                        }
                        }}
                    />
                    </Item>
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
                        if (this.state.email === '') {
                          this.setState({ error_input_email: true });
                        }
                        if (this.state.password === '') {
                          this.setState({ error_input_password: true });
                        }
                        if (this.state.email !== '' && this.state.password !== '') {
                          this.props.loginUser({
                              email: this.state.email,
                              password: this.state.password,
                              navigateTo: (screen) => this.props.navigation.navigate(screen)
                          });
                        }
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


export default HomeScreen;
