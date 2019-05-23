import React from 'react';
import { Text, View, Image,TouchableOpacity,Linking } from 'react-native';
import {Badge} from 'react-native-elements';
import{Avatar, Icon, withBadge,ButtonGroup} from 'react-native-elements';
import RecipeText from '../components/common/RecipeText';
import BadgeLink from '../components/common/BadgeLink';
import PublisherLink from '../components/common/PublisherLink';
//import { ScrollView } from 'react-native-gesture-handler';

export default class DetailsScreen extends React.Component {

  static navigationOptions={
    title: 'Recipe',
    //alignItems: 'center'
 }


  constructor(props) {
    super(props);
    this.state = {


    };

  }

  render() {

    const recipe = this.props.navigation.getParam('recipe', '');

    // console.log(this.props);

    console.log('recipe', recipe);
    return (
      
      <View
       style={{ flex: 1 }}>

        <Image
          source={{ uri: recipe.image_url }}
          style={{ height: 200, width: '100%', borderRadius: 8 }}
          resizeMode="cover" >

        </Image>

        <RecipeText
          title={recipe.title}
          publisher={recipe.publisher}
          titleStyle={{
            color: '#358058',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 25,
            textDecorationLine: 'underline'
          }}>

        </RecipeText>

        <Text
        
          style={{
            marginHorizontal: 10,
            color:'green',
            fontWeight:'bold',
            fontSize: 16,
            //marginBottom: 10
            }} >
              
              Click below for more details :
            
        </Text>


        <BadgeLink
        title={recipe.title}
        publisher={recipe.publisher}
        image_url={recipe.image_url}
        source_url={recipe.source_url}
        >

        </BadgeLink>


        <PublisherLink
        publisher_url={recipe.publisher_url}
        >
        </PublisherLink>


        <View  style={{padding:10,marginVertical: 10,flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize:10,fontStyle:'italic',marginTop:3}}>Social Rank :</Text> 
        <Badge value={<Text>{recipe.social_rank}</Text>}  status="success"></Badge>
        </View>
        
        
       
         
        

      </View>
    );
  }
}