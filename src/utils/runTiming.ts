import type Animated from "react-native-reanimated";
import {
  Value,
  block,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  stopClock
} from "react-native-reanimated";

export function runTiming(
  clock: Animated.Clock,
  value: Animated.Adaptable<any>,
  config: Animated.TimingConfig
) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ]);
}
