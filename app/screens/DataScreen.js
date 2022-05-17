import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { getData } from "../Redux/Action";
import SingleItem from "../Components/SingleItem";

const DataScreen = ({ getData, loading, data, navigation }) => {
	let newPhotos;
	let oldPhotos;
	let renderItems; // to render only new items and prevent page reload

	const [photos, setPhotos] = useState(null);
	const [number, setNumber] = useState(21);

	setTimeout(() => {
		setPhotos(data);
	}, 10);

	const fetchMore = () => {
		setNumber((prevState) => prevState + 3);
		getData(number);
	};
	return (
		<>
			<SafeAreaView style={styles.container}>
				{loading ? (
					Platform.OS != "web" ? (
						<LottieView
							autoPlay
							loop
							source={require("../lottie/loading.json")}
						></LottieView>
					) : null
				) : data && photos ? (
					((newPhotos = data.map((photo) => photo.id)),
						(oldPhotos = photos.map((pho) => pho.id)),
						(renderItems = newPhotos.filter(
							(toRender) => oldPhotos.indexOf(toRender) === -1
						)),
						(
							<FlatList
								style={{ flex: 1 }}
								data={photos}
								renderItem={(item, index) =>
									renderItems.indexOf(item.id) === -1 ? (
										<SingleItem key={index} data={item} navigate={navigation} />
									) : null
								}
								keyExtractor={(item) => item.id}
								numColumns={3}
								onEndReached={() => fetchMore()}
								onEndReachedThreshold={0.01}
							/>
						))
				) : null}
			</SafeAreaView>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		data: state.city.data,
		loading: state.city.loading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getData: (num) => dispatch(getData(num)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DataScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: 25,
		backgroundColor: "#000",
	},
});
