import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

import { firebase } from '@react-native-firebase/auth';

export default class Loading extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#65db84', fontSize: 40}}>
        Loading
        </Text>
        <ActivityIndicator color='#65db84' size='large'/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
