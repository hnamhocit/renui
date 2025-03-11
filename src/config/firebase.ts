import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCXgPez6baI-8uRx3wx-GEZETKkKAEqXus',
	authDomain: 'renui-a7682.firebaseapp.com',
	projectId: 'renui-a7682',
	storageBucket: 'renui-a7682.firebasestorage.app',
	messagingSenderId: '989635502873',
	appId: '1:989635502873:web:3d0187752b282ca3541b88',
	measurementId: 'G-30Y6H7W3GT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
