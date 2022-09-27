import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import { Row } from "./components/row"
import { useState, useEffect} from "react"
import { row } from "./type/data"
import { Form } from './components/form';
import { addRow } from "./logic/addRowLogic"

export default function App() {
  // the word you try to guess
  const wordle = ["w", "o", "r", "d", "s"]

  //initial value of state, empty array of rows
  const initialRows = Array<row>(0)
  
  //declare state using useState hook
  const [rows, setRows] = useState(initialRows)

  //function to run on button press
  useEffect(() => {
    console.log(rows)
  })


  return (
    <View style={styles.container}>
      <Row/>
      <Form
      //calls imported add row function
        addRowFunc={row => addRow(row, setRows, rows)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
