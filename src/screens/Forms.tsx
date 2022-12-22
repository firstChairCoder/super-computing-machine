import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { RadioButton } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import type { StackScreenProps } from "@react-navigation/stack";

import type { MainStackParamList } from "../navigation";
import Input from "../components/Input";
import { colors } from "../constants/colors";
import Card from "../components/Card";
import Picker from "../components/Picker";
import * as Text from "../components/Text";
import CheckBox from "../components/CheckBox";

export default function ({
  navigation
}: StackScreenProps<MainStackParamList, "Forms">) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState<string>("");
  const [value, setValue] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  const items = [
    { label: "January", value: "JAN" },
    { label: "February", value: "FEB" },
    { label: "March", value: "MAR" },
    { label: "April", value: "APR" },
    { label: "May", value: "MAY" },
    { label: "June", value: "JUN" },
    { label: "July", value: "JUL" },
    { label: "August", value: "AUG" },
    { label: "September", value: "SEP" },
    { label: "October", value: "OCT" },
    { label: "November", value: "NOV" },
    { label: "December", value: "DEC" }
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "snow"
      }}
    >
      <ScrollView>
        <Card style={{ paddingHorizontal: 20, marginTop: 20, width: "100%" }}>
          <View style={{ marginBottom: 16 }}>
            <Text.Title style={{ marginBottom: 10 }}>Basic Input</Text.Title>

            <Input
              placeholder="Enter your name"
              value={name}
              onChangeText={(val) => setName(val)}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text.Title style={{ marginBottom: 10 }}>
              TextInput w/ content
            </Text.Title>

            <Input
              placeholder="Enter your email"
              value={email}
              onChangeText={(val) => setEmail(val)}
              leftContent={
                <Ionicons name="mail" size={16} color={colors.gray100} />
              }
            />
          </View>
          <View>
            <Text.Title style={{ marginBottom: 10 }}>
              TextInput w/ 2 contents
            </Text.Title>

            {/*TODO;  Convert to password type input */}
            <Input
              placeholder="Enter your password"
              value={password}
              onChangeText={(val) => setPassword(val)}
              leftContent={
                <Ionicons
                  name="lock-closed-sharp"
                  size={16}
                  color={colors.gray100}
                />
              }
              rightContent={
                <Ionicons name="eye" size={16} color={colors.gray100} />
              }
            />
          </View>
        </Card>

        <Card style={{ paddingHorizontal: 20, marginTop: 20, width: "100%" }}>
          <>
            <Text.Title style={{ marginBottom: 10 }}>Picker</Text.Title>
            <Picker
              placeholder="Select an option"
              items={items}
              value={value}
              onChangeSelection={(val) => setValue(val)}
            />
          </>
        </Card>

        <Card style={{ paddingHorizontal: 20, marginTop: 20, width: "100%" }}>
          <>
            <Text.Title style={{ marginBottom: 10 }}>Selectors</Text.Title>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10
              }}
            >
              <CheckBox
                value={isChecked}
                onValueChange={(val) => setIsChecked(val)}
              />
              <Text.Italic style={{ marginLeft: 10, color: "gray" }}>
                I agree with the Terms & Conditions
              </Text.Italic>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value={isRadioChecked}
                onValueChange={(val) => setIsRadioChecked(val)}
              />
              <Text.Italic style={{ marginLeft: 10, color: "gray" }}>
                I don't agree with the Terms & Conditions
              </Text.Italic>
            </View>
          </>
        </Card>
      </ScrollView>
    </View>
  );
}
