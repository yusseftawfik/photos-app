import React from "react";
import { connect } from "react-redux";
import {
	StyleSheet,
	Platform,
	ImageBackground,
	View,
	Text,
	Image,
} from "react-native";
import LottieView from "lottie-react-native";

const DetailsScreen = ({ specificData, loading }) => {
	return (
		<ImageBackground
			source={require("../assets/details.jpg")}
			blurRadius={4}
			resizeMode="cover"
			style={styles.container}
		>
			{loading ? (
				Platform.OS != "web" ? (
					<LottieView
						autoPlay
						loop
						source={require("../lottie/loading.json")}
					></LottieView>
				) : null
			) : specificData ? (
				<View style={styles.card}>
					<Text
						style={{
							textAlign: "center",
							fontWeight: "900",
							margin: 10,
							color: "#fff",
						}}
					>
						Tags #{specificData[0].tags}
					</Text>
					<Image
						style={{ width: 300, height: 600 }}
						source={specificData[0].largeImageURL}
					/>
					<View style={styles.data}>
						<Text style={styles.att}>Views: {specificData[0].views}</Text>
						<Text style={styles.att}>
							Downloads: {specificData[0].downloads}
						</Text>
						<Text style={styles.att}>Likes: {specificData[0].likes}</Text>
					</View>
				</View>
			) : null}
		</ImageBackground>
	);
};
const mapStateToProps = (state) => {
	return {
		specificData: state.city.specificData,
		loading: state.city.loading,
	};
};
export default connect(mapStateToProps)(DetailsScreen);
const styles = StyleSheet.create({
	att: {
		margin: 10,
		color: "#fff",
		fontWeight: "800",
	},
	data: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	container: {
		paddingTop: 200,
		paddingBottom: 200,
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		margin: 10,
		backgroundColor: "transparent",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

// 	id(pin): 7139263
// pageURL(pin): "https://pixabay.com/photos/architecture-urban-street-building-7139263/"
// type(pin): "photo"
// tags(pin): "architecture, urban, street"
// previewURL(pin): "https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263_150.jpg"
// previewWidth(pin): 150
// previewHeight(pin): 100
// webformatURL(pin): "https://pixabay.com/get/gc38583ab2921d22082acf4cde3fa55ba9aec527db1870d926857f3f39da2757bdf7817b605ed2bbab47aff3b2f55b200062b13aaaffe74c389baf8ca52be4639_640.jpg"
// webformatWidth(pin): 640
// webformatHeight(pin): 427
// largeImageURL(pin): "https://pixabay.com/get/g4f0ec441c84e8028a260593e8c8794a58f8215dcdc46fac4c42b644728845e9e4b9c5896c7be5ae37ef37534215ce1b7621d9831ebf769f910c54bb4bad98d40_1280.jpg"
// imageWidth(pin): 6000
// imageHeight(pin): 4000
// imageSize(pin): 7852427
// views(pin): 83346
// downloads(pin): 75868
// collections(pin): 1505
// likes(pin): 71
// comments(pin): 16
// user_id(pin): 17639641
// user(pin): "miguelbarrera3"
// userImageURL(pin): "https://cdn.pixabay.com/user/2022/04/11/01-30-17-114_250x250.jpeg"
