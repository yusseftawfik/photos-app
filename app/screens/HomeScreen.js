import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { getData } from "../Redux/Action";
import {
	Platform,
	StyleSheet,
	ImageBackground,
	Text,
	View,
	TouchableOpacity,
	Animated
} from "react-native";
import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation, getData }) => {
	const handleClick = () => {
		getData();
		navigation.navigate("Data");
	};

	const progress = useRef(new Animated.Value(0)).current;
	const handleLikeAnimation = () => {
		Animated.timing(progress, {
			toValue: 1,
			duration: 10000,
			useNativeDriver: true,
		}).start();
	};
	useEffect(() => {
		handleLikeAnimation();
	}, []);
	return (
		<ImageBackground
			source={require("../assets/App.jpeg")}
			blurRadius={4}
			resizeMode="cover"
			style={styles.container}
		>
			<View style={styles.mainHeader}>
				<Text style={styles.mainTxt}>Say it in pictures...</Text>
				{Platform.OS != "web" ? (
					<LottieView
						style={styles.emoje}
						progress={progress}
						source={require("../lottie/95644-infinite.json")}
					></LottieView>
				) : null}
			</View>
			<TouchableOpacity style={styles.button} onPress={handleClick}>
				<Text style={styles.btnText}>Start Your Tour</Text>
			</TouchableOpacity>
			<Text style={styles.subTxt}>No limits ∞</Text>
		</ImageBackground>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getData: (num) => dispatch(getData(num)),
	};
};
export default connect(null, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
	container: {
		paddingTop: 200,
		paddingBottom: 200,
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	mainHeader: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	mainTxt: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "300",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	emoje: {
		width: 150,
		height: 150,
	},
	subTxt: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "100",
		textAlign: "center",
		fontStyle: "italic",
	},
	button: {
		backgroundColor: "transparent",
		width: 200,
		height: 50,
		borderRadius: 5,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 0.5,
		borderColor: "#fff",
		padding: 5,
	},
	btnText: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "300",
	},
});
