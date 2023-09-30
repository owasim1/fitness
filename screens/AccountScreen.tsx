import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the Account screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountScreen;
