import React from 'react';
import { FlatList, StyleSheet, View, TextInput, Button} from 'react-native';
import { Row } from "../components/row"
import { Form } from '../components/form';
import { addRow } from "../logic/addRowLogic"
import { changeWordle } from '../logic/changeWordle';
import { Provider, useSelector } from 'react-redux';
import {store, RootState} from "../redux/reduxStore"


export const SubApp = () =>  {
    // the word you try to guess
    const wordle = useSelector((state:RootState) => state.wordle.value[0])

    const rows = useSelector((state:RootState) => state.rows.value)

    return (
    //contains page
    <Provider store={store}>
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
                    addRowFunc={row => addRow(wordle, row, rows)}
                    changeWordleFunc={() => changeWordle()}                />
                </View>
            </View>
            {/* right column */}
            <View style={styles.edge}>
            </View>
        </View>
    </Provider>
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
