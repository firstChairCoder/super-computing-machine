import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";
import { Ionicons } from "@expo/vector-icons";

import Accordion, { IList } from "../components/Accordion";

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
		{ match: "đŞđ¨ Ecuador    vs    đ¸đł Senegal", time: "16:00" },
		{ match: "đłđą Netherlands    vs    đśđŚ Qatar", time: "16:00" },
		{ match: "đŽđˇ Iran    vs    đşđ¸ USA", time: "20:00" },
		{ match: "đ´ó §ó ˘ó ˇó Źó łó ż Wales    vs    đ´ó §ó ˘ó Ľó Žó §ó ż England", time: "20:00" },
	],
};

const list2: IList = {
	title: "30th Nov. - 1st Dec.",
	items: [
		{ match: "đŚđş Australia    vs    đŠđ° Denmark", time: "16:00" },
		{ match: "đšđł Tunisia    vs    đŤđˇ France", time: "16:00" },
		{ match: "đ¸đŚ Saudi Arabia    vs    đ˛đ˝ Mexico", time: "20:00" },
		{ match: "đľđą Poland    vs    đŚđˇ Argentina", time: "20:00" },
		{ match: "đ¨đŚ Canada vs    đ˛đŚ Morocco", time: "16:00" },
		{ match: "đ­đˇ Croatia    vs    đ§đŞ Belgium", time: "$3.45" },
		{ match: "đ¨đˇ Costa Rica    vs    đŠđŞ Germany", time: "20:00" },
		{ match: "đŻđľ Japan    vs    đŞđ¸ Spain", time: "20:00" },
	],
};

const list3: IList = {
	title: "03rd Dec.",
	items: [
		{ match: "đłđą Netherlands    vs    đşđ¸ USA", time: "16:00" },
		{ match: "đŚđˇ Argentina    vs    đŚđş Australia", time: "20:00" },
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
