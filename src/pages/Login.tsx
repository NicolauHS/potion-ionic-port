import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Logo, GlassForm, Input, Button, GoogleIcon } from "../components";
import React, { useState, useEffect } from "react";

interface userPayload {
  username: string;
  password: string;
}

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState<userPayload>({
    username: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (errMessage) {
      setIsExiting(false);
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 4500); // Start exit animation after 4.5 seconds

      const clearTimer = setTimeout(() => {
        setErrMessage(null);
      }, 5000); // Clear message after 5 seconds

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [errMessage]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (
    e?: React.FormEvent<HTMLFormElement>,
    creds?: userPayload
  ) => {
    e?.preventDefault();

    const loginData = creds ?? formData;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/login.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setErrMessage(json.error);
        return;
      }

      localStorage.setItem("sessionData", JSON.stringify(json));
      history.push("/");
    } catch (error) {
      console.log(error);
      setErrMessage("Alguma coisa deu errado ;-;");
    }
  };

  const handleLoginWithNewUser = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_API}/start-adventure.php`
      );
      const data = await res.json();
      setFormData({
        username: data.username,
        password: data.password,
      });
      await handleLogin(undefined, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Toast notification at top of screen */}
        {errMessage && (
          <div
            className={`fixed left-4 right-4 z-50 transition-all duration-500 ease-in-out ${
              isExiting ? "-top-24 opacity-0" : "top-4 opacity-100"
            }`}
            style={{
              animation: isExiting ? "none" : "slideInFromTop 0.5s ease-out",
            }}
          >
            <div className="max-w-md mx-auto bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg text-center font-semibold text-lg">
              {errMessage}
            </div>
          </div>
        )}

        <style>{`
          @keyframes slideInFromTop {
            from {
              transform: translateY(-100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>

        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/login_background.png')" }}
        >
          <Logo position="left"></Logo>

          <div className="flex flex-1 h-full justify-center items-center px-2 lg:flex-row lg:justify-end lg:px-[10%]">
            <GlassForm classes="p-6 max-w-[500px] text-[#FAFAFA]">
              <h1 className="font-bold !text-[24px]">Resuma sua aventura!</h1>
              <h2 className="!text-[22px] !font-normal pb-10">
                Insira suas informações de login e continue de onde parou!
              </h2>

              <form onSubmit={handleLogin}>
                <Input
                  name="username"
                  label="E-mail de explorador"
                  placeholder="Digite seu e-mail"
                  value={formData.username}
                  onChange={handleFormChange}
                />

                <Input
                  name="password"
                  type="password"
                  label="Chave secreta"
                  placeholder="Digite sua senha"
                  disableP={true}
                  value={formData.password}
                  onChange={handleFormChange}
                />
                <div className="!text-base text-right pt-2 pb-10">
                  <a className="underline hover:text-[#232ED1]" href="">
                    Perdi minha chave secreta
                  </a>
                </div>

                <Button
                  type="submit"
                  classes="w-full rounded-lg !text-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <strong>Entrar na aventura</strong>
                </Button>

                <p className="text-center py-3">ou</p>

                <Button
                  onClick={handleLoginWithNewUser}
                  classes="w-full rounded-lg hover:bg-[#232ED1] !text-lg"
                  style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                  <div className="shrink-0 w-5 h-5 mr-2">
                    <GoogleIcon style={{ width: "100%", height: "100%" }} />
                  </div>
                  <strong>Entrar com magia do google</strong>
                </Button>
              </form>
            </GlassForm>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
