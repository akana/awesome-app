import React,{Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native';
import _ from 'lodash';

export default class PriceScreen extends Component{
  state = {
    item : {
      image : '',
      name : "",
      prices : []
    }
  }
  
  render(){
    return (
      <View data-test="component-price">
        <View style={styles.vegImgContainer}>
          <Image
            source={
                require(this.state.item.image)
            }
            style={styles.vegImage}
          />
          { _.has(this.state, "item.name") ? (
            <Text data-test="component-veg-name">{this.state.item.name}</Text>
          ) : (
            <Text data-test="component-veg-name">Unknown name</Text>
          )

          }
        </View>
      </View>
    );
  }
}

PriceScreen.navigationOptions = {

  title: 'Price',
};

const styles = StyleSheet.create({
  vegImgContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  vegImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  }
});