import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native'
import Fontisto from  "react-native-vector-icons/Fontisto"


const SearchBar = () => {


    return (
        <View style={styles.container}>
        <Fontisto name="search" size={20} color={"#858585"} />
        {/* <TextInput placeholder="Search" /> */}
        <Text style={styles.textSearchBar}>Search</Text>
      

        </View>
    )
}


export default SearchBar


const styles = StyleSheet.create({
    container: {
     flexDirection:'row',
      backgroundColor: '#333333',
      paddingHorizontal:10,
      height:40,
      alignItems:'center',
      borderRadius:10,
    },
    textSearchBar:{
        color:'#858585',
        paddingLeft:10,
        fontSize:20
    }
  });