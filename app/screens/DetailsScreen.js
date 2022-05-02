import React from "react";
import { connect } from "react-redux";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Platform, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";

const DetailsScreen = ({ specificData, loading }) => {
	return (
		<ImageBackground
			source={require("../assets/App.jpg")}
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
				<Card style={styles.card}>
					<Card.Content>
						<Title style={{ textAlign: "center", fontWeight: "600" }}>
							{specificData.name}
						</Title>
						<Paragraph style={{ textAlign: "center", fontWeight: "400" }}>
							Country: {specificData.country}
						</Paragraph>
						<Paragraph style={{ textAlign: "center", fontWeight: "200" }}>
							Population: {specificData.population}
						</Paragraph>
						<Paragraph style={{ textAlign: "center", fontWeight: "200" }}>
							TimeZone: {specificData.timezone}
						</Paragraph>
					</Card.Content>
				</Card>
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
		backgroundColor: "rgba(255, 255, 255, 0.75)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});
