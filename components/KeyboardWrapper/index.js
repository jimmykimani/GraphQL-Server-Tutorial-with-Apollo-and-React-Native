import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "react-navigation";
import { ifIphoneX } from "react-native-iphone-x-helper";
import PropTypes from "prop-types";

const KeyboardWrapper = props => {
  const { children } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? null : "padding"}
      keyboardVerticalOffset={
        ifIphoneX ? Header.HEIGHT + 1 : Header.HEIGHT + 18
      }
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

KeyboardWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default KeyboardWrapper;
