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
    },
    test : {
      imageLoad : false
    }
  }
  
  render(){
    return (
      <View data-test="component-price">
        <View style={styles.vegImgContainer}>
          <Image
            data-test="component-veg-im"
            source={
                require("../assets/images/onion.jpg")
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
        <View>
          { this.state.item.prices.length > 0 ? 
              this.state.item.prices.map((price, i) => (
                <View data-test="component-veg-item" key={i}>
                  <View data-test="component-veg-item-month">
                    {price.month}
                  </View>
                  <View data-test="component-veg-item-price">
                    {price.price}
                  </View>
                </View>
              ))
            : (
              <View data-test="component-veg-item-not-available">
                Price is not available
              </View>
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