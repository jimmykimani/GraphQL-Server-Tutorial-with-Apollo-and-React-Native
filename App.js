import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { AppLoading } from "expo";

import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { InMemoryCache } from "apollo-cache-inmemory";
//import ApolloClient, InMemoryCache, and HttpLink to define your client to cnnect to your graphql server
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
//import your ApolloProvider from react-apollo to wrap your app.
import { ApolloProvider } from "react-apollo";

//import  Navigator so your application renders the initial route
import AppNavigator from "./navigation/AppNavigator";

//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server
  link: new HttpLink({
    uri: "https://graphql-server-node-js-103.herokuapp.com/graphql"
  })
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // ...
      ]),
      Font.loadAsync({
        // ...
      })
    ]);
  };

  handleLoadingError = () => {
    // ...
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }
}
