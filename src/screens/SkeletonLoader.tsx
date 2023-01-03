import React, { useState, useCallback } from "react";
import {
	View,
	StyleSheet,
	Text,
	Pressable,
	useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { Loader, Skeleton } from "../components/Loader";
import { ItemListLoader } from "../components/ItemListLoader";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginBottom: 8,
		alignItems: "center",
		backgroundColor: "#ADEEE3",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
	},
	green: { backgroundColor: "#50723C" },
	grey: { backgroundColor: "#EFEFEE" },
	pink: { backgroundColor: "#F4DBD8" },
	purple: { backgroundColor: "#8D91C7" },
	whiteText: { color: "#FFF" },
});
// interface ComponentNameProps {}

const wait = (numMs) => new Promise((res) => setTimeout(() => res(), numMs));

const SkeletonLoader = () => {
	const { width } = useWindowDimensions();
	const LOADER_SIZE = width * 0.8;
	const [currentLoader, setCurrentLoader] = useState(null);

	const toggleLoading = useCallback(
		(loader) => {
			setCurrentLoader(loader);
			wait(5000).then(() => setCurrentLoader(null));
		},
		[setCurrentLoader]
	);

	if (!currentLoader) {
		return (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<>
					<Pressable
						onPress={() => toggleLoading("simple-square")}
						style={[styles.button, styles.green]}
					>
						<Text style={styles.whiteText}>
							Simple square loader
						</Text>
					</Pressable>

					<Pressable
						onPress={() => toggleLoading("grey-item-list")}
						style={[styles.button, styles.grey]}
					>
						<Text>Grey item list loader</Text>
					</Pressable>

					<Pressable
						onPress={() => toggleLoading("pink-item-list")}
						style={[styles.button, styles.pink]}
					>
						<Text>Pink item list loader</Text>
					</Pressable>

					<Pressable onPress={() => toggleLoading("purple-item-list")} style={[styles.button, styles.purple]}>
						<Text style={styles.whiteText}>
							Purple item list loader
						</Text>
					</Pressable>
				</>
			</View>
		);
	}

	if (currentLoader === "simple-square") {
		return (
			<View style={styles.container}>
				<Skeleton>
					<Loader
						style={{ height: LOADER_SIZE, width: LOADER_SIZE }}
					/>
				</Skeleton>
			</View>
		);
	}

	if (currentLoader === "grey-item-list") {
		return <ItemListLoader />;
	}

	if (currentLoader === "pink-item-list") {
		return (
			<ItemListLoader
				backgroundColor="#F4DBD8"
				highlightColor="#FFF4EC"
			/>
		);
	}

	if (currentLoader === "purple-item-list") {
		return (
			<ItemListLoader
				backgroundColor="#6E75A8"
				highlightColor="#8D91C7"
			/>
		);
	}

	return null;
};

export default SkeletonLoader;
