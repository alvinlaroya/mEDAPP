import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Video } from "expo-av";
import * as Speech from "expo-speech";

const videoFile = require("./../../../../assets/videos/add_and_subtact_quantities.mp4");

function FirstActivity() {
  const video = React.useRef(null);
  const [checkKey, setCheckKey] = useState(false);
  const [actKey, setActKey] = useState("");

  useEffect(() => {
    if (checkKey) {
      const thingToSay = "Subtract quantities up to 10";
      Speech.speak(thingToSay);
    }
  }, [checkKey]);

  const submitKeyHandler = () => {
    if (actKey === "medappq4act14") {
      setCheckKey(true);
    } else {
      alert("Invalid Activity Key");
      setActKey("");
    }
  };

  return checkKey ? (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 19,
            marginBottom: 30,
            fontWeight: "bold",
            color: "green",
          }}
        >
          4th Quarter
        </Text>
        <Text style={{ fontSize: 19 }}>Subtract quantities up to 10</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>Video Lesson:</Text>
      </View>
      <Video
        ref={video}
        style={{ flex: 1 }}
        source={videoFile}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <View style={{ padding: 10 }}>
        <Button
          icon="play"
          mode="contained"
          style={{ height: 50, justifyContent: "center" }}
          buttonColor="green"
          onPress={() => console.log("Pressed")}
        >
          Start Activity
        </Button>
      </View>
    </View>
  ) : (
    <View style={[styles.container, { padding: 10 }]}>
      <Text>{actKey}</Text>
      <TextInput
        mode="outlined"
        label="Enter Activity Key"
        placeholder="Type something"
        value={actKey}
        onChangeText={(text) => setActKey(text)}
      />
      <Button
        icon="play"
        mode="contained"
        style={{
          height: 50,
          marginTop: 10,
          justifyContent: "center",
          borderRadius: 0,
        }}
        buttonColor="green"
        onPress={submitKeyHandler}
      >
        Submit
      </Button>
    </View>
  );
}

export default FirstActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  video: {
    width: "100%",
    height: 200,
  },
});
