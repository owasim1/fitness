import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignupPage: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSignup = () => {
        // Handle signup logic here
    };

    return (
        <View>
            <Text>Signup</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={handleSignup}>
                <Text>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupPage;
