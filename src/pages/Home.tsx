import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Welcome to PoTION!</h1>
        <IonButton onClick={() => history.push("/sign-in")}>
          Go to Sign In
        </IonButton>
        <IonButton onClick={() => history.push("/login")}>
          Go to Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
