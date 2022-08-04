const admin = require ("firebase-admin")
const serviceAccount = requiere (
"./db/lukc-ecarrito-npx-firebase-adminsdk-pj991-676e342862"
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://lukc-ecarrito-npx-firebase.com"
  });

