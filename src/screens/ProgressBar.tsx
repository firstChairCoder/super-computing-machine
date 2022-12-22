// import React, { useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Animated as RNAnimated
// } from "react-native";
// import Animated, { Clock, EasingNode } from "react-native-reanimated";
// import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

// import { colors } from "../constants/colors";

// const { width } = Dimensions.get("window");
// const AnimatedPath = Animated.createAnimatedComponent(Path);
// const { interpolateNode, multiply } = Animated;
// const { PI, cos, sin } = Math;
// const SIZE = width - 32;
// //-----SVG PROPS------//
// const STROKE_WIDTH = 50;
// const r = (SIZE - STROKE_WIDTH) / 2;
// const cx = SIZE / 2;
// const cy = SIZE / 2;
// const A = PI + PI * 0.4;
// const startAngle = PI + PI * 0.2;
// const endAngle = 2 * PI - PI * 0.2;
// // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
// const x1 = cx - r * cos(startAngle);
// const y1 = -r * sin(startAngle) + cy;
// const x2 = cx - r * cos(endAngle);
// const y2 = -r * sin(endAngle) + cy;
// const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

// const styles = StyleSheet.create({
//   innerWrapper: {
//     // flex: 1,
//     width: "80%",
//     height: 24,
//     borderRadius: 4,
//     marginHorizontal: 8,
//     overflow: "hidden",
//     zIndex: 1
//   },
//   progress: {
//     height: "100%"
//   }
// });

// interface ProgressProps {
//   value: number;
// }

// const Progress = ({ value }: ProgressProps) => {
//   return (
//     <>
//       <View style={[styles.innerWrapper, { backgroundColor: "#EDEDED" }]}>
//         <View
//           style={[
//             styles.progress,
//             { width: `${value}%`, backgroundColor: colors.info }
//           ]}
//         />
//       </View>
//       <Text
//         style={{
//           position: "absolute",
//           fontSize: 16,
//           zIndex: 2,
//           color: colors.black
//         }}
//       >{`${value}%`}</Text>
//     </>
//   );
// };

// const CircularProgress = ({
//   progress
// }: {
//   progress: Animated.Node<number>;
// }) => {
//   const circumference = r * 2 * Math.PI;
//   const α = interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, A]
//   });
//   const STROKE_DASH_OFFSET = multiply(α, r);

//   return (
//     <Svg width={SIZE} height={SIZE}>
//       <Defs>
//         <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
//           <Stop offset="0" stopColor="#f7cd46" />
//           <Stop offset="1" stopColor="#ef9837" />
//         </LinearGradient>
//       </Defs>
//       <Path
//         stroke="white"
//         fill="none"
//         strokeDasharray={`${circumference}, ${circumference}`}
//         {...{ d, STROKE_WIDTH }}
//       />
//       <AnimatedPath
//         stroke="url(#grad)"
//         fill="none"
//         strokeDasharray={`${circumference}, ${circumference}`}
//         {...{ d, STROKE_DASH_OFFSET, STROKE_WIDTH }}
//       />
//     </Svg>
//   );
// };

// const thickness = 7;
// const color = "#4C90FF";
// const unfilledColor = "transparent";
// const size = 120;
// function renderHalfCircle({ isFlipped = false } = {}, style, value) {
//   //   const valueToInterpolate =
//   //     value.constructor.name === "AnimatedValue"
//   //       ? value
//   //       : this.state.animatedValue;

//   return (
//     <RNAnimated.View
//       pointerEvents="none"
//       style={[
//         {
//           width: size / 2,
//           height: size,
//           overflow: "hidden",
//           transform: [{ scaleX: isFlipped ? -1 : 1 }]
//         },
//         style
//       ]}
//     >
//       <RNAnimated.View
//         style={{
//           width: size,
//           height: size,
//           transform: [
//             {
//               rotate: value.interpolateNode({
//                 inputRange: isFlipped ? [0, 0.5] : [0.5, 1],
//                 outputRange: isFlipped
//                   ? ["180deg", "0deg"]
//                   : ["-180deg", "0deg"],
//                 extrapolate: "clamp"
//               })
//             }
//           ]
//         }}
//       >
//         <View>
//           <View style={{ borderColor: color, borderWidth: thickness }} />
//         </View>
//       </RNAnimated.View>
//     </RNAnimated.View>
//   );
// }

// const CircleProgress = ({ style, value }) => {
//   const percent = 0.5;
//   return (
//     <View
//       style={[
//         {
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//           flexDirection: "row"
//         },
//         style
//       ]}
//     >
//       <View
//         pointerEvents="box-none"
//         style={{
//           width: size,
//           height: size,
//           borderRadius: size / 2,
//           borderWidth: thickness,
//           borderColor: unfilledColor,
//           position: "absolute",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <Text style={{ color: "#2b80ff", fontSize: 18, fontWeight: "bold" }}>
//           {`${Math.floor(percent * 100)}%`}
//         </Text>
//       </View>
//       {renderHalfCircle(value)}
//       {renderHalfCircle({ isFlipped: true })}
//     </View>
//   );
// };

// const ProgressBar = () => {
//   //   const [progressor, setProgressor] = useState(50);

//   //   const countInterval = useRef(null);

//   const counter = useRef(new Animated.Value(0)).current;

//   const clock = new Clock();
//   const config = {
//     duration: 10 * 1000,
//     toValue: 1,
//     easing: EasingNode.linear
//   };

//   //   const width = counter.interpolate({
//   //     inputRange: [0, 100],
//   //     outputRange: ["0", "100%"],
//   //     extrapolate: "clamp"
//   //   }); //animate width TODO

//   function load(value: number) {
//     RNAnimated.timing(counter, {
//       toValue: value,
//       duration: 300,
//       useNativeDriver: true
//     }).start();
//   }

//   //   useEffect(() => {
//   //     countInterval.current = setInterval(
//   //       () => setProgressor((prev) => prev + 10),
//   //       100
//   //     );
//   //     return () => {
//   //       clearInterval(countInterval);
//   //     };
//   //   }, []);

//   //   useEffect(() => {
//   //     load(progressor);
//   //     if (progressor >= 100) {
//   //       setProgressor(100);

//   //       clearInterval(countInterval);
//   //     }
//   //     // eslint-disable-next-line react-hooks/exhaustive-deps
//   //   }, [progressor]);

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "snow",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       {/* <Progress value={progressor} /> */}
//       <CircleProgress value={counter} />
//       {/* <CircularProgress progress={runTiming(clock, 0, config)} /> */}
//     </View>
//   );
// };

// export default ProgressBar;
