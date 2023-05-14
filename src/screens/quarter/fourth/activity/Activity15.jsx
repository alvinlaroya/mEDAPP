import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-paper";
import * as Speech from "expo-speech";

import AsyncStorage from "@react-native-async-storage/async-storage";

const imagePath = "../../../../../assets/image/activity/act15";

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

  const [choices1, setChoices1] = useState([
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer1("a");
        Speech.speak("Good Job!");
        setStep(2);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>3 + 6 = 9</Text>
      </View>
    </TouchableHighlight>,
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer1("b");
        Speech.speak("Sorry, you choose a wrong answer");
        setStep(2);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>3 + 5 = 8</Text>
      </View>
    </TouchableHighlight>,
  ]);

  const [choices2, setChoices2] = useState([
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer2("a");
        Speech.speak("Sorry, you choose a wrong answer");
        setStep(3);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>2 + 5 = 7</Text>
      </View>
    </TouchableHighlight>,
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer2("b");
        Speech.speak("Good Job!");
        setStep(3);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>3 + 5 = 8</Text>
      </View>
    </TouchableHighlight>,
  ]);

  const [choices3, setChoices3] = useState([
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer3("a");
        Speech.speak("Good Job!");
        setStep(4);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>2 + 7 = 9</Text>
      </View>
    </TouchableHighlight>,
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer3("b");
        Speech.speak("Sorry, you choose a wrong answer");
        setStep(4);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>3 + 4 = 7</Text>
      </View>
    </TouchableHighlight>,
  ]);

  const [choices4, setChoices4] = useState([
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer4("a");
        Speech.speak("Good Job!");
        setStep(5);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>5 + 5 = 10</Text>
      </View>
    </TouchableHighlight>,
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer4("b");
        Speech.speak("Sorry, you choose a wrong answer");
        setStep(5);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>2 + 5 = 7</Text>
      </View>
    </TouchableHighlight>,
  ]);

  const [choices5, setChoices5] = useState([
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer5("a");
        Speech.speak("Sorry, you choose a wrong answer");
        setStep(6);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>5 + 2 = 7</Text>
      </View>
    </TouchableHighlight>,
    <TouchableHighlight
      underlayColor="#0099ff"
      onPress={() => {
        setAnswer5("b");
        Speech.speak("Good Job!");
        setStep(6);
      }}
      style={{ marginTop: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 90,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>3 + 5 = 8</Text>
      </View>
    </TouchableHighlight>,
  ]);

  useEffect(() => {
    if (step === 6) {
      var total = 0;
      if (answer1 == "a") {
        total++;
      }
      if (answer2 == "b") {
        total++;
      }
      if (answer3 == "a") {
        total++;
      }
      if (answer4 == "a") {
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

  const randomizeChoices = async () => {
    for (let i = choices1.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = choices1[i];
      let k2 = choices2[i];
      let k3 = choices3[i];
      let k4 = choices4[i];
      let k5 = choices5[i];

      choices1[i] = choices1[j];
      choices2[i] = choices2[j];
      choices3[i] = choices3[j];
      choices4[i] = choices4[j];
      choices5[i] = choices5[j];

      choices1[j] = k;
      choices2[j] = k2;
      choices3[j] = k3;
      choices4[j] = k4;
      choices5[j] = k5;
    }

    setChoices1(choices1);
    setChoices2(choices2);
    setChoices3(choices3);
    setChoices4(choices4);
    setChoices5(choices5);

    try {
      const value = await AsyncStorage.getItem("@act15");
      const total = Number(value) + 1;
      if (total > 100) return;
      await AsyncStorage.setItem("@act15", JSON.stringify(total));
    } catch (e) {
      // saving error
    }
  };

  const storeData = async () => {
    try {
      const value = await AsyncStorage.getItem("@quarter4");
      const total = Number(value) + 12.5;
      if (total > 100) return;
      await AsyncStorage.setItem("@quarter4", JSON.stringify(total));
    } catch (e) {
      // saving error
    }
  };

  const Question1 = (props) => {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <View
          style={{ padding: 20, borderBottomWidth: 1, borderColor: "black" }}
        >
          <Text style={{ fontSize: 19 }}>
            Bilangin, pagsamahin at piliin ang tamang sagot.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
            source={require(`${imagePath}/question-1.png`)}
          />
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {choices1.map((item, i) => (
            <View key={i}>{item}</View>
          ))}
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
            Bilangin, pagsamahin at piliin ang tamang sagot.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
            source={require(`${imagePath}/question-2.png`)}
          />
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {choices2.map((item, i) => (
            <View key={i}>{item}</View>
          ))}
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
            Bilangin, pagsamahin at piliin ang tamang sagot.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
            source={require(`${imagePath}/question-3.png`)}
          />
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {choices3.map((item, i) => (
            <View key={i}>{item}</View>
          ))}
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
            Bilangin, pagsamahin at piliin ang tamang sagot.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
            source={require(`${imagePath}/question-4.png`)}
          />
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {choices4.map((item, i) => (
            <View key={i}>{item}</View>
          ))}
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
            Bilangin, pagsamahin at piliin ang tamang sagot.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
            source={require(`${imagePath}/question-5.png`)}
          />
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {choices5.map((item, i) => (
            <View key={i}>{item}</View>
          ))}
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
        <View style={{ padding: 20 }}>
          <View
            style={{
              padding: 20,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "black",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Correct answers:
              </Text>
              <Text style={{ fontSize: 18, marginTop: 15 }}>1. A</Text>
              <Text style={{ fontSize: 18 }}>2. B</Text>
              <Text style={{ fontSize: 18 }}>3. A</Text>
              <Text style={{ fontSize: 18 }}>4. A</Text>
              <Text style={{ fontSize: 18 }}>5. B</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Your answers:
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  textTransform: "uppercase",
                }}
              >
                1. {answer1}
              </Text>
              <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
                2. {answer2}
              </Text>
              <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
                3. {answer3}
              </Text>
              <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
                4. {answer4}
              </Text>
              <Text style={{ fontSize: 18, textTransform: "uppercase" }}>
                5. {answer5}
              </Text>
            </View>
          </View>
        </View>
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
          <Button
            icon="restart"
            mode="contained"
            style={{ height: 50, justifyContent: "center", marginTop: 5 }}
            buttonColor="red"
            onPress={() => {
              setAnswer1("");
              setAnswer2("");
              setAnswer3("");
              setAnswer4("");
              setAnswer5("");
              setScore(0);
              setStep(1);
              randomizeChoices();
            }}
          >
            Try Again
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
      <ScrollView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          backgroundColor: "white",
        }}
      >
        <View
          style={[
            styles.container,
            {
              width: Dimensions.get("window").width,
              paddingBottom: 40,
            },
          ]}
        >
          {renderQuestion}
        </View>
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
