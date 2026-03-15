import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export const MobilePreviewWrapper = ({ children }: { children: React.ReactNode }) => {
    // If we are on a real phone, just show the app normally
    if (Platform.OS !== 'web') {
        return <>{children}</>;
    }

    // If we are on Web, wrap it in a "Phone" container
    return (
        <View style={webStyles.pageBackground}>
            <View style={webStyles.phoneContainer}>
                {children}
            </View>
        </View>
    );
};

export default function TabLayout() {
    return (
        <MobilePreviewWrapper>
            <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF', headerShown: false }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="gallery"
                    options={{
                        title: 'Gallery',
                        tabBarIcon: ({ color }) => <Ionicons name="images" size={28} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="products"
                    options={{
                        title: 'Products',
                        tabBarIcon: ({ color }) => <Ionicons name="cart" size={28} color={color} />,
                    }}
                />
            </Tabs>
        </MobilePreviewWrapper>
    );
}


const webStyles = StyleSheet.create({
    pageBackground: {
        flex: 1,
        backgroundColor: '#121212', // Dark background like VS Code
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneContainer: {
        width: 375,  // Standard iPhone width
        height: 812, // Standard iPhone height
        backgroundColor: '#fff',
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 8,
        borderColor: '#333',
        // Add a nice shadow to make it pop on web
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
});