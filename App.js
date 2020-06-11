import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

const instructions = Platform.select({
	ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
	android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
	return (
		// <View style={styles.container}>
		<Header headerText="Albums" />
		// {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
		// <Text style={styles.instructions}>Are you feeling good tonught?</Text>
		// <Text style={styles.instructions}>{instructions}</Text> */}
		// </View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#fff',
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });
