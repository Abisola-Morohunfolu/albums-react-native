import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
// import * as Linking from 'expo-linking';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const albumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={styles.headerTextStyle}>
					<Text style={styles.headerTitleStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={styles.artworkStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button
					onPress={() => {
						Linking.openURL(url);
					}}
				>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerTextStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTitleStyle: {
		fontSize: 18,
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 10,
	},
	artworkStyle: {
		height: 300,
		flex: 1,
		width: null,
	},
};

export default albumDetail;
