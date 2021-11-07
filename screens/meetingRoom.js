import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const MenuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 1,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 1,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 1,
    name: "group",
    title: "Participants",
  },
];

let socket;
function MeetingRoom() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [activeUsers, setActiveUsers] = useState();
  const [startCamera, setStartCamera] = useState(false);
  const API_URL = "http://192.168.100.146:3001";
  const startCameraOpen = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      alert("Access denied");
    }
  };
  const JoinRoom = () => {
    startCameraOpen();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };
  useEffect(() => {
    socket = io(`http://192.168.100.146:3001`);
    socket.on("connection", () => console.log("connected"));
    socket.on("users", (users) => {});

    socket.on("all-connected", (users) => {
      setActiveUsers(users);
      console.log("all-connected");
    });

    // socket.on("all-users", users=>{
    //     console.log('etettxt')
    //     setActiveUsers(users)
    //     console.log('avtive users')
    //     console.log(users)
    // })
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.cameraContainer}>
            <Camera
              type={"front"}
              style={{ width: "100%", height: 600 }}
            ></Camera>
          </View>

          <View style={styles.menu}>
            {MenuIcons.map((icon, index) => (
              <TouchableOpacity style={styles.tile}>
                <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          JoinRoom={JoinRoom}
        />
      )}
    </View>
  );
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  startMeetingContainer: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470dc",
    height: 50,
    borderRadius: 15,
  },
  tile: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color: "white",
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
  },
});

//
