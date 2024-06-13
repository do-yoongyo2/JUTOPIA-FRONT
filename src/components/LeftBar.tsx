import Link from "next/link";
import React, { useState } from "react";
import type { Tab } from "./BottomBar";
import { useBottomBarItems } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";
import { useRouter } from "next/router";
import { useBoundStore } from "~/hooks/useBoundStore";

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logOut = useBoundStore((x) => x.logOut);
  const router = useRouter();

  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const bottomBarItems = useBottomBarItems();

  const handleLogOut = () => {
    void logOut();
    void router.push("/");
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/home"
          className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#0046ff] lg:block"
          style={{ fontFamily: "TTLaundryGothicB" }}
        >
          주토피아
        </Link>
        <ul className="flex flex-1 flex-col items-stretch justify-between gap-3">
          <div>
            {bottomBarItems.map((item) => (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1 text-sm font-bold uppercase text-blue-400"
                  >
                    {item.icon}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-400 hover:bg-gray-100"
                  >
                    {item.icon}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </div>
          <div>
            {loggedIn && (
              <button
                className="px-5 py-2 text-center text-gray-500 hover:text-gray-600"
                style={{ fontFamily: "TTLaundryGothicB" }}
                onClick={handleLogOut}
              >
                로그아웃
              </button>
            )}
          </div>
        </ul>
      </nav>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};
