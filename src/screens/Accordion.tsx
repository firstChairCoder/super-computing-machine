import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";
import { Ionicons } from "@expo/vector-icons";

import Accordion, { IList } from "../components/AccordionList";

const SIZE = 28;
const styles = StyleSheet.create({
	iconContainer: {
		height: SIZE,
		width: SIZE,
		borderRadius: SIZE / 2,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#525251",
	},
	container: {
		flex: 1,
		backgroundColor: "snow",
		padding: 16,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
	},
});

const list: IList = {
	title: "29th Nov.",
	items: [
		{ match: "🇪🇨 Ecuador    vs    🇸🇳 Senegal", time: "16:00" },
		{ match: "🇳🇱 Netherlands    vs    🇶🇦 Qatar", time: "16:00" },
		{ match: "🇮🇷 Iran    vs    🇺🇸 USA", time: "20:00" },
		{ match: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales    vs    🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", time: "20:00" },
	],
};

const list2: IList = {
	title: "30th Nov. - 1st Dec.",
	items: [
		{ match: "🇦🇺 Australia    vs    🇩🇰 Denmark", time: "16:00" },
		{ match: "🇹🇳 Tunisia    vs    🇫🇷 France", time: "16:00" },
		{ match: "🇸🇦 Saudi Arabia    vs    🇲🇽 Mexico", time: "20:00" },
		{ match: "🇵🇱 Poland    vs    🇦🇷 Argentina", time: "20:00" },
		{ match: "🇨🇦 Canada vs    🇲🇦 Morocco", time: "16:00" },
		{ match: "🇭🇷 Croatia    vs    🇧🇪 Belgium", time: "$3.45" },
		{ match: "🇨🇷 Costa Rica    vs    🇩🇪 Germany", time: "20:00" },
		{ match: "🇯🇵 Japan    vs    🇪🇸 Spain", time: "20:00" },
	],
};

const list3: IList = {
	title: "03rd Dec.",
	items: [
		{ match: "🇳🇱 Netherlands    vs    🇺🇸 USA", time: "16:00" },
		{ match: "🇦🇷 Argentina    vs    🇦🇺 Australia", time: "20:00" },
	],
};

const AccordionScreen = () => {
	return (
		<>
		<ScrollView
			style={{ flex: 1, backgroundColor: "snow" }}
			bounces={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ padding: 16 }}
		>
			<Text style={styles.title}>Matches</Text>
			<Accordion {...{ list }} />
			<Accordion list={list2} />
			<Accordion list={list3} />
		</ScrollView>
		<StatusBar backgroundColor={"snow"} />
		</>
	);
};

export default AccordionScreen;
