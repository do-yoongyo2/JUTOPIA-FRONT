import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import {
  EditPencilSvg,
  ProfileTimeJoinedSvg,
  MoreOptionsSvg,
  CheckSvg,
  LogoutIconSvg,
} from "~/components/Svgs";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import ChallengeGrid from "~/components/ChallengeGrid";
import TopBar from "~/components/TopBar";

const MyPage: NextPage = () => {
  const [updateState, setUpdateState] = useState<"update" | "view">("view");
  const name = useBoundStore((x) => x.name);
  const setName = useBoundStore((x) => x.setName);
  const [localName, setLocalName] = useState(name);

  const email = useBoundStore((x) => x.email);
  const [localEmail, setLocalEmail] = useState(email);
  const [isHydrated, setIsHydrated] = useState(false);
  const loggedIn = useBoundStore((x) => x.loggedIn);

  useEffect(() => {
    console.log("User logged in", loggedIn);
    setIsHydrated(true);

    if (!loggedIn) {
      // router.push("/"); // 로그인 상태가 아니면 홈페이지로 이동
      console.log(name + " " + loggedIn);
      console.log("로그인안됨");
    } else {
      // 로그인 상태인 경우 서버에서 데이터 가져와서 설정
      setLocalName(name); // 초기 localName 설정
    }
  }, [loggedIn]);

  if (!isHydrated) {
    // 초기 로딩 상태 표시 또는 빈 상태로 렌더링
    return null;
  }
  const updateProfile = () => {
    setUpdateState("view");
    setName(localName);
  };

  return (
    <div className="font-ttlaundrygothicb">
      <MyPageTopBar
        updateState={updateState}
        setUpdateState={setUpdateState}
        updateProfile={updateProfile}
      />
      <LeftBar selectedTab="마이페이지" />
      <div className="flex justify-center gap-3 pt-14 md:ml-[8rem] lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-4xl flex-col gap-5 p-5">
          <MypageTopSection
            updateState={updateState}
            setUpdateState={setUpdateState}
            name={name}
            localName={localName}
            setLocalName={setLocalName}
            email={email}
            localEmail={localEmail}
            setLocalEmail={setLocalEmail}
            updateProfile={updateProfile}
          />
          <MypageRewardSection />
        </div>
      </div>
      <div className="pt-[90px]"></div>
      <BottomBar selectedTab="마이페이지" />
    </div>
  );
};

export default MyPage;

type MyPageTopBarProps = {
  updateState: "update" | "view";
  setUpdateState: (state: "update" | "view") => void;
  updateProfile: () => void;
};

type MypageTopSectionProps = {
  updateState: "update" | "view";
  name: string;
  localName: string;
  setLocalName: (state: string) => void;
  email: string;
  localEmail: string;
  setLocalEmail: (state: string) => void;
  setUpdateState: (state: "update" | "view") => void;
  updateProfile: () => void;
};

const MyPageTopBar = (props: MyPageTopBarProps) => {
  type MenuState = "HIDDEN" | "MORE";
  const [menu, setMenu] = useState<MenuState>("HIDDEN");

  const logOut = useBoundStore((x) => x.logOut);
  var router = useRouter();

  const handleLogOut = () => {
    void logOut();
    void router.push("/");
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b-2 border-gray-200 bg-white px-5 text-xl font-bold text-gray-300 md:hidden">
      <MoreOptionsSvg
        onClick={() => setMenu((x) => (x === "MORE" ? "HIDDEN" : "MORE"))}
        role="button"
        tabIndex={0}
        aria-label="Toggle more menu"
        fillColor="darkgray"
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
                    <span style={{ fontSize: "16px" }}>로그아웃</span>
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
      <span className="text-gray-400">😎마이 페이지😎</span>
      {props.updateState === "view" ? (
        <div
          onClick={() => props.setUpdateState("update")}
          style={{ cursor: "pointer" }}
        >
          <EditPencilSvg iconColor="darkgray" />
        </div>
      ) : (
        <div onClick={props.updateProfile} style={{ cursor: "pointer" }}>
          <CheckSvg />
        </div>
      )}
    </div>
  );
};
const MypageTopSection = (props: MypageTopSectionProps) => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);

  const dd = useBoundStore((state) => state.joinedAt);
  const joinedAt = dayjs(dd).format("MMMM YYYY");

  useEffect(() => {
    console.log("login ", loggedIn);
    if (!loggedIn) {
      void router.push("/");
    }
  }, [loggedIn, router]);

  return (
    <section className="flex flex-row-reverse items-center justify-center border-b-2 border-gray-200 pb-8 md:flex-row md:gap-8">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-gray-400 text-3xl font-bold text-gray-400 md:h-44 md:w-44 md:text-7xl"
        style={{ minWidth: "80px" }}
      >
        {props.email.charAt(0).toUpperCase()}
      </div>
      <div className="flex grow flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div style={{ maxWidth: "16rem" }}>
            {props.updateState === "view" ? (
              <div className="flex flex-col items-start">
                {" "}
                <h1 className="text-4xl font-bold">{props.name}</h1>{" "}
                <div className="mt-1 text-sm text-gray-500">{props.email}</div>{" "}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  className="w-full border-b border-blue-500 text-2xl font-bold focus:border-blue-500 focus:outline-none"
                  value={props.localName}
                  onChange={(e) => props.setLocalName(e.target.value)}
                />
                <br />
                <p className="text-sm text-gray-400">{props.localEmail}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <ProfileTimeJoinedSvg />
            <span className="text-gray-500">{`${joinedAt}에 가입함`}</span>
          </div>
        </div>
      </div>
      {props.updateState === "view" ? (
        <div
          className="hidden items-center gap-2 self-start rounded-2xl border-b-4 border-blue-500 bg-blue-400 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 md:flex"
          onClick={() => props.setUpdateState("update")}
          style={{ cursor: "pointer" }}
        >
          <EditPencilSvg iconColor="white" />
          Edit profile
        </div>
      ) : (
        <div
          className="hidden items-center gap-2 self-start rounded-2xl border-b-4 border-blue-500 bg-blue-400 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 md:flex"
          onClick={props.updateProfile}
          style={{ cursor: "pointer" }}
        >
          Save changes
        </div>
      )}
    </section>
  );
};

const MypageRewardSection = () => {
  return (
    <div className="flex max-w-[65rem] grow flex-col">
      <br />
      <h1 className="border-b-2 pb-4 text-center text-4xl font-bold">
        달성한 도전 과제
      </h1>
      <br />
      <div className="pt-[40px]"></div>
      <ChallengeGrid showOnlyCompleted />
    </div>
  );
};
