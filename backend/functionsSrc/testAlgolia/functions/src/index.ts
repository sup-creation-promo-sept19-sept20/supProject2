import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as algoliasearch from 'algoliasearch';

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
                                      return index.addObject({
                                        objectID,
                                        ...data
                                      });
                                    });


exports.unindexQuestion = functions.firestore
                                 .document('questions/{questionId}')
                                 .onDelete((snap, context) => {
                                   const objectId = snap.id;

                                   // Delete an ID from the index
                                   return index.deleteObject(objectId);
                                 });
