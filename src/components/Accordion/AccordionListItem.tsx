import React from "react";
import { View, Text, StyleSheet } from "react-native";

// const ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: "#F4F4F5",
		height: 54,
	},
	name: {
		fontSize: 16,
	},
	matchWrapper: {
		borderRadius: 8,
		backgroundColor: "#44C282",
		padding: 8,
	},
	match: {
		color: "#FFF",
		fontWeight: "bold",
	},
});

export type ListItem = {
	match: string;
	time: string;
};

interface ListItemProps {
	item: ListItem;
	isLast: boolean;
}

const AccordionListItem = ({ isLast, item }: ListItemProps) => {
	const bottomRadius = isLast ? 8 : 0;
	return (
		<View
			style={[
				styles.container,
				{
					borderBottomLeftRadius: bottomRadius,
					borderBottomRightRadius: bottomRadius,
				},
			]}
		>
			<Text style={styles.name}>{item.match}</Text>
			<View style={styles.matchWrapper}>
				<Text style={styles.match}>{item.time}</Text>
			</View>
		</View>
	);
};

export default AccordionListItem;
