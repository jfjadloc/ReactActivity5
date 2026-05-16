import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function ProductsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        {/* Product Card 1 */}
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1772289934600-cb4ddd71dbd8?w=500' }} 
            style={styles.image} 
          />
          <View style={styles.details}>
            <Text style={styles.title}>Product Name</Text>
            <Text style={styles.price}>PHP 150.00</Text>
            <Text style={styles.description}>
              A short description about the product goes here. Simple and easy to read.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Product Card 2 */}
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500' }} 
            style={styles.image} 
          />
          <View style={styles.details}>
            <Text style={styles.title}>Another Product</Text>
            <Text style={styles.price}>PHP 200.00</Text>
            <Text style={styles.description}>
              Another description to show how the layout handles different content.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light gray background
    paddingTop: 35,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden', // Keeps the image corners rounded
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 15,
  },
  title: {
    fontFamily: 'AppBold', // Using your set-up font
    fontSize: 20,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#007AFF', // Clean blue for the price
    marginVertical: 4,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000', // Solid black button for contrast
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});