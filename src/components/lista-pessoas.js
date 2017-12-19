import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity  } from 'react-native';

class ListaPessoas extends Component {

  state = { lista: [], flag: 0 };

  componentWillMount() {
      this.carregaLista();
  }

  renderPessoa() {
      const { imagemStyle, containerStyle } = estilos;
      return this.state.lista.map(pessoa =>
          <View style={containerStyle} key={pessoa.id}>
              <Text>{pessoa.nome}</Text>
                <TouchableOpacity activeOpacity = { .8 } onPress={ ()=>{this.apagarPessoa(pessoa);} } >
                    <Image style={imagemStyle} source={{ uri: pessoa.imagem }} onPress={()=>this.apagarPessoa()} />
                </TouchableOpacity >
          </View>
      );
  }

  apagarPessoa(pessoa){
    console.log("Imagem: " );
    console.dir(pessoa);
  }

  render() {
      return (
          <ScrollView>
              {this.renderPessoa()}
          </ScrollView>
      );
  }

  carregaLista() {
      fetch('https://raw.githubusercontent.com/Noctuliuss/projeto4/master/resources/lista_pessoas.json')
          .then(response => response.json().then(data => {
              this.setState({ lista: data });
          }))
          .catch(error => {
              this.setState({ lista: [{ pessoa: 'Impossível carregar a lista' }] });
          });

  }
}

const estilos = {
    imagemStyle: {
        height: 200,
        width: 200

    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};

export default ListaPessoas;
