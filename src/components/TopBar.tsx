import React, { useState } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useRouter } from "next/router";
import { MoreOptionsSvg, LogoutIconSvg } from "./Svgs";

interface TopBarProps {
  menuName: string;
  additionalContent?: React.ReactNode;
  onMenuItemClick?: () => void;
}

const TopBar = (props: TopBarProps) => {
  type MenuState = "HIDDEN" | "MORE";
  const [menu, setMenu] = useState<MenuState>("HIDDEN");

  const logOut = useBoundStore((x) => x.logOut);
  const router = useRouter();

  const handleLogOut = () => {
    void logOut();
    void router.push("/");
  };

  return (
    <div className="md:hidden">
      {" "}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b-2 border-gray-200 bg-white px-5 text-xl font-bold text-gray-300">
        <MoreOptionsSvg
          onClick={() => setMenu((x) => (x === "MORE" ? "HIDDEN" : "MORE"))}
          role="button"
          tabIndex={0}
          aria-label="Toggle more menu"
          fillColor="darkgray"
        />
        <span className="text-gray-700">{props.menuName}</span>
        <div className="invisible">
          <MoreOptionsSvg />
        </div>
        {menu === "MORE" && (
          <div className="absolute left-0 right-0 top-full z-40 bg-white opacity-100 transition duration-300">
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
                <span style={{ fontSize: "16px" }}>로그아웃</span>
              </div>
              {props.additionalContent}
            </div>
          </div>
        )}
      </div>
      {menu === "MORE" && (
        <div
          className="fixed left-0 top-16 z-30 h-screen w-screen bg-black opacity-30"
          onClick={() => setMenu("HIDDEN")}
          aria-label="Hide menu"
          role="button"
        />
      )}
      <div className="h-16"></div>{" "}
      {/* To prevent content from being hidden behind the TopBar */}
    </div>
  );
};

export default TopBar;
