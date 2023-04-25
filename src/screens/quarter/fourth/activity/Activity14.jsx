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

const imagePath = "../../../../../assets/image/activity/act14";
import * as Updates from "expo-updates";

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
      "Bawasan at bilangin kung ilan ang natira.",
      "Bawasan at bilangin kung ilan ang natira.",
      "Bawasan at bilangin kung ilan ang natira.",
      "Bawasan at bilangin kung ilan ang natira.",
      "Bawasan at bilangin kung ilan ang natira.",
    ];
    Speech.speak(thingToSay[step - 1]);

    if (step === 6) {
      var total = 0;
      if (answer1 == "c") {
        total++;
      }
      if (answer2 == "a") {
        total++;
      }
      if (answer3 == "b") {
        total++;
      }
      if (answer4 == "a") {
        total++;
      }
      if (answer5 == "c") {
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
      if (total > 100) return;
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
            Bawasan at bilangin kung ilan ang natira.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>4</Text>
              {answer1 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>5</Text>
              {answer1 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>6</Text>
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
            Bawasan at bilangin kung ilan ang natira.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>5</Text>
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>6</Text>
              {answer2 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>7</Text>
              {answer2 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
            Bawasan at bilangin kung ilan ang natira.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>0</Text>
              {answer3 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer3("b")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>2</Text>
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>1</Text>
              {answer3 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
            Bawasan at bilangin kung ilan ang natira.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>7</Text>
              {answer4 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/check.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer4("b")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>8</Text>
              {answer4 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>9</Text>
              {answer4 == "c" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
            Bawasan at bilangin kung ilan ang natira.
          </Text>
          <Image
            style={{ width: "50%", height: 120, resizeMode: "contain" }}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>2</Text>
              {answer5 == "a" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
                />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAnswer5("b")}
            style={{ marginTop: 30 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>3</Text>
              {answer5 == "b" && (
                <Image
                  style={{ width: 60, height: 60 }}
                  source={require("../../../../../assets/image/wrong.jpg")}
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
                height: 130,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>4</Text>
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
                Key answers:
              </Text>
              <Text style={{ fontSize: 18, marginTop: 15 }}>1. C</Text>
              <Text style={{ fontSize: 18 }}>2. A</Text>
              <Text style={{ fontSize: 18 }}>3. B</Text>
              <Text style={{ fontSize: 18 }}>4. A</Text>
              <Text style={{ fontSize: 18 }}>5. C</Text>
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
