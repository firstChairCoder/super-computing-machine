import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	interpolate,
	withRepeat,
	withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const BG_COLOR = "#EFEFEE";
const SPEED = 800;
const HIGHLIGHT_COLOR = "#FFF";

const styles = StyleSheet.create({
	loaderSize: {
		width: 100,
		height: 100,
	},
	loader: {
		backgroundColor: "lime",
	},
	bg: {
		flexGrow: 1,
		overflow: "hidden",
	},
});

export const Skeleton = ({ backgroundColor, children, highlightColor }) => {
	const [layout, setLayout] = useState();
	const shared = useSharedValue(0);

	useEffect(() => {
		shared.value = withRepeat(withTiming(1, { duration: SPEED }), Infinity);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: interpolate(
					shared.value,
					[0, 1],
					[layout ? -layout.width : 0, layout ? layout.width : 0]
				),
			},
		],
	}));

	if (!layout?.width && !layout?.height) {
		return (
			<View onLayout={(event) => setLayout(event.nativeEvent.layout)}>
				{children}
			</View>
		);
	}

	return (
		<MaskedView
			style={{ height: layout.height, width: layout.width }}
			maskElement={<View>{children}</View>}
		>
			<View
				style={[
					styles.bg,
					{ backgroundColor: backgroundColor || BG_COLOR },
				]}
			/>
			<Animated.View
				style={[StyleSheet.absoluteFillObject, animatedStyle]}
			>
				<MaskedView
					style={StyleSheet.absoluteFillObject}
					maskElement={
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							style={StyleSheet.absoluteFillObject}
							colors={["transparent", "black", "transparent"]}
						/>
					}
				>
					<View
						style={[
							StyleSheet.absoluteFillObject,
							{
								backgroundColor:
									highlightColor || HIGHLIGHT_COLOR,
							},
						]}
					/>
				</MaskedView>
			</Animated.View>
		</MaskedView>
	);
};

export const Loader = ({ style }) => {
	return <View style={[style ? style : styles.loaderSize, styles.loader]} />;
};
