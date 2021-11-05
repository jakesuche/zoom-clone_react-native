import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header.js";
import MenuButtons from "../components/MenuButtons.js";
import SearchBar from "../components/SearchBar";
import ContactsMenu from "../components/ContactsMenu";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
