import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { row } from "../type/data"

export const Row = ({row}: {row:row}) => {

    console.log(row)
    return(
        <View style={styles.row}>
            <View style={{backgroundColor: row[0]?.color, ...styles.rowItem}}>
                <Text style={styles.text}>{row[0]?.letter}</Text>
            </View>
            <View style={{backgroundColor: row[1]?.color, ...styles.rowItem}}>
                <Text style={styles.text}>{row[1]?.letter}</Text>
            </View>
            <View style={{backgroundColor: row[2]?.color, ...styles.rowItem}}>
                <Text style={styles.text}>{row[2]?.letter}</Text>
            </View>
            <View style={{backgroundColor: row[3]?.color, ...styles.rowItem}}>
                <Text style={styles.text}>{row[3]?.letter}</Text>
            </View>
            <View style={{backgroundColor: row[4]?.color, ...styles.rowItem}}> 
                <Text style={styles.text}>{row[4]?.letter}</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    row: {
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10, 
        flexDirection: "row",
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-around',
      },

    rowItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: "3%",
        marginVertical: "1%",
        marginHorizontal: "1%",

      },

    text: {
        fontWeight: "bold",
        fontSize: 30

    }
})