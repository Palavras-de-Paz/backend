import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(
    './src/services/firebase/firebase-admin-credential.json'
  )
});

export default admin;