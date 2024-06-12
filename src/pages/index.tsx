import { type NextPage } from "next";
import React from "react";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import _bgSnow from "../../public/bg-snow.svg";
import type { StaticImageData } from "next/image";

const bgSnow = _bgSnow as StaticImageData;

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <img src="mainimg.svg" style={{ maxWidth: "360px", width: "50vw" }} />
        <div>
          <p style={{ fontFamily: "TTLaundryGothicB", fontSize: "50px" }}>
            주식 첫걸음, <br />
            주토피아
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <button
              className="w-full rounded-2xl border-2 border-b-4 border-[#235390] bg-[#0046ff] px-8 py-3 font-bold uppercase text-white transition hover:bg-[#003bdf] md:min-w-[320px]"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
