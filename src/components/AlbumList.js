// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import albumDetail from './AlbumDetail';

// const useFetch = (url) => {
// 	const [data, setData] = useState(0);

// 	useEffect(() => {
// 		async function fetchData(url) {
// 			axios.get(url).then((response) => {
// 				setData(response.data);
// 			});
// 		}

// 		fetchData('http://rallycoding.herokuapp.com/api/music_albums');
// 	}, []);

// 	console.log(data);
// 	return data;
// };

const AlbumList = () => {
	const [albumsData, setAlbumsData] = useState({ albums: null, loading: true });

	useEffect(() => {
		async function fetchData(url) {
			axios.get(url).then((response) => {
				setAlbumsData({ albums: response.data, loading: false });
			});
		}

		fetchData('http://rallycoding.herokuapp.com/api/music_albums');
	}, []);

	//render album list
	const renderAlbums = () => {
		return albumsData.albums.map((album) => <AlbumDetail key={album.title} album={album} />);
	};

	return (
		<ScrollView>
			{albumsData.loading ? <Text>Loading...</Text> : null}
			{albumsData.albums === null ? null : renderAlbums()}
		</ScrollView>
	);
};

export default AlbumList;
