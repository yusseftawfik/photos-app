import React from "react";
import { connect } from "react-redux";
import {
	StyleSheet,
	Platform,
	SafeAreaView,
	View,
	Text,
	Image,
} from "react-native";
import LottieView from "lottie-react-native";

const DetailsScreen = ({ specificData, loading }) => {
	return (
		<SafeAreaView style={styles.container}>
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
		</SafeAreaView>
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
		backgroundColor: "#000",
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
