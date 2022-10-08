import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import { Row } from "../components/row"
import { Form } from '../components/form';
import { addRow } from "../logic/addRowLogic"
import { changeWordle } from '../logic/changeWordle';
import {  useSelector } from 'react-redux';
import { RootState} from "../redux/reduxStore"


export const SubApp = () =>  {
    // the word you try to guess
    const wordle = useSelector((state:RootState) => state.wordle.value) 

    const rows = useSelector((state:RootState) => state.rows.value)

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
                  <Row row={rows[0]}></Row>
                  <Row row={rows[1]}></Row>
                  <Row row={rows[2]}></Row>
                  <Row row={rows[3]}></Row>
                  <Row row={rows[4]}></Row>
                  <Row row={rows[5]}></Row>
                </View>
                <View style={styles.form}>
                <Form
                //calls imported add row function
                    addRowFunc={row => addRow(wordle, row, rows)}
                    changeWordleFunc={() => changeWordle()}                />
                </View>
            </View>
            {/* right column */}
            <View style={styles.edge}>
            </View>
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
