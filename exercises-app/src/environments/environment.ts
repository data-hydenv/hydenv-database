// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDsfuR7dGyYFuXCzq1TFChCP-K6iqjTimA",
    authDomain: "data-course-261609.firebaseapp.com",
    databaseURL: "https://data-course-261609.firebaseio.com",
    projectId: "data-course-261609",
    storageBucket: "data-course-261609.appspot.com",
    messagingSenderId: "26810996853",
    appId: "1:26810996853:web:68eaf158951b103202003c",
    measurementId: "G-RLF2LDRQSR"
  },
  version: require('../../package.json').version
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
