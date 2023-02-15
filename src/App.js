import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import {useState } from 'react';


function App() {
  const [name, setName] = useState();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">
              Name:
            </IonLabel>
            <IonInput placeholder="Your name" value={name} onIonChange={(event) => setName(event.detail.value)}/>
          </IonItem>

       
          <IonItem>
            <IonLabel position="stacked">
              Date of Birth:
            </IonLabel>
            <IonInput placeholder="Birthdate" value={name} onIonChange={(event) => setName(event.detail.value)}/>
          </IonItem>
        </IonList>

          <p>
            You entered: <b>{name}</b>
          </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
