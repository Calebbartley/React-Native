import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "primary",bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor:bgColor}: {}]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color:fgColor}: {}]} >{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        
        width:'75%',
        height: 50,
        padding: 15,
        marginVertical:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    container_primary: {
        backgroundColor:'#f9e076',
    },
    container_TERTIARY: {
        
    },
    container_SECONDARY: {
        borderColor:'#3b71f3',
        borderWidth: 2,
        marginHorizontal: 25,
    },
    text: {
        fontWeight: 'bold',
        color:'blue',
    },
    text_TERTIARY: {
        color:'gray',
    },
    text_SECONDARY: {
        color:'blue',
    },
})