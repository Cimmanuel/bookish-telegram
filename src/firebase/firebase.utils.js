import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import config from './firebase.config'

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
