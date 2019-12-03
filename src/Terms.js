import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

export default class Terms extends Component{

  state = {
      accepted: false
  }

  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Termos e condições</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: false
                  })
                }
              }}
            >
                <Text style={styles.tcP}>
                  Seja bem vindo ao app da farmácia.
                  Aqui seguem os termos e condições para o uso do mesmo.
                  Favor ler atentamente e aceitar para poder utilizar as ferramentas.
                </Text>
                <Text style={styles.tcP}>
                  Mais alguns textos explicativos aqui sobre a farmácia e tal....
                  Alguns coisas....
                </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 1 e suas explicaçoes etc etc
                  </Text>
                  <Text style={styles.tcL}>{'\u2022'} 
                    Ponto numero 2 e mais algumas coisas aqui... escrevendo ... etc
                  </Text>
            </ScrollView>
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcP:{
      marginTop: 10,
      fontSize: 12
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

  button:{
      backgroundColor: '#136AC7',
      borderRadius: 5,
      padding: 10
  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}