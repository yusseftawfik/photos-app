import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import SingleItem from "../Components/SingleItem";

const DataScreen = ({ loading, data, error, navigation }) => {
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
				) : data ? (
					<FlatList
						style={{ flex: 1 }}
						data={data}
						renderItem={(item, index) => (
							<SingleItem key={index} data={item} navigate={navigation} />
						)}
						keyExtractor={(item) => item.id}
						onEndReached={() => alert('should retrive more from api')}
						onEndReachedThreshold={.1}
					/>
				) : error ? <SafeAreaView>{error}</SafeAreaView> : null}
			</SafeAreaView>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		data: state.city.data,
		loading: state.city.loading,
		error: state.city.error,
	};
};
export default connect(mapStateToProps)(DataScreen);

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
