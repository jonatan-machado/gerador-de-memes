import React, { Component } from "react";
import { Text, View, Button, Alert, StyleSheet, TextInput } from "react-native";

export default class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = { inputTexto: "", texto: "" };

    this.apertouBotao = this.apertouBotao.bind(this);
  }

  apertouBotao() {
    let s = this.state;
    if (s.inputTexto == "Jonatan") {
      s.texto = "Você acertou!";
    } else {
      s.texto = "você errou!";
    }
    this.setState(s);
  }
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Adivinhe o neu nome"
          onChangeText={inputTexto => this.setState({ inputTexto })}
        />
        <Button title="Aperte em mim" onPress={this.apertouBotao} />
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10
  },
  texto: {
    fontSize: 20,
    textAlign: "center"
  }
});
