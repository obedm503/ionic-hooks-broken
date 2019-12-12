import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonRouterOutlet,
  useIonViewDidEnter,
  useIonViewWillEnter,
  IonPage,
  IonContent,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Route, Link } from 'react-router-dom';

const Home = () => {
  console.log('Home render');
  useEffect(() => console.log('Other useEffect'), []);
  useIonViewWillEnter(() => console.log('Home useIonViewWillEnter'));
  useIonViewDidEnter(() => console.log('Home useIonViewDidEnter'));
  return (
    <IonPage>
      <IonContent>
        Home <Link to="/other">Other</Link>
      </IonContent>
    </IonPage>
  );
};

const Other = () => {
  console.log('Other render');
  useEffect(() => console.log('Other useEffect'), []);
  useIonViewWillEnter(() => console.log('Other useIonViewWillEnter'));
  useIonViewDidEnter(() => console.log('Other useIonViewDidEnter'));
  return (
    <IonPage>
      <IonContent>
        Other <Link to="/">Home</Link>
      </IonContent>
    </IonPage>
  );
};

const app = (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact />
        <Route path="/other" component={Other} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

render(app, document.getElementById('root'));
