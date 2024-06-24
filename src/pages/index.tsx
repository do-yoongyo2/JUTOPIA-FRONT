import { type NextPage } from "next";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import React, { useEffect } from "react";
import BusinessCategories from "~/components/BusinessCategory";
import HeroHome from "~/components/HeroHome";
import { LandingPageHeader } from "~/components/LandingPageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import PageIllustration from "~/components/PageIllustration";
import { useBoundStore } from "~/hooks/useBoundStore";
import { motion } from "framer-motion"; // Import Framer Motion

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
  }, [loggedIn, router]);

  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-ttlaundrygothicb text-black">
      <LandingPageHeader />
      <PageIllustration />
      <HeroHome />

      <motion.div
        className="mx-auto mt-4 flex w-fit flex-col items-center gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="w-full transform rounded-2xl border-2 border-b-4 border-[#235390] bg-gradient-to-r from-[#0046ff] to-[#0046f0] px-8 py-3 font-bold uppercase text-white shadow-lg transition-transform md:min-w-[320px]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setLoginScreenState("LOGIN")}
        >
          Get Started
        </motion.button>
      </motion.div>

      <BusinessCategories />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
