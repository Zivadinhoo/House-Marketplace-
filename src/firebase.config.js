import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/fires';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9dKFyWJXSACv-X252kVNsRpupNqHPKw8',
  authDomain: 'house-marketplace-app-cfb7b.firebaseapp.com',
  projectId: 'house-marketplace-app-cfb7b',
  storageBucket: 'house-marketplace-app-cfb7b.appspot.com',
  messagingSenderId: '659755556547',
  appId: '1:659755556547:web:d8bf42971643fe7a6a0c76',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore();
