import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ACCESS_KEY = 'e6lvMmKoEFTFbKr-5xZtDxDgDqRyjiY5tCumQJuJeP8';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [photos, setPhotos] = useState([]);


  //Consumo de Api utilizando axios
  const handleSearchPress = async () => {
    
    const API_URL = `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${searchQuery}`;

    try {
      const response = await axios.get(API_URL);

      setPhotos(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //renderizar la imagen que viene de la api
  const renderImageItem = ({ item }) => (
    

       <View style={styles.itemContainer}>
          <Image
            source={{ uri: item.urls.small }}
            style={styles.image}/>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Description: {item.description}</Text>
            <View style={styles.likeContainer}>
                <Text>❤ {item.likes}</Text>
            </View>
          </View>

        </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearchPress}
        >
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={renderImageItem}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    backgroundColor: 'white',
  },
  searchButton: {
    padding: 12,
    backgroundColor: '#3498db',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  likeIcon: {
    marginRight: 5,
    color: '#e74c3c',
  },
  likeText: {
    color: '#555',
  },
});

