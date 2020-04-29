import React from 'react';
import { 
     Text,
     TouchableOpacity,
     ImageBackground,
     View
     } from 'react-native';
     import logo from './images/logo.png';
     import StyleSheet from './Style';

export default class Home extends React.Component {
  static NavigationOptions= {
       title:'Home',

  }
  render() {
    const { navigate }=this.props.navigation;
    return (
      <ImageBackground source= {logo} style={StyleSheet.bgcontainer} >
              <View style={StyleSheet.Container1}  >
    <TouchableOpacity style={StyleSheet.btnRound} onPress={() => navigate(
                'SelectGroup',{ screen:'SelectGroup' }
              ) }>
            <Text style={StyleSheet.text}
              
            >CREATE ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound} onPress={() => navigate(
              'JoinZikar',{ screen:'JoinZikar' }
            ) }>
            <Text style={StyleSheet.text}
            >JOIN ZIKAR GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleSheet.btnRound} 
             onPress={() => navigate(
              'SelfZikar',{ screen:'SelfZikar' }
            ) }>
            <Text style={StyleSheet.text}
            >SELF ZIKAR</Text>
       </TouchableOpacity> 
       </View>
     </ImageBackground>
    );
  }
}