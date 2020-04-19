import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC9RpzMV63OKGos7W6udhPhuDNQYSXNV2E",
    authDomain: "ecommerce-968e4.firebaseapp.com",
    databaseURL: "https://ecommerce-968e4.firebaseio.com",
    projectId: "ecommerce-968e4",
    storageBucket: "ecommerce-968e4.appspot.com",
    messagingSenderId: "775471681884",
    appId: "1:775471681884:web:a679d5562d0478a60e7199",
    measurementId: "G-CW8F9HWS6G"
}

export const createUserProfileDocument = async (userAuthObject, additionalData) => {
	if(!userAuthObject) return
	const userReference = firestore.doc(`users/${userAuthObject.uid}`) 
	const snapshot = await userReference.get()
	if(!snapshot.exists) {
		const { displayName, email } = userAuthObject
		const createdAt = new Date()
		try {
			await userReference.set({ displayName, email, createdAt, ...additionalData })
		} catch(error) {
			console.log(`Error creating user: ${error}`)
		}
	}
	return userReference
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
