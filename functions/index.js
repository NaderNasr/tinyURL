const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.createLink = functions.firestore
  .document('users/{users}')
  .onCreate((snapshot, context) => {
    console.log(snapshot.data())
    const { users } = context.params
    const {
      longURL,
      shortHash,
      currentUser,
      name,
      createdAt,
      numOfClicks
    } = snapshot.data()


    return admin.firestore().doc(`users/${users}`).set({
      currentUser,
      longURL,
      shortHash,
      name,
      createdAt,
      numOfClicks
    })
    // return Promise.resolve()
  })

exports.deleted = functions.firestore
  .document('users/{users}')
  .onDelete((snapshot, context) => {
    const { users } = context.params

    return admin.firestore().doc(`users/${users}`).delete()
  })

