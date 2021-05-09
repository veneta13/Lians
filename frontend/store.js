import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItem(key, value) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        // Fall back
        await AsyncStorage.setItem(key, value);
    }
}

export async function getItem(key) {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        // Fallback
        return AsyncStorage.getItem(key);
    }
}
