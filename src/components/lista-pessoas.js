import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

class ListaPessoas extends Component {

  state = { lista: [], flag: 0 };

  componentWillMount() {
      this.carregaLista();
  }

  renderPessoa() {
      const { imagemStyle, containerStyle } = estilos;
      return this.state.lista.map(coisa =>
          <View style={containerStyle} key={coisa.id}>
              <Text>{coisa.produto}</Text>
              <Image style={imagemStyle} source={{ uri: coisa.imagem }} />
              <Button onPress={() => this.remove(coisa)}>Remover</Button>
          </View>
      );
  }

  render() {
      return (
          <ScrollView>
              {this.renderPessoa()}
          </ScrollView>
      );
  }

  carregaLista() {
      fetch('https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json')
          .then(response => response.json().then(data => {
              this.setState({ lista: data });
          }))
          .catch(error => {
              this.setState({ lista: [{ produto: 'Impossível carregar a lista' }] });
          });

  }
}

// const estilos = {
//     imagemStyle: {
//         height: 300,
//         width: 300
//
//     },
//     containerStyle: {
//         alignItems: 'center',
//         flexDirection: 'column'
//     }
// };

export default ListaCoisas;
