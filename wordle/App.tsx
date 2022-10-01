import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import { Row } from "./components/row"
import { useState, useEffect} from "react"
import { row, rowItem } from "./type/data"
import { Form } from './components/form';
import { addRow } from "./logic/addRowLogic"


const rowItem1 = { color: "grey", letter: "a"} as rowItem
const row1 = [rowItem1, rowItem1, rowItem1, rowItem1, rowItem1, ] as row

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
  }, [rows])


  return (
    //contains page
    <View style={styles.container}>
      {/* left collumn */}
      <View style={styles.edge}>
        
      </View>
      {/* center column */}
      <View style={styles.center}>
        {/* probs add header here */}
        <View style={styles.flatList}>
          <FlatList
          data={rows}
          renderItem={({item}) => {
            return(
              <Row row={item}/>
            )
          }}/>
        </View>
        <View style={styles.form}>
          <Form
          //calls imported add row function
            addRowFunc={row => addRow(wordle, row, setRows, rows)}
          />
        </View>
      </View>
      {/* right column */}
      <View style={styles.edge}> </View>
    </View>
  );
}

const styles = StyleSheet.create({


  center: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },

  edge: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
  },

  
  flatList: {
    flex: 5,
  },

  form: {
    flex:1, 
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: "2%",
    padding: "1%",

  },

});
