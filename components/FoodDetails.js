import React, { Component } from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Drawer,
  Button,
} from 'native-base';
import SideBar from './MenuDrawer';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  BackAndroid,
  TouchableOpacity,
} from 'react-native'
var {width, height} = require('Dimensions').get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import FoodItemDetails from './Home/FoodItemDetails'
var {width, height} = require('Dimensions').get('window');
const iconmenu = (<Icon name="chevron-left" size={30} color="#FFFFFF" />)

export default class FoodDetails extends Component {
  constructor () {
    super()
    this.state = {
      fooddata: '',
    }
  }


  componentDidMount() {
    fetch(`http://botram-api-production.ap-southeast-1.elasticbeanstalk.com/api/users/food/${this.props.foodId}`)
    .then(res => res.json())
    .then(data => this.setState ({fooddata: data }))
    // console.log(this.state.fooddata);
  }
    render() {
      return (
        <Container>
          <Row style={{height: 50,backgroundColor:'#B71C1C',}}>
           <Col size={30}>
             <TouchableOpacity  onPress={() => {
               this.props.navigator.popToTop()
             }}>
               <Text style={{padding:10,}}>{iconmenu}</Text>
             </TouchableOpacity>
           </Col>
           <Col size={70}><Text style={{padding:10,color: '#FFFFFF',fontSize:22, }}>Food Details</Text></Col>
          </Row>
          <View style={styles.container}>
            <FoodItemDetails />
          </View>
        </Container>
      );
    }
}

var styles = StyleSheet.create({
  container: {
    height:height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  judul: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
