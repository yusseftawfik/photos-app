import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, FlatList, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { getData } from "../Redux/Action";
import SingleItem from "../Components/SingleItem";

const DataScreen = ({ getData, loading, data, navigation }) => {
	// const [number] = useState(data ? data.length : 0)
	// const [photos] = useState(data ? data : null)

	// const fetchMore = () => {
	// 	getData((number + 10))
	// }
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
						numColumns={3}
						// onEndReached={() => fetchMore()}
						onEndReachedThreshold={.1}
					/>
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
