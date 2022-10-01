import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button, Pressable} from 'react-native';
import { useState} from "react"
import { ButtonProps} from "../type/data"
 

export const Form = ({addRowFunc}: ButtonProps) => {

    const [text, setText] = useState("")
 
    return (
        <View style={styles.subForm}>
            <View style={styles.textInput}>
                <TextInput 
                
                onChangeText={newText => { 
                    if(newText.length < 6) {
                        setText(newText)} else {
                            alert("5 letters max")
                        }
                    }}
                value={text}
                />
            </View>
            <View  style={styles.button}>
                <Pressable
                onPress={() => {if (text.length ===5 ) {
                    addRowFunc(text)} else {
                        alert("must be 5 letters long")
                    }}}
                >
                    <View> Submit </View>
                </Pressable>
            </View>
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
      borderRadius: 10,
      padding: "1%",
    },

    subForm: {
      flex: 1,
      margin: "0%",
      padding: "5%",  
      flexDirection: "row",
      backgroundColor: "grey",
      borderRadius: 10,
    },
  
    textInput: {
        flex: 4,
        padding: "1%",
        margin: "1%",
        backgroundColor: "white",
        borderRadius: 3,

    },

    button: {
        flex: 2,
        padding: "1%",
        margin: "1%",
        backgroundColor: "#F0FFFF",
        borderRadius: 10,
        fontWeight: "bold",
        borderColor: "white",
        borderWidth: 1,
    }

    
  });