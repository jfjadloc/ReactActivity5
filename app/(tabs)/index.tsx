import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.subText}>Everything you need is right here.</Text>
      </View>

      <View style={styles.introCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="rocket-outline" size={32} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>Getting Started</Text>
        <Text style={styles.cardDescription}>
          This application helps you manage your products and view your gallery with a seamless native experience.
        </Text>
      </View>

      <Link href="/products" asChild>
        <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Explore Products</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    padding: 24,
    paddingTop: 60, // Extra padding since we hid the native header
  },
  header: {
    marginBottom: 40,
  },
  welcomeText: {
    fontFamily: 'AppBold', // Using the Google Font you set up
    fontSize: 32,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  introCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 30,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF', // Clean iOS Blue
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'AppBold',
    fontSize: 20,
    color: '#1A1A1A',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
  },
  mainButton: {
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});