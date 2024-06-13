import type { ComponentProps } from "react";
import React, { useState } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";
import { FireSvg, GemSvg, MoreOptionsSvg, LogoutIconSvg } from "./Svgs";

const EmptyFireTopBarSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" {...props}>
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9697 2.91035C13.2187 1.96348 11.7813 1.96348 11.0303 2.91035L7.26148 7.66176L4.83362 6.36218C4.61346 6.24433 4.1221 6.09629 3.88966 6.05712C2.72329 5.86056 2.04098 6.78497 2.04447 8.03807L2.06814 16.5554C2.02313 16.9355 2 17.322 2 17.7137C2 23.2979 6.70101 27.8248 12.5 27.8248C18.299 27.8248 23 23.2979 23 17.7137C23 15.3518 22.1591 13.1791 20.7498 11.4581L13.9697 2.91035ZM11.7198 13.1888C12.0889 12.6861 12.8399 12.6861 13.209 13.1888L15.7324 16.6249C16.5171 17.4048 17 18.4679 17 19.6396C17 22.0329 14.9853 23.973 12.5 23.973C10.0147 23.973 8 22.0329 8 19.6396C8 18.6017 8.37893 17.649 9.01085 16.9029C9.0252 16.8668 9.04457 16.8315 9.06935 16.7978L11.7198 13.1888Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

const EmptyGemTopBarSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="24" height="30" viewBox="0 0 24 30" fill="none" {...props}>
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.63705 7.31556C2.62104 7.92872 2 9.02888 2 10.2156V19.8818C2 21.0685 2.62104 22.1687 3.63705 22.7819L10.1117 26.6893C11.1881 27.3389 12.5356 27.3389 13.612 26.6894L20.087 22.7818C21.1031 22.1687 21.7241 21.0685 21.7241 19.8818V10.2156C21.7241 9.0289 21.1031 7.92872 20.087 7.31557L13.612 3.40806C12.5356 2.7585 11.1881 2.75851 10.1117 3.40809L3.63705 7.31556ZM11.8902 6.37281C11.8902 5.52831 10.9645 5.01055 10.2449 5.45256L4.91163 8.72852C4.24944 9.13527 4.22068 10.0873 4.85711 10.5332L7.24315 12.2053C7.59354 12.4508 8.05585 12.4663 8.42194 12.2449L11.3692 10.462C11.6926 10.2664 11.8902 9.91591 11.8902 9.53794V6.37281Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

type MenuState = "HIDDEN" | "MORE";

export const TutorialTopBar = ({
  backgroundColor = "bg-[#0046ff]",
  borderColor = "border-[#235390]",
}: {
  backgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}) => {
  const [menu, setMenu] = useState<MenuState>("HIDDEN");
  const streak = useBoundStore((x) => x.streak);
  const lingots = useBoundStore((x) => x.lingots);

  const logOut = useBoundStore((x) => x.logOut);
  const router = useRouter();

  const handleLogOut = () => {
    logOut();
    router.push("/");
  };

  return (
    <header className="fixed z-20 h-[58px] w-full">
      <div
        className={`relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 sm:hidden ${borderColor} ${backgroundColor}`}
      >
        <div className="flex items-center gap-2 font-bold text-white">
          {streak > 0 ? <FireSvg /> : <EmptyFireTopBarSvg />}{" "}
          <span className={streak > 0 ? "text-white" : "text-black opacity-20"}>
            {streak}
          </span>
        </div>
        <div className="flex items-center gap-2 font-bold">
          {lingots > 0 ? <GemSvg /> : <EmptyGemTopBarSvg />}{" "}
          <span
            className={lingots > 0 ? "text-white" : "text-black opacity-20"}
          >
            {lingots}
          </span>
        </div>
        <MoreOptionsSvg
          onClick={() => setMenu((x) => (x === "MORE" ? "HIDDEN" : "MORE"))}
          role="button"
          tabIndex={0}
          aria-label="Toggle more menu"
          fillColor="white"
        />

        <div
          className={[
            "absolute left-0 right-0 top-full bg-white transition duration-300",
            menu === "HIDDEN" ? "opacity-0" : "opacity-100",
          ].join(" ")}
          aria-hidden={menu === "HIDDEN"}
        >
          {((): null | JSX.Element => {
            switch (menu) {
              case "MORE":
                return (
                  <div className="flex grow flex-col">
                    <div
                      className="flex items-center gap-2 p-2 font-bold text-gray-700"
                      style={{
                        fontFamily: "TTLaundryGothicB",
                        cursor: "pointer",
                        borderTop: "1px solid gray",
                        borderBottom: "1px solid gray",
                      }}
                      onClick={handleLogOut}
                    >
                      <LogoutIconSvg className="h-10 w-10" />
                      로그아웃
                    </div>
                  </div>
                );
              case "HIDDEN":
                return null;
            }
          })()}
          <div
            className={[
              "absolute left-0 top-full h-screen w-screen bg-black opacity-30",
              menu === "HIDDEN" ? "pointer-events-none" : "",
            ].join(" ")}
            onClick={() => setMenu("HIDDEN")}
            aria-label="Hide menu"
            role="button"
          />
        </div>
      </div>
    </header>
  );
};
