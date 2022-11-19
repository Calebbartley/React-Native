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
        
        width:'100%',
        height: 50,
        padding:'15',
        marginVertical:5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    container_primary: {
        backgroundColor:'#f9e076',
    },
    container_TERTIARY: {
        
    },
    text: {
        fontWeight: 'bold',
        color:'#FFF',
    },
    text_TERTIARY: {
        color:'gray',
    },
})