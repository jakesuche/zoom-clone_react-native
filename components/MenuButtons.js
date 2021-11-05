import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const items = [
  { id: 1, name: "video-camera", title: "New Meeting", customColor: "#FF751F" },
  { id: 2, name: "plus-square", title: "Join" },
  { id: 3, name: "calendar", title: "Schedule" },
  { id: 4, name: "upload", title: "Share Screen" },
];
const MenuButtons = ({navigation}) => {

const openMeeting = () =>{
  console.log(navigation)
    navigation.navigate("Room")
}

  return (
    <View style={styles.container}> 
      {items.map((item, index) => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={()=>openMeeting()}
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470DC",
            }}
          >
            <FontAwesome size={23} name={item.name} color={"#efefef"} />
          </TouchableOpacity>
          <Text style={styles?.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 10,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    fontWeight: "600",
    paddingTop: 10,
  },

  button: {
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
