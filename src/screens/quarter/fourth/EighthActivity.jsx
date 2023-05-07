import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Video } from "expo-av";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

// react navigation
import { useNavigation } from "@react-navigation/native";

const videoFile = require("./../../../../assets/videos/hour_and_minutes_in_clock.mp4");

function FirstActivity() {
  const navigation = useNavigation();

  const video = React.useRef(null);
  const [checkKey, setCheckKey] = useState(false);
  const [actKey, setActKey] = useState("");

  useEffect(() => {
    if (checkKey) {
      const thingToSay = "Name the hour and minute hands in a clock";
      Speech.speak(thingToSay);
    }
  }, [checkKey]);

  const submitKeyHandler = () => {
    if (actKey === "medappq4act8") {
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
        <Text style={{ fontSize: 19 }}>
          Name the hour and minute hands in a clock
        </Text>
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
          onPress={async () => {
            try {
              const value = await AsyncStorage.getItem("@act8");
              const total = Number(value) + 1;
              if (total > 100) return;
              await AsyncStorage.setItem("@act8", JSON.stringify(total));
            } catch (e) {
              // saving error
            }
            navigation.navigate("Activity8");
          }}
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
