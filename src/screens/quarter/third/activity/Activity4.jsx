import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import * as Speech from "expo-speech";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

const imagePath = "../../../../../assets/image/activity/act8";

// react navigation
import { useNavigation } from "@react-navigation/native";

function FirstActivity() {
  const navigation = useNavigation();

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const thingToSay = [
      "Anong araw ang susunod sa Martes?",
      "Ano ang ikatatlong araw sa isang Linggo?",
      "Anong araw ang nasa pagitan ng Miyerkules at Biyernes?",
      "Anong araw bago mag lunes?",
      "Anong araw makalipas ang araw ng Huwebes?",
    ];
    Speech.speak(thingToSay[step - 1]);

    if (step === 6) {
      var total = 0;
      if (answer1 == "b") {
        total++;
      }
      if (answer2 == "a") {
        total++;
      }
      if (answer3 == "a") {
        total++;
      }
      if (answer4 == "c") {
        total++;
      }
      if (answer5 == "b") {
        total++;
      }
      setScore(total);
      Speech.speak(`You got ${total} over 5 score`);
      storeData();
    }
  }, [step]);

  const storeData = async () => {
    try {
      const value = await AsyncStorage.getItem("@quarter3");
      const total = Number(value) + 33.3;
      await AsyncStorage.setItem("@quarter3", JSON.stringify(total));
      Updates.reloadAsync();
    } catch (e) {
      // saving error
    }
  };

  const answerErrorHandler = () => {
    alert("Please select your answer");
    Speech.speak("Please select your answer");
  };

  const Question1 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>
            Anong araw ang susunod sa Martes?
          </Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          <TouchableOpacity onPress={() => setAnswer1("a")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sabado</Text>
              {answer1 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer1("b")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Miyerkules
              </Text>
              {answer1 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer1("c")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Linggo</Text>
              {answer1 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => {
              if (answer1 != "") {
                setStep(2);
              } else {
                answerErrorHandler();
              }
            }}
          >
            Submit Answer
          </Button>
        </View>
      </View>
    );
  };

  const Question2 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>
            Ano ang ikatatlong araw sa isang Linggo?
          </Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          <TouchableOpacity onPress={() => setAnswer2("a")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Martes</Text>
              {answer2 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer2("b")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Lunes</Text>
              {answer2 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer2("c")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Miyerkules
              </Text>
              {answer2 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => {
              if (answer2 != "") {
                setStep(3);
              } else {
                answerErrorHandler();
              }
            }}
          >
            Submit Answer
          </Button>
        </View>
      </View>
    );
  };

  const Question3 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>
            Anong araw ang nasa pagitan ng Miyerkules at Biyernes?
          </Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          <TouchableOpacity
            onPress={() => setAnswer3("a")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Huwebes</Text>
              {answer3 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAnswer3("b")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Lunes</Text>
              {answer3 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer3("c")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Linggo</Text>
              {answer3 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => {
              if (answer3 != "") {
                setStep(4);
              } else {
                answerErrorHandler();
              }
            }}
          >
            Submit Answer
          </Button>
        </View>
      </View>
    );
  };

  const Question4 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>Anong araw bago mag lunes?</Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          <TouchableOpacity
            onPress={() => setAnswer4("a")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Biyernes</Text>
              {answer4 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAnswer4("b")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sabado</Text>
              {answer4 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer4("c")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Linggo</Text>
              {answer4 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => {
              if (answer4 != "") {
                setStep(5);
              } else {
                answerErrorHandler();
              }
            }}
          >
            Submit Answer
          </Button>
        </View>
      </View>
    );
  };

  const Question5 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>
            Anong araw makalipas ang araw ng Huwebes?
          </Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          <TouchableOpacity
            onPress={() => setAnswer5("a")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Linggo</Text>
              {answer5 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAnswer5("b")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Biyernes</Text>
              {answer5 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer5("c")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Lunes</Text>
              {answer5 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => {
              if (answer5 != "") {
                setStep(6);
              } else {
                answerErrorHandler();
              }
            }}
          >
            Finish
          </Button>
        </View>
      </View>
    );
  };

  const ShowResult = (props) => {
    return (
      <ImageBackground
        source={require("../../../../../assets/image/comfetti.gif")}
        style={{ flex: 1 }}
      >
        <View style={[{ alignItems: "center", marginTop: 30 }]}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Your Score:</Text>
        </View>
        <View style={[{ alignItems: "center", marginTop: 90 }]}>
          <Text
            style={{ fontSize: 120, fontWeight: "bold" }}
          >{`${score}/5`}</Text>
        </View>
        <View style={{ padding: 10, marginTop: 50 }}>
          <Button
            mode="contained"
            style={{ height: 50, justifyContent: "center" }}
            buttonColor="green"
            onPress={() => navigation.navigate("Home")}
          >
            Go back to home
          </Button>
        </View>
      </ImageBackground>
    );
  };

  let renderQuestion;

  if (step == 1) {
    renderQuestion = <Question1 />;
  } else if (step == 2) {
    renderQuestion = <Question2 />;
  } else if (step == 3) {
    renderQuestion = <Question3 />;
  } else if (step == 4) {
    renderQuestion = <Question4 />;
  } else if (step == 5) {
    renderQuestion = <Question5 />;
  } else if (step == 6) {
    renderQuestion = <ShowResult />;
  }

  return <View style={styles.container}>{renderQuestion}</View>;
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
