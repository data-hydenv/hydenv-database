/**
 * This script can be used to upload new exercises or
 * update the existing. Place the exercises into a file called 'data.json'
 * next to this script.
 *
 * You need to place a google firebase service account called 'firebase-admin.json'
 * into a subfolder next to this script called 'service-accounts'.
 *
 * DANGER: do not upload service-accounts folder to ANY public place
 *
 */
// load the admin SDK
import * as admin from 'firebase-admin';

// load file module
import * as fs from 'fs';

// import some m
import { Track } from '../src/app/core/models/track';

// get the upload filename
const fname = process.argv[2] ? process.argv[2] : './tracks.json';

// load service account
const serviceAccount = require('./service-accounts/firebase-admin.json');

// init firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// load data
const data: Track[] = JSON.parse(fs.readFileSync(fname, 'utf8'));

// add all exercises
process.stdout.write(`Start uploading ${data.length} tracks`);
const tracks = admin.firestore().collection('tracks');

// upload
data.forEach(track => {
  tracks.doc(track.id).set(track);
  process.stdout.write('.');
});
console.log('\nDone.');


// Uncomment to store the current state of the database to the file
// admin.firestore().collection('tracks').get().then(docRef => docRef.docs.map(doc => doc.data())).then(tracks => {
//     fs.writeFileSync('tracks.json', JSON.stringify(tracks, null, 2));
// });
