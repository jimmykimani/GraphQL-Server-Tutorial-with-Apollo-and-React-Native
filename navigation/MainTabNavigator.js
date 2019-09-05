import React from "react";
import { createStackNavigator } from "react-navigation";
import { fromBottom } from "react-navigation-transitions";
import { TouchableOpacity, View } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import AddNoteScreen from "../screens/AddNoteScreen";
import { Images } from "../constants";
import { MenuStyle, IconStyle } from "./styled";

const goBackHeader = goBack => (
  <TouchableOpacity
    activeOpacity={1}
    style={{ paddingHorizontal: 20 }}
    onPress={() => goBack()}
  >
    <View>
      <IconStyle source={Images.back} style={{ height: 15, width: 9 }} />
    </View>
  </TouchableOpacity>
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation: { goBack } }) => ({
        headerStyle: MenuStyle
      })
    },
    NewNote: {
      screen: AddNoteScreen,
      navigationOptions: ({ navigation: { goBack } }) => ({
        headerStyle: MenuStyle,
        headerLeft: () => goBackHeader(goBack)
      })
    }
  },
  {
    transitionConfig: ({ scenes }) => {
      const nextScene = scenes[scenes.length - 1];
      if (nextScene.route.routeName === "NewNote") return fromBottom(550);
    }
  }
);

HomeStack.path = "";

export default HomeStack;
