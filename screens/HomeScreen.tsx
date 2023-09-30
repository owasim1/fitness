import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const HomeScreen = () => {
  const [step, setStep] = useState(1);
  const [fitnessGoal, setFitnessGoal] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Save the user's responses and use them to customize their app experience
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to APP NAME</Text>
      <Text style={styles.subtitle}>
        Answer a few questions to help us tailor the app to your needs.
      </Text>

      {step === 1 && (
        <View>
          <Text style={styles.question}>
            What is your primary fitness goal?
          </Text>
          <RadioButton.Group
            onValueChange={(newValue) => setFitnessGoal(newValue)}
            value={fitnessGoal}
          >
            <View style={styles.radioButton}>
              <RadioButton value="Weight Loss" />
              <Text style={styles.radioButtonText}>Weight Loss</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Muscle Gain" />
              <Text style={styles.radioButtonText}>Muscle Gain</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Maintain Weight" />
              <Text style={styles.radioButtonText}>Improve Overall Health</Text>
            </View>
          </RadioButton.Group>
          <TouchableOpacity style={styles.button} onPress={handleNextStep}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Add more steps/questions here */}

      {step > 1 && (
        <TouchableOpacity style={styles.button} onPress={handlePreviousStep}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      )}

      {step === 2 && (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButtonText: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
