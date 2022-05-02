import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getDataByID } from "../Redux/Action";

const SingleItem = ({ data, navigate, getDataByID }) => {
	const handleClick = (id) => {
		getDataByID(id);
		navigate.navigate("Details", { itemID: id });
	};
	return (
		<Card style={styles.card}>
			<Card.Content>
				<Title
					style={{ textAlign: "center", fontWeight: "600", color: "#fff" }}
				>
					{data.item.name}
				</Title>
				<Paragraph
					style={{ textAlign: "center", fontWeight: "400", color: "#fff" }}
				>
					Country: {data.item.country}
				</Paragraph>
				<Paragraph
					style={{ textAlign: "center", fontWeight: "200", color: "#fff" }}
				>
					Region: {data.item.region}
				</Paragraph>
				<TouchableOpacity
					style={styles.button}
					onPress={() => handleClick(data.item.wikiDataId)}
				>
					<Text style={styles.btnText}>DETAILS</Text>
				</TouchableOpacity>
			</Card.Content>
		</Card>
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
		margin: 10,
		backgroundColor: "rgba(17, 25, 40, 0.75)",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "rgba(255, 255, 255, 0.125)",
		borderWidth: 1,
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
