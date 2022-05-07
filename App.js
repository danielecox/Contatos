import { useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const[contatos, setContato] = useState([])
  const[contador, setContador] = useState(0)
  
  const capturarNome = (NomeDigitado) => {
    setNome(NomeDigitado)
  }
  const capturarTelefone = (TelefoneDigitado) => {
    setTelefone(TelefoneDigitado)
  }

  const adicionarContato = () => {
    setContato(contatos => {
      setContador(contador + 1)
      //operador spread
      let aux = [{key: contador.toString(), value: nome, value1: telefone}, ...contatos]
      setNome('')
      setTelefone('')
      return aux
    })
  }
  
  return (
    <View
      style={styles.telaPrincipalView}>
      <View>
        { }
        <TextInput 
          placeholder='Nome'
          style={styles.lembreteTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput 
          placeholder='Telefone'
          style={styles.lembreteTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Button
          disabled={nome.length === 0}
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>
      <FlatList 
        data={contatos}
        renderItem={l => (
          <View
            style={styles.itemNaLista}>
            <Text>{l.item.value}</Text>
            <Text>{l.item.value1}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  lembreteTextInput: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});

    