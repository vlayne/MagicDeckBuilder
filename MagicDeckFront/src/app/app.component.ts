import { Component } from '@angular/core';
// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';


// // Configurations de fireBase

// const settings = {timestampsInSnapshots: true};
// const config = {
//   apiKey: 'AIzaSyBXXbEpDRI-azZQ_cEJSPE-AbMemt4cHPE',
//   authDomain: 'projet-aries.firebaseapp.com',
//   databaseURL: 'https://projet-aries.firebaseio.com',
//   projectId: 'projet-aries',
//   storageBucket: 'projet-aries.appspot.com',
//   messagingSenderId: '55832924299'
// };
// firebase.initializeApp(config);
// firebase.firestore().settings(settings);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MagicDeckBuilder';
}
