const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.createLink = functions.firestore
  .document('users/{users}')
  .onCreate((snapshot, context) => {
    console.log(snapshot.data())
    const {users} = context.params
    const {longURL, shortHash, currentUser, name} = snapshot.data()


    return admin.firestore().doc(`users/${users}`).set({
      currentUser,
      longURL,
      shortHash,
      name
    })


    // return Promise.resolve()
  })
