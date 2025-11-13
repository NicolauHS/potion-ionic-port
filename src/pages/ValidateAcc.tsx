import { IonContent, IonPage } from "@ionic/react";
import { ArrowLeft } from "lucide-react";
import { Logo, GlassForm, Button } from "../components";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

interface UserPayload {
  username?: string;
  password?: string;
  error?: string;
}

interface CheckSessionResponse {
  username: string;
  password: string;
  validated: boolean;
  token: string;
  expires_at: string;
}

export default function ValidateAcc() {
  const history = useHistory();

  // Commented out automatic redirect logic for now
  // useEffect(() => {
  //   async function checkUserSession() {
  //     const stored = localStorage.getItem("sessionData");

  //     if (!stored) {
  //       history.push("/sign-in");
  //       return;
  //     }

  //     const sessionData = JSON.parse(stored);

  //     const response = await fetch(
  //       `${import.meta.env.VITE_SERVER_API}/check-session.php`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(sessionData),
  //       }
  //     );

  //     if (response.status === 401) {
  //       history.push("/sign-in");
  //       return;
  //     }

  //     const reqData: CheckSessionResponse = await response.json();

  //     if (reqData.validated) {
  //       history.push("/");
  //       return;
  //     }
  //   }
  //   checkUserSession();
  // }, [history]);

  const handleReturn = () => {
    history.push("/login");
  };

  const handleValidate = async () => {
    const stored = localStorage.getItem("sessionData");

    if (!stored) {
      history.push("/sign-in");
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/validate-user.php`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(JSON.parse(stored)),
      }
    );

    if (response.ok) {
      history.push("/");
      return;
    }

    const resData: UserPayload = await response.json();
    console.error(resData.error);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/validade-acc-background.png')",
          }}
        >
          <Logo position="right" />

          <div className="flex flex-1 h-full justify-center items-center px-2 lg:flex-row lg:justify-end lg:px-[20%]">
            <GlassForm classes="p-6 max-w-[550px] text-[#FAFAFA]">
              <Button
                classes="pb-12 text-[16px] hover:text-[#FF3B30]"
                onClick={handleReturn}
              >
                <ArrowLeft size={18} />
                <strong>Voltar</strong>
              </Button>

              <h1 className="font-bold !text-2xl pb-5 text-[#FAFAFA] md:flex items-center justify-left">
                <span className="">Opa, sua conta não está verificada!</span>
              </h1>

              <h2 className="!text-lg font-light pb-5">
                Você precisa validar a sua conta para acessar a plataforma,
                verifique seu e-mail para continuar.{" "}
              </h2>
              <p className="text-[16px] font-light pb-5">
                Não recebeu?{" "}
                <a
                  className="underline hover:cursor-pointer hover:text-[#232ED1]"
                  onClick={handleValidate}
                >
                  Clique aqui para reeenviar.
                </a>
              </p>
            </GlassForm>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
