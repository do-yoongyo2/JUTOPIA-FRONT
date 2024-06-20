import Link from "next/link";
import { CloseSvg } from "./Svgs";
import React, { useEffect, useRef, useState } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";
import { signup, login } from "~/apis/user";

export type LoginScreenState = "HIDDEN" | "LOGIN" | "SIGNUP";

export const useLoginScreen = () => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const queryState: LoginScreenState = (() => {
    if (loggedIn) return "HIDDEN";
    if ("login" in router.query) return "LOGIN";
    if ("sign-up" in router.query) return "SIGNUP";
    return "HIDDEN";
  })();
  const [loginScreenState, setLoginScreenState] = useState(queryState);
  useEffect(() => setLoginScreenState(queryState), [queryState]);
  return { loginScreenState, setLoginScreenState };
};

export const LoginScreen = ({
  loginScreenState,
  setLoginScreenState,
}: {
  loginScreenState: LoginScreenState;
  setLoginScreenState: React.Dispatch<React.SetStateAction<LoginScreenState>>;
}) => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logIn = useBoundStore((x) => x.logIn);
  const setEmail = useBoundStore((x) => x.setEmail);
  const setName = useBoundStore((x) => x.setName);

  const nameInputRef = useRef<null | HTMLInputElement>(null);
  const emailInputRef = useRef<null | HTMLInputElement>(null);
  const passwordInputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (loginScreenState !== "HIDDEN" && loggedIn) {
      setLoginScreenState("HIDDEN");
    }
  }, [loginScreenState, loggedIn, setLoginScreenState]);

  const handleSignUp = async () => {
    try {
      const response = await signup(
        nameInputRef.current?.value.trim() || "",
        emailInputRef.current?.value.trim() || "",
        passwordInputRef.current?.value.trim() || "",
      );

      const username = response.username; // 서버에서 반환된 데이터에서 이름 가져오기
      const email = response.email;

      setEmail(email);
      setName(username);
      logIn(true);

      router.push("/home").catch((error) => {
        console.error("Unhandled error signup:", error);
      });
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await login(
        emailInputRef.current?.value.trim() || "",
        passwordInputRef.current?.value.trim() || "",
      );
      const token = response.token;
      localStorage.setItem("token", token);

      const username = response.username;
      const email = response.email;

      setEmail(email);
      setName(username);
      logIn(true);

      router.push("/home").catch((error) => {
        console.error("Unhandled error login:", error);
      });
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };
  const handleButtonClick = () => {
    (async () => {
      if (loginScreenState === "LOGIN") {
        try {
          await handleLogin();
        } catch (error) {
          console.error("Unhandled error in handleLogin:", error);
        }
      } else {
        try {
          await handleSignUp();
        } catch (error) {
          console.error("Unhandled error in handleSignUp:", error);
        }
      }
    })().catch((error) => {
      console.error("Unhandled error in handleButtonClick:", error);
    });
  };
  return (
    <article
      className={[
        "fixed inset-0 z-30 flex flex-col bg-white p-7 transition duration-300",
        loginScreenState === "HIDDEN"
          ? "pointer-events-none opacity-0"
          : "opacity-100",
      ].join(" ")}
      aria-hidden={!loginScreenState}
    >
      <header className="flex flex-row-reverse justify-between sm:flex-row">
        <button
          className="flex text-gray-400"
          onClick={() => setLoginScreenState("HIDDEN")}
        >
          <CloseSvg />
          <span className="sr-only">Close</span>
        </button>
        <button
          className="hidden rounded-2xl border-2 border-b-4 border-gray-200 px-4 py-3 text-sm font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90 sm:block"
          onClick={() =>
            setLoginScreenState((x) => (x === "LOGIN" ? "SIGNUP" : "LOGIN"))
          }
        >
          {loginScreenState === "LOGIN" ? "Sign up" : "Login"}
        </button>
      </header>
      <div className="flex grow items-center justify-center">
        <div className="flex w-full flex-col gap-5 sm:w-96">
          <h2 className="text-center text-2xl font-bold text-gray-800">
            {loginScreenState === "LOGIN" ? "Log in" : "Create your profile"}
          </h2>
          <div className="flex flex-col gap-2 text-black">
            {loginScreenState === "SIGNUP" && (
              <input
                className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                placeholder="Name (optional)"
                ref={nameInputRef}
              />
            )}
            <input
              className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
              placeholder={
                loginScreenState === "LOGIN"
                  ? "Email or username (optional)"
                  : "Email (optional)"
              }
              ref={emailInputRef}
            />
            <div className="relative flex grow">
              <input
                className="grow rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-3"
                placeholder="Password (optional)"
                type="password"
                ref={passwordInputRef}
              />
              {loginScreenState === "LOGIN" && (
                <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center pr-5">
                  <Link
                    className="font-bold uppercase text-gray-400 hover:brightness-75"
                    href="/forgot-password"
                  >
                    Forgot?
                  </Link>
                </div>
              )}
            </div>
          </div>
          <button
            className="rounded-2xl border-b-4 border-[#235390] bg-[#0046ff] py-3 font-bold uppercase text-white transition hover:bg-[#003bdf]"
            // onClick={logInAndSetUserProperties}
            // onClick={loginScreenState === "LOGIN" ? handleLogin : handleSignUp}
            onClick={handleButtonClick}
          >
            {loginScreenState === "LOGIN" ? "Log in" : "Create account"}
          </button>

          <div className="flex gap-5"></div>
          <p className="text-center text-xs leading-5 text-gray-400">
            By signing in to Jutopia, you agree to our{" "}
            <span className="font-bold">Terms</span> and{" "}
            <span className="font-bold">Privacy Policy</span>.
          </p>
          <p className="text-center text-xs leading-5 text-gray-400">
            This site is protected by 주디 and the Google{" "}
            <Link
              className="font-bold"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              className="font-bold"
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </Link>{" "}
            apply.
          </p>
          <p className="block text-center sm:hidden">
            <span className="text-sm font-bold text-gray-700">
              {loginScreenState === "LOGIN"
                ? "Don't have an account?"
                : "Have an account?"}
            </span>{" "}
            <button
              className="text-sm font-bold uppercase text-blue-400"
              onClick={() =>
                setLoginScreenState((x) => (x === "LOGIN" ? "SIGNUP" : "LOGIN"))
              }
            >
              {loginScreenState === "LOGIN" ? "sign up" : "log in"}
            </button>
          </p>
        </div>
      </div>
    </article>
  );
};
