import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Video } from "expo-av";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

// react navigation
import { useNavigation } from "@react-navigation/native";

const videoFile = require("./../../../../assets/videos/sort_and_classify.mp4");

function FirstActivity() {
  const navigation = useNavigation();

  const video = React.useRef(null);
  const [checkKey, setCheckKey] = useState(false);
  const [actKey, setActKey] = useState("");

  useEffect(() => {
    if (checkKey) {
      const thingToSay =
        "Sort and classify objects according to one atribute/property (color, shape, size, function)";
      Speech.speak(thingToSay);
    }
  }, [checkKey]);

  const submitKeyHandler = () => {
    if (actKey === "medappq1act1") {
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
          1st Quarter
        </Text>
        <Text style={{ fontSize: 19 }}>
          Sort and classify objects according to one atribute/property (color,
          shape, size, fuinction/use)
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
            navigation.navigate("Activity1");
            try {
              const value = await AsyncStorage.getItem("@act1");
              const total = Number(value) + 1;
              await AsyncStorage.setItem("@act1", JSON.stringify(total));
            } catch (e) {
              // saving error
            }
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
