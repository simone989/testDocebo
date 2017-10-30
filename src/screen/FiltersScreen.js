import React, { Component } from 'react';
import { Container, Content, Label, Card, CardItem, Item, Button, Header, Left, Body, Right, Title, Text, ListItem, Radio, Picker } from 'native-base';
import { connect } from 'react-redux';
import { filterOrderByType } from '../actions/actions';
import CourseItem from '../components/CourseItem';


const mapStateToProps = state => ({
        data: state.data
});

class listScreen extends Component {
  state = {
      courseType: 'all',
      radioSelect_AtoZ: true,
      radioSelect_ZtoA: false,
  }
  componentWillMount() {
    const { radioSelect_AtoZ, radioSelect_ZtoA, courseType } = this.props.navigation.state.params;
    this.setState({
      radioSelect_AtoZ: radioSelect_AtoZ,
      radioSelect_ZtoA: radioSelect_ZtoA,
      courseType: courseType
    })
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
              onPress={() => this.setState({ radioSelect_AtoZ: true, radioSelect_ZtoA: false, courseType: 'all' })}
              >
                <Text>Clear All</Text>
              </Button>
            </Right>
          </Header>
        <Content>
          <Label>Sort type by</Label>
          <ListItem
          onPress={() => this.setState({ radioSelect_AtoZ: true, radioSelect_ZtoA: false }, () => console.log('A to Z selected'))}
          >
            <Text>A to Z</Text>
              <Right>
                <Radio selected={this.state.radioSelect_AtoZ} />
              </Right>
          </ListItem>
        <ListItem
        onPress={() => this.setState({ radioSelect_ZtoA: true, radioSelect_AtoZ: false }, () => console.log('Z to A selected'))}
        >
          <Text>Z to A</Text>
          <Right>
            <Radio selected={this.state.radioSelect_ZtoA} />
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
            this.props.filterOrderByType({
              radioSelect_AtoZ: this.state.radioSelect_AtoZ,
              radioSelect_ZtoA: this.state.radioSelect_ZtoA,
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


export default connect(mapStateToProps, { filterOrderByType })(listScreen);
