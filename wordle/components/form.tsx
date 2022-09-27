import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import { useState} from "react"
import { ButtonProps} from "../type/data"
 

export const Form = ({addRowFunc}: ButtonProps) => {

    const [text, setText] = useState("")
 
    return (
        <View style={styles.form}>
            <TextInput 
            style={styles.formItem}
            onChangeText={newText => { 
                if(newText.length < 6) {
                    setText(newText)} else {
                        alert("5 letters max")
                    }
                }}
            value={text}
            />
            <Button 
            title='Sumbit'
            onPress={() => {if (text.length ===5 ) {
                addRowFunc(text)} else {
                    alert("must be 5 letters long")
                }}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    form: {
      flexDirection: "row",
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    formItem: {
      padding: 10,
      margin: 10,
      backgroundColor: "white",
    }
  });