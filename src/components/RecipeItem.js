import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './common/Card';
import RecipeText from './common/RecipeText';
import Button from './common/Button';

export default class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToDetail =() =>{
    const {item} = this.props;
    this.props.navigation.navigate('Details',{recipe :item});
  }

  render() {

    const { item } = this.props;

    return (
      <Card>

        <View style={{ overflow: "hidden" }}>

          <Image
            source={{ uri: item.image_url }}
            style={{ height: 200, flex: 1, borderRadius: 8 }}
            resizeMode="cover" >

          </Image>

          <RecipeText title ={item.title} publisher ={item.publisher}></RecipeText>

          <Button onPress={this.goToDetail} title ="View more"></Button>
        </View>


      </Card>





    );
  }
}
