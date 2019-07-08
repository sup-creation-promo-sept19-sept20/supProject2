"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliasearch = require("algoliasearch");
admin.initializeApp();
const env = functions.config();
// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('toutesmesaides');
exports.indexQuestion = functions.firestore
    .document('questions/{questionId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    const objectID = snap.id;
    // Add the data to the algolia index
    return index.addObject(Object.assign({ objectID }, data));
});
exports.unindexQuestion = functions.firestore
    .document('questions/{questionId}')
    .onDelete((snap, context) => {
    const objectId = snap.id;
    // Delete an ID from the index
    return index.deleteObject(objectId);
});
//# sourceMappingURL=index.js.map