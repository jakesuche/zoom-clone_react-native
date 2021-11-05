import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactsMenuButtons = [
  {
    type: "starred",
    name:'starred'
  },
  {
    type: "contact",
    name: "uchechukwu",
    photo: require("../assets/avatar-icon-images-4.jpg"),
  },
  {
    type: "contact",
    name: "Emeka pfc",
    photo: require("../assets/avatar-icon-images-15.jpg"),
  },
  {
    type: "contact",
    name: "Ada Uchechukwu",
    photo: require("../assets/avatar-icon-images-15.jpg"),
  },
  {
    type: "contact",
    name: "Njomogu rita",
    photo: require("../assets/avatar-icon-images-15.jpg"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {ContactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact?.photo} style={styles.image} />
        )}

          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius:30
  },
});
