import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, Image } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      story:'',
      author:'',
      storyName:'',
      
    };
  }
  saveStory=()=>{
    db.collection("stories").add({
      'storyName' : this.state.storyName,
      'author' : this.state.author,
      'date'   : firebase.firestore.Timestamp.now().toDate(),
      'story' :this.state.story
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <Header
          backgroundColor={'#24d6d3'}
          centerComponent={{ text: 'Story Hub', style: { color: '#fff' } }}
        />
        <TextInput style={styles.inputBox}
          placeholder="Story title"
          value={this.state.storyName}/>

          <TextInput style={styles.inputBox}
          placeholder="Author"
          value={this.state.author}/>

          <TextInput style={styles.inputBox}
          placeholder="Write your story"
          value={this.state.story} 
          multiline={true}/>

          <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{this.saveStory()}}
          >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  },
  
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  
});