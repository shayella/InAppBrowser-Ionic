import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {CardExamples} from '../components/MyCard.jsx'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">my ionic app</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardExamples/>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
