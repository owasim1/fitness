import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import { TextInput, Button, useTheme } from "react-native-paper";
import { login } from "../../services/auth";
import { loginUser } from "../../store/actions/userActions";
import Logo from "../../assets/images/Logo.png";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const loginData = {
        email,
        password,
      };
      const response = await login(loginData);
      if (!response.success) {
        console.error({
          status: false,
          message: "Could not login",
        });
        return;
      }
      const user = response.data;
      const payload = {
        success: true,
        data: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      };
      dispatch(loginUser(payload));
    } catch (error) {
      console.error(error);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const theme = useTheme();

  const customTheme = {
    ...theme,
    roundness: 30,
    colors: {
      ...theme.colors,
      primary: "#A84448",
      text: "#F6E1C3",
      surface: "#F6E1C3",
    },
  };
  // Get screen width and calculate logo size
  const screenWidth = Dimensions.get("window").width;
  let logoWidth = screenWidth * 0.5;
  let logoHeight = screenWidth * 0.5;

  // Ensure the logo size doesn't exceed 290x320
  if (logoWidth > 290) {
    logoWidth = 290;
  }
  if (logoHeight > 320) {
    logoHeight = 320;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Image
            source={Logo}
            style={{ ...styles.logo, width: logoWidth, height: logoHeight }}
          />
          <TextInput
            label="username"
            value={email}
            onChangeText={setEmail}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
            underlineStyle={{ backgroundColor: "transparent" }}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
            theme={customTheme}
            placeholderTextColor="rgba(168, 68, 72, 0.25)"
            left={<TextInput.Icon icon="account" iconColor="#A84448" />}
          />
          <TextInput
            label="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
            underlineStyle={{ backgroundColor: "transparent" }}
            style={styles.input}
            theme={customTheme}
            left={<TextInput.Icon icon="eye" iconColor="#A84448" />}
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            theme={customTheme}
            contentStyle={styles.buttonContent}
            uppercase={false}
            labelStyle={{ color: "#F6E1C3" }}
          >
            login
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    backgroundColor: "#E9A178",
  },
  logo: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#F6E1C3",
    borderRadius: 30,
  },
  button: {
    borderRadius: 30,
    textTransform: "lowercase",
    width: "100%",
  },
  buttonContent: {
    height: 48,
  },
});

export default LoginPage;
