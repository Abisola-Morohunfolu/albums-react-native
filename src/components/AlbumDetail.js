import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const albumDetail = (props) => {
	return (
		<Card>
			<CardSection>
				<Text>{props.title}</Text>
			</CardSection>
		</Card>
	);
};

export default albumDetail;
