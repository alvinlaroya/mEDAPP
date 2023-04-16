import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
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
      "Select the correct hour and minute of a clock",
      "Select the correct hour and minute of a clock",
      "Select the correct hour and minute of a clock",
      "Select the correct hour and minute of a clock",
      "Select the correct hour and minute of a clock",
    ];
    Speech.speak(thingToSay[step - 1]);

    if (step === 6) {
      var total = 0;
      if (answer1 == "a") {
        total++;
      }
      if (answer2 == "c") {
        total++;
      }
      if (answer3 == "a") {
        total++;
      }
      if (answer4 == "b") {
        total++;
      }
      if (answer5 == "a") {
        total++;
      }
      setScore(total);
      Speech.speak(`You got ${total} over 5 score`);
      storeData();
    }
  }, [step]);

  const storeData = async () => {
    try {
      const value = await AsyncStorage.getItem("@quarter4");
      const total = Number(value) + 12.5;
      if(total >= 100) return;
      await AsyncStorage.setItem("@quarter4", JSON.stringify(total));
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
            Select the correct hour and minute of a clock
          </Text>
          <Image
            style={{ width: '50%', height: 180, marginTop: 20, resizeMode: 'contain' }}
            source={require(`${imagePath}/question-1.png`)}
          />
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>2:00</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>2:30</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>3:25</Text>
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
            Select the correct hour and minute of a clock
          </Text>
          <Image
            style={{ width: '50%', height: 180, marginTop: 20, resizeMode: 'contain' }}
            source={require(`${imagePath}/question-2.png`)}
          />
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>1:00</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>5:10</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>7:55</Text>
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
            Select the correct hour and minute of a clock
          </Text>
          <Image
            style={{ width: '50%', height: 180, marginTop: 20, resizeMode: 'contain' }}
            source={require(`${imagePath}/question-3.png`)}
          />
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>8:45</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>8:40</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>9:00</Text>
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
          <Text style={{ fontSize: 19 }}>
            Select the correct hour and minute of a clock
          </Text>
          <Image
            style={{ width: '50%', height: 180, marginTop: 20, resizeMode: 'contain' }}
            source={require(`${imagePath}/question-4.png`)}
          />
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>11:25</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>11:30</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>10:30</Text>
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
            Select the correct hour and minute of a clock
          </Text>
          <Image
            style={{ width: '50%', height: 180, marginTop: 20, resizeMode: 'contain' }}
            source={require(`${imagePath}/question-5.png`)}
          />
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>11:45</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>11:50</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>11:50</Text>
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

  return (
    <SafeAreaView>
      <ScrollView style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      }}>
        <View style={[styles.container, {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height
        }]}>{renderQuestion}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FirstActivity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  video: {
    width: "100%",
    height: 200,
  },
});
