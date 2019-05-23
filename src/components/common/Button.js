import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {title,onPress} = this.props;
    return (
        <TouchableOpacity
        onPress ={onPress}
        style ={{

          padding : 10,
          margin: 10,
          //alignSelf:'center',
          alignItems:'center',
          borderRadius:15,
          backgroundColor:'#006738',

          }}>

           <Text style = {{color : '#78BD00',fontWeight:'bold'}}>{title}</Text>
       </TouchableOpacity>
    );
  }
}
