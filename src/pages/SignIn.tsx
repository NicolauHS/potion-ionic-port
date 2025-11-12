import { IonContent, IonPage } from "@ionic/react";
import { Logo, GlassForm, Button, GoogleIcon } from "../components";

const SignIn: React.FC = () => {
  const handleClick = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_API}/start-adventure.php`
      );
      const data = await res.json();
      alert(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sign-in_background.png')" }}
        >
          {/* Logo - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Logo position="right" />
          </div>

          {/* Main Content - Mobile First - Centered */}
          <div className="flex flex-col min-h-screen justify-center items-center px-4 sm:px-6 lg:justify-center lg:items-end lg:px-[8%]">
            <GlassForm classes="p-6 w-full max-w-[400px] sm:max-w-[500px] text-[#FAFAFA]">
              <h1 className="font-bold !text-2xl sm:!text-lg lg:!text-2xl pb-2 sm:pb-4 leading-tight">
                Vamos começar uma nova história?
              </h1>
              <h2 className="!text-base sm:!text-sm lg:!text-lg font-light pb-3 sm:pb-6 leading-relaxed">
                Atravesse novos mundos, desvende mistérios antigos e torne-se
                mais forte a cada desafio. <br className="hidden sm:block" />
                Sua jornada começa agora!
              </h2>
              <Button
                onClick={handleClick}
                classes="w-full login-button-bg py-3"
              >
                <GoogleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <strong className="pl-2 !text-xs sm:!text-sm lg:!text-base">
                  Começar aventura
                </strong>
              </Button>
            </GlassForm>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
