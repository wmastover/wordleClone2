import React from "react"
import {View, Text, StyleSheet} from "react-native"

export const Row = () => {

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text> letter 1</Text>
            </View>
            <View style={styles.subContainer}>
                <Text> letter 2</Text>
            </View>
            <View style={styles.subContainer}>
                <Text> letter 3</Text>
            </View>
            <View style={styles.subContainer}>
                <Text> letter 4</Text>
            </View>
            <View style={styles.subContainer}>
                <Text> letter 5</Text>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: "row",
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
      },

    subContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        margin: 10,
      },
})