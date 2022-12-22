import React from "react";
import Animated, {
	runOnUI,
	measure,
	useAnimatedRef,
	useAnimatedStyle,
	useSharedValue,
	useDerivedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { mix, mixColor } from "react-native-redash";

import AccordionListItem, { ListItem } from "./AccordionListItem";

const SIZE = 28;
const styles = StyleSheet.create({
	container: {
		marginTop: 16,
		padding: 16,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
	items: {
		overflow: "hidden",
	},
	iconContainer: {
		height: SIZE,
		width: SIZE,
		borderRadius: SIZE / 2,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#525251",
	},
});

function Chevron({
	progress,
	onDropColor = "lime",
}: {
	progress: Animated.SharedValue<number>;
	onDropColor?: string;
}) {
	const animatedStyle = useAnimatedStyle(() => ({
		backgroundColor: mixColor(progress.value, "#525251", onDropColor),
		transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI)}rad` }],
	}));
	return (
		<Animated.View style={[styles.iconContainer, animatedStyle]}>
			<Ionicons
				name={"chevron-down-sharp"}
				size={SIZE - 4}
				color={"#FFF"}
			/>
		</Animated.View>
	);
}

export interface IList {
	title: string;
	items: ListItem[];
}

interface ListProps {
	list: IList;
	backgroundColor?: string;
	titleColor?: string;
}

const AccordionList = ({
	list,
	backgroundColor = "lightgray",
	titleColor = "#17161A",
}: AccordionListProps) => {
	const aRef = useAnimatedRef<View>();
	const height = useSharedValue(0);
	const open = useSharedValue(false);
	const progress = useDerivedValue(() =>
		open.value ? withSpring(1) : withTiming(0)
	);

	const animatedHeaderStyle = useAnimatedStyle(() => ({
		borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
		borderBottomRightRadius: progress.value === 0 ? 8 : 0,
	}));

	const animatedStyle = useAnimatedStyle(() => ({
		height: 1 + height.value * progress.value,
		opacity: progress.value === 0 ? 0 : 1,
	}));

	return (
		<>
			<Pressable
				onPress={() => {
					if (height.value === 0) {
						runOnUI(() => {
							"worklet";
							height.value = measure(aRef).height;
						})();
					}
					open.value = !open.value;
				}}
			>
				<Animated.View
					style={[
						styles.container,
						{ backgroundColor },
						animatedHeaderStyle,
					]}
				>
					<Text style={[styles.title, { color: titleColor }]}>
						{list.title}
					</Text>
					<Chevron {...{ progress }} />
				</Animated.View>
			</Pressable>
			<Animated.View style={[styles.items, animatedStyle]}>
				<View
					ref={aRef}
					onLayout={({
						nativeEvent: {
							layout: { height: h },
						},
					}) => console.log({ h })}
				>
					{list.items.map((item, key) => (
						<AccordionListItem
							key={key}
							isLast={key === list.items.length - 1}
							{...{ item }}
						/>
					))}
				</View>
			</Animated.View>
		</>
	);
};

export default AccordionList;
