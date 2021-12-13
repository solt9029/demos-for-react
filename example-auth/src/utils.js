import 'appwrite'; // Import the appwrite library
const appwrite = new window.Appwrite(); // The reason we use window.Appwrite() is for compatability with <script> imported appwrite.
appwrite
  .setEndpoint('http://localhost/v1') // We set the endpoint, change this if your using another endpoint URL.
  .setProject('61b73ff0ba705'); // Here replace 'ProjectID' with the project ID that you created in your appwrite installation.

export { appwrite }; // Finally export the appwrite object to be used in projects.
