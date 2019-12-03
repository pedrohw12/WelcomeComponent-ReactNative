import React, { Component, PropTypes } from "react";
import {
  View,
  Text
} from "react-native";

import FirstAccess from './src/FirstAccess';
  export default class FtueScreen extends Component {
    render() {
      return (
        <View>
          <Text> Hello World </Text>
          <FirstAccess pagekey={'firstaccess'} title={'hello world'} description={'welcome to my app'} />
        </View>
      );
    }
  }  