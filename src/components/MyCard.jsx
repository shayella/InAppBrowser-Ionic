import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { Browser } from '@capacitor/browser';

export const CardExamples = () => {
    
    const openUrlInApp =(url)=>{
        window.open(url, '_system', 'location=yes');
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          <a href="https://drive.google.com/file/d/13K1i200wckMo8fZk7CO2wtaPZJsnIFqD/view?usp=sharing" target="_system">Open Link</a>
      </IonCardContent>

        </IonCard>

         

          <a href="http://bit.ly/savee-instore-tutorial-video" target="_system">

          <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          <a href="https://drive.google.com/file/d/13K1i200wckMo8fZk7CO2wtaPZJsnIFqD/view?usp=sharing" target="_system">Open Link</a>
      </IonCardContent>

        </IonCard>

          </a>

    
          <IonButton onClick={
  async() => await Browser.open({
    url: 'http://bit.ly/savee-instore-tutorial-video',toolbarColor:"#42aec4"
  })
}>Open Browser</IonButton>

<IonButton onClick={
  async() => await Browser.open({
    url: 'http://bit.ly/savee-timeframe',toolbarColor:"#42aec4"
  })
}>Open Browser</IonButton>
      </IonContent>
    </IonPage>
  );
};
