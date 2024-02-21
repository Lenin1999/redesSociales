import React from 'react';
import { View, StyleSheet, Image, Text, Linking, TouchableOpacity  } from 'react-native';
import { SocialIcon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';






const HomeScreen = () => {
const navigation = useNavigation();

// Función para dividir el array en grupos de tamaño específico
const chunk = (array, size) => {
  return array.reduce((chunks, element, index) => {
    index % size === 0
      ? chunks.push([element])
      : chunks[chunks.length - 1].push(element);
    return chunks;
  }, []);
};

//funcion para navegacion
const apiUnsplash = () => {
  navigation.navigate('Unsplash');
};

const chatpdf = () => {
  navigation.navigate('Chat');
};



const kwai = () => {
  // Aquí puedes definir la URL a la que deseas redirigir
  const url = 'https://www.kwai.com/es';
  // Abre la URL en el navegador del dispositivo
  Linking.openURL(url);
};


  const user = {
    avatar: "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/90882698_2842460229164800_8623319969792262144_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=68be17&_nc_eui2=AeFFVYHNRhtFZSuQNwn-0nPTbHFPg3rNThZscU-Des1OFrAK_FQOYVIw2X0cMAcHwXYzJHWXBuU9yAncqtEp9aVX&_nc_ohc=ppCAHHYwkp8AX8Lvgr8&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAJRFO9IWTUXbFCjKpaOXsQJqfsbo5spf3bqCSpYB-18Q&oe=65FD743F",
    coverPhoto: "https://static.vecteezy.com/system/resources/previews/009/362/398/non_2x/blue-dynamic-shape-abstract-background-suitable-for-web-and-mobile-app-backgrounds-eps-10-vector.jpg",
    name: "Lenin Ibarra"
  };

  //utilizcion de la libreria de SocialIcons para los botones
  const socialIcons = [
    { type: "twitter", url: "https://x.com/LeninIbarra10?t=R8dFsG6SAERHeVNfSylUzQ&s=08"  },
    { type: "facebook", url: "https://www.facebook.com/lenin.ibarra.7/" },
    { type: "instagram", url: "https://www.instagram.com/leninibarra43/" },
    { type: "linkedin", url: "https://www.linkedin.com/in/lenin-ibarra-639882291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { type: "github", url: "https://github.com/Lenin1999" },
    { type: "twitch", url: "https://www.twitch.tv/emylen1999" },
    { type: "pinterest", url: "https://www.pinterest.es/pokibarra/" },
    { type: "steam", url: "https://steamcommunity.com/profiles/76561199238420119/home" },
    { type: "kwai",  onPress: kwai },
  ];

  // Dividir los iconos en grupos de 4
  const socialIconGroups = chunk(socialIcons, 4);

  return (
    <View style={styles.container}>
    
      <Image
        source={{ uri: user.coverPhoto }}
        style={styles.backgroundImage}
      />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.title}>{user.name}</Text>
      </View>
  
 
      <View style={styles.socialContainer}>
        {socialIconGroups.map((group, index) => (
          <View key={index} style={styles.socialRow}>
            {group.map((icon, iconIndex) => (
              // Si el tipo es 'kwai', renderiza la imagen con TouchableOpacity
              icon.type === "kwai" ? (
                <TouchableOpacity key={iconIndex} onPress={icon.onPress}>
                  <Image
                    source={{ uri: 'https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-1/352477448_218562007165072_2410409305293964572_n.png?stp=dst-png_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=596444&_nc_eui2=AeEwMsNWASuYWrlwQtqDfCgII4E6Q578xK4jgTpDnvzErtt161QlGeRBC-TQla9vKiz_Zinjfb64q1gRorBbnNc1&_nc_ohc=sW-DsWNJfe0AX-O_Tor&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAIE6bCHMbBvlDcwWMvovVMKwBoDEYBBe6ehD1LN1FZAQ&oe=65DB2C6E' }}
                    style={{ width: 50, height: 50 , borderRadius: 25 }} // ajusta el tamaño según sea necesario
                  />
                </TouchableOpacity>
              ) : (
                // Si no, renderiza el componente SocialIcon
                <SocialIcon
                  key={iconIndex}
                  type={icon.type}
                  onPress={() => Linking.openURL(icon.url)}
                />
              )
            ))}
          </View>
        ))}
      </View>
      
      

      {/* Botón personalizado para otras acciones */}
      <Button
        title="Api Unsplash"
        onPress={apiUnsplash}
        buttonStyle={styles.customButton}
      />

<Button
        title="Chat PDF"
        onPress={chatpdf}
        buttonStyle={styles.customButton}
      />
    </View>
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Agrega posición relativa al contenedor principal
  },
  title: {
    fontSize: 50,
    marginBottom: 80,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    alignItems: 'center',

  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'white',
  },
  socialContainer: {
    marginBottom: 60,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customButton: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    borderRadius: 30,
    borderColor: '#FFFF',
    borderWidth: 3,
  },
});


export default HomeScreen;