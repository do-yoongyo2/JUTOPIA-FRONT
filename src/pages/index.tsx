import { type NextPage } from "next";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import React, { useEffect } from "react";
import BusinessCategories from "~/components/BusinessCategory";
import HeroHome from "~/components/HeroHome";
import { LandingPageHeader } from "~/components/LandingPageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import PageIllustration from "~/components/PageIllustration";
import { useBoundStore } from "~/hooks/useBoundStore";

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const loggedIn: boolean = useBoundStore((x) => x.loggedIn);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (loggedIn) {
      router.push("/home").catch((err) => {
        console.log("failed at index page:", err);
      });
    }
  }, [loggedIn]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-ttlaundrygothicb text-black">
      <LandingPageHeader />
      <PageIllustration />
      <HeroHome />

      <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
        <button
          className="w-full rounded-2xl border-2 border-b-4 border-[#235390] bg-[#0046ff] px-8 py-3 font-bold uppercase text-white transition hover:bg-[#003bdf] md:min-w-[320px]"
          onClick={() => setLoginScreenState("LOGIN")}
        >
          Get Started
        </button>
      </div>
      <BusinessCategories />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
