import { useState } from "react"
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native"

export default function GitExplorer() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  
  const handleFetch = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => {
      if (!response.ok)
        throw new Error("Error in fetch:" + response.statusText);
        
      return response.json()
    })
    .then(data => setRepositories(data.items))
    .catch(err => console.error(err));    
  }

  return(
    <View>
      <TextInput 
        style={{fontSize: 18, width: 200, marginTop: 30}} 
        placeholder='keyword' 
        value={keyword}
        onChangeText={text => setKeyword(text)} 
      />
      <Button title="Find" onPress={handleFetch} />
      <FlatList
        data={repositories} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <View>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>
              {item.full_name}
            </Text>
            <Text style={{fontSize: 16 }}>
              {item.description}
            </Text>
          </View>
        }
      /> 
    </View>
  )
}