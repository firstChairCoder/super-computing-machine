import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loader, Skeleton } from "./Loader";

const styles = StyleSheet.create({
	container: { padding: 20 },
	row: { flexDirection: "row", marginBottom: 40 },
	image: { height: 100, width: 100, marginRight: 8 },
	line: { height: 20, marginBottom: 16 }
});

export const ItemListLoader = ({ backgroundColor, highlightColor }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
			<Skeleton
				backgroundColor={backgroundColor}
				highlightColor={highlightColor}
			>
				<View style={styles.container}>
					{new Array(10).fill(null).map((_, index) => (
						<Item key={index} />
					))}
				</View>
			</Skeleton>
		</SafeAreaView>
	);
};

function Item() {
	const { width } = useWindowDimensions()

	return (
		<View style={styles.row}>
			<Loader style={styles.image} />
			<>
				<Loader style={[styles.line, { width: width * 0.6 }]} />
				<Loader style={[styles.line, { width: width * 0.4 }]} />
				<Loader style={[styles.line, { width: width * 0.2 }]} />
			</>
		</View>
	);
}
