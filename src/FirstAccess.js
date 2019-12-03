import React, { Component, PropTypes } from "react";
import {
  AsyncStorage,
  Modal,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from "react-native";

import Terms from './Terms';
  export default class FirstAccess extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false
      };
    }

     componentDidMount() {
       AsyncStorage.getItem(this.props.pagekey, (err, result) => {
        if (err) {
        } else {
          if (result == null) {
            console.log("null value recieved", result);
            this.setModalVisible(true);
          } else {
            console.log("result", result);
          }
        }
      });
      AsyncStorage.setItem(this.props.pagekey, JSON.stringify({"value":"true"}), (err,result) => {
              console.log("error",err,"result",result);
              });
    }
    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

      render() {
      return (
        <View>
          <Modal
            animationType={"slide"}
            transparent={true}
            style={styles.ftreContainer}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={{flex:5}}>
            <Terms />
            </View>
            <View style={styles.ftreContainer}>
              
              
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible([!this.state.modalVisible, alert('termo aceito')]);
                  }}
                >
                  <View style={styles.ftreExitButtonContainer}>
                    <Text style={styles.ftreExitButtonText}>Aceitar</Text>
                  </View>
                </TouchableHighlight>
              </View>
            
          </Modal>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  ftreContainer:{
      backgroundColor:'white',
      flex:1,
      marginTop:10,
      marginBottom:10,
      marginLeft:20,
      marginRight:20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    ftreExitButtonContainer:{
      width:200,
      height:40,
      backgroundColor:'blue',
      borderRadius:10,
      justifyContent:'center',
    },
    ftreExitButtonText:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center'
    }
  });