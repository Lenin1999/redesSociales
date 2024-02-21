import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simular un tiempo de espera para la pantalla de splash
    const timer = setTimeout(() => {
      // Navegar a la pantalla principal después de 3 segundos
      navigation.navigate('Main');
    }, 3000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonape.com%2Fuce-universidad-central-del-ecuador-logo-logo-icon-svg-png.html&psig=AOvVaw1MM7oocDM58rv8aXcrKRLG&ust=1708634390249000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPD9taClvYQDFQAAAAAdAAAAABAE' }} // Cambia la ruta según la ubicación de tu logotipo
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
