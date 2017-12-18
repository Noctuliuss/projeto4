import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Titulo from './src/components/titulo';
import ListaPessoas from './src/components/lista-pessoas';
const App = () => {
    return (
        <View>
            <Titulo texto={'Lista de Pessoas do Churrasco'} />
            <ListaPessoas />
        </View>

    );
};

AppRegistry.registerComponent('projeto4', () => App);
