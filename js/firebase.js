import RNFirebase from 'react-native-firebase'

const configurationOptions = {
  persistence: true
}

const firebase = RNFirebase.initializeApp(configurationOptions)

firebase.crash().isCrashCollectionEnabled()
  .then(enabled => {
    if (!enabled)
      firebase.crash().setCrashCollectionEnabled(true)
  })

export default firebase
