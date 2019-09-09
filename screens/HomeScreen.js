import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { ScrollView, FlatList } from "react-native";
import gql from "graphql-tag";

import { Container, PlaceholdeWrapper, HeaderText } from "./styled";
import { Button, NoteCard, TextPlaceHolder } from "../components";

const query = gql`
  query {
    notes {
      id
      text
    }
  }
`;

class HomeScreen extends Component {
  _addNewNote = () => {
    const { navigation } = this.props;
    navigation.navigate("NewNote", {});
  };

  _renderItem({ item }) {
    //Return the UI
    return <NoteCard noteText={item.text} />;
  }

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderText>My Notes</HeaderText>
          <NoteCard />
          <Query query={query}>
            {/* The props.children of the Query will be a callback with a response, and error parameter. */}
            {(response, error) => {
              if (error) {
                console.log("Response Error-------", error);
                return <Text style={styles.errorText}>{error}</Text>;
              }
              //If the response is done, then will return the FlatList
              if (response) {
                console.log("response-data-------------", response.data);
                return (
                  <FlatList
                    data={response.data.notes}
                    renderItem={item => this._renderItem(item)}
                  />
                );
                //Return the FlatList if there is not an error.
              }
            }}
          </Query>
        </ScrollView>
        <PlaceholdeWrapper>
          <TextPlaceHolder
            onHolderPress={() => this._addNewNote()}
            text={"Add new note"}
          />
        </PlaceholdeWrapper>
      </Container>
    );
  }
}

export default HomeScreen;
