import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDataByID } from "../Redux/Action";

const SingleItem = ({ data, navigate, getDataByID }) => {
	const handleClick = (id) => {
		getDataByID(id);
		navigate.navigate("Details", { itemID: id });
	};
	let photo = data.item.previewURL;
	return (
		<>
			{data && (
				<View>
					<TouchableOpacity
						style={styles.card}
						onPress={() => handleClick(data.item.id)}
					>
						<Image
							style={{ width: 130, height: 100 }}
							source={{ uri: photo }}
						/>
						<View style={styles.data}>
							<Text style={{ fontWeight: "900", color: "#d31336", margin: 10 }}>
								likes: {data.item.likes}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
		</>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		getDataByID: (id) => dispatch(getDataByID(id)),
	};
};
export default connect(null, mapDispatchToProps)(SingleItem);

const styles = StyleSheet.create({
	card: {
		width: 130,
		height: 130,
		backgroundColor: "#000",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "rgba(255, 255, 255, 0.125)",
		borderWidth: 1,
	},
	data: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
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
