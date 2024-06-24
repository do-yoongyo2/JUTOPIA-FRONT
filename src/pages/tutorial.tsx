import { type NextPage } from "next";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  ActiveBookSvg,
  LockedBookSvg,
  CheckmarkSvg,
  LockedDumbbellSvg,
  GoldenBookSvg,
  GoldenDumbbellSvg,
  GoldenTreasureSvg,
  LessonCompletionSvg0,
  LockSvg,
  StarSvg,
  LockedTreasureSvg,
  UpArrowSvg,
  ActiveTreasureSvg,
  ActiveDumbbellSvg,
} from "~/components/Svgs";
import { TutorialTopBar } from "~/components/TutorialTopBar";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { LoginScreen, useLoginScreen } from "~/components/LoginScreen";
import { useBoundStore } from "~/hooks/useBoundStore";
import type { Tile, TileType, Unit } from "~/utils/units";
import { units } from "~/utils/units";
import {
  readUserCurrentLearning,
  createUserCurrentLearning,
} from "~/apis/userCurrentLearning";

type TileStatus = "LOCKED" | "ACTIVE" | "COMPLETE";

const tileStatus = (tile: Tile, lessonsCompleted: number): TileStatus => {
  const lessonsPerTile = 1;
  const tilesCompleted = Math.floor(lessonsCompleted / lessonsPerTile);
  const tiles = units.flatMap((unit) => unit.tiles);
  const tileIndex = tiles.findIndex((t) => t === tile);

  if (tileIndex < tilesCompleted) {
    return "COMPLETE";
  }
  if (tileIndex > tilesCompleted) {
    return "LOCKED";
  }
  return "ACTIVE";
};

const TileIcon = ({
  tileType,
  status,
}: {
  tileType: TileType;
  status: TileStatus;
}): JSX.Element => {
  switch (tileType) {
    case "1.0": //첫화면
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "1.1":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "1.2":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "2.0":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "2.1":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "2.2":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "2.3":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "2.4":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "3.0":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "3.1":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "3.2":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "3.3":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "3.4":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "3.5":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      );
    case "3.6":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      );
    case "3.7":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );
    case "4.0":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      );

    case "treasure":
      return status === "COMPLETE" ? (
        <GoldenTreasureSvg />
      ) : status === "ACTIVE" ? (
        <ActiveTreasureSvg />
      ) : (
        <LockedTreasureSvg />
      );
  }
};

const tileLeftClassNames = [
  "left-0",
  "left-[-45px]",
  "left-[-70px]",
  "left-[-45px]",
  "left-0",
  "left-[45px]",
  "left-[70px]",
  "left-[45px]",
] as const;

type TileLeftClassName = (typeof tileLeftClassNames)[number];

const getTileLeftClassName = ({
  index,
  unitNumber,
  tilesLength,
}: {
  index: number;
  unitNumber: number;
  tilesLength: number;
}): TileLeftClassName => {
  if (index >= tilesLength - 1) {
    return "left-0";
  }

  const classNames =
    unitNumber % 2 === 1
      ? tileLeftClassNames
      : [...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)];

  return classNames[index % classNames.length] ?? "left-0";
};

const tileTooltipLeftOffsets = [140, 95, 70, 95, 140, 185, 210, 185] as const;

type TileTooltipLeftOffset = (typeof tileTooltipLeftOffsets)[number];

const getTileTooltipLeftOffset = ({
  index,
  unitNumber,
  tilesLength,
}: {
  index: number;
  unitNumber: number;
  tilesLength: number;
}): TileTooltipLeftOffset => {
  if (index >= tilesLength - 1) {
    return tileTooltipLeftOffsets[0];
  }

  const offsets =
    unitNumber % 2 === 1
      ? tileTooltipLeftOffsets
      : [
          ...tileTooltipLeftOffsets.slice(4),
          ...tileTooltipLeftOffsets.slice(0, 4),
        ];

  return offsets[index % offsets.length] ?? tileTooltipLeftOffsets[0];
};

const getTileColors = ({
  status,
  defaultColors,
}: {
  status: TileStatus;
  defaultColors: `border-${string} bg-${string}`;
}): `border-${string} bg-${string}` => {
  switch (status) {
    case "LOCKED":
      return "border-[#b7b7b7] bg-[#e5e5e5]";
    case "COMPLETE":
      return "border-yellow-500 bg-yellow-400";
    case "ACTIVE":
      return defaultColors;
  }
};

const TileTooltip = ({
  selectedTile,
  index,
  unitNumber,
  tilesLength,
  description,
  status,
  closeTooltip,
  tileType,
}: {
  selectedTile: number | null;
  index: number;
  unitNumber: number;
  tilesLength: number;
  description: string;
  status: TileStatus;
  closeTooltip: () => void;
  tileType: TileType;
}) => {
  const tileTooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containsTileTooltip = (event: MouseEvent) => {
      if (selectedTile !== index) return;
      const clickIsInsideTooltip = tileTooltipRef.current?.contains(
        event.target as Node,
      );
      if (clickIsInsideTooltip) return;
      closeTooltip();
    };

    window.addEventListener("click", containsTileTooltip, true);
    return () => window.removeEventListener("click", containsTileTooltip, true);
  }, [selectedTile, tileTooltipRef, closeTooltip, index]);

  const unit = units.find((unit) => unit.unitNumber === unitNumber);
  const activeBackgroundColor = unit?.backgroundColor ?? "bg-green-500";
  const activeTextColor = unit?.textColor ?? "text-green-500";

  // 타일 타입에 따른 href
  const getHrefByTileType = (type: TileType, status: TileStatus) => {
    const statusParam = `status=${status.toLowerCase()}`;
    switch (type) {
      case "1.0":
        return `/lesson?type=1.0&${statusParam}`;
      case "1.1":
        return `/lesson?type=1.1&${statusParam}`;
      case "1.2":
        return `/lesson?type=1.2&${statusParam}`;
      case "2.0":
        return `/lesson?type=2.0&${statusParam}`;
      case "2.1":
        return `/lesson?type=2.1&${statusParam}`;
      case "2.2":
        return `/lesson?type=2.2&${statusParam}`;
      case "2.3":
        return `/lesson?type=2.3&${statusParam}`;
      case "2.4":
        return `/lesson?type=2.4&${statusParam}`;
      case "3.0":
        return `/lesson?type=3.0&${statusParam}`;
      case "3.1":
        return `/lesson?type=3.1&${statusParam}`;
      case "3.2":
        return `/lesson?type=3.2&${statusParam}`;
      case "3.3":
        return `/lesson?type=3.3&${statusParam}`;
      case "3.4":
        return `/lesson?type=3.4&${statusParam}`;
      case "3.5":
        return `/lesson?type=3.5&${statusParam}`;
      case "3.6":
        return `/lesson?type=3.6&${statusParam}`;
      case "3.7":
        return `/lesson?type=3.7&${statusParam}`;
      case "4.0":
        return `/lesson?type=4.0&${statusParam}`;
      default:
        return `/lesson&${statusParam}`;
    }
  };
  return (
    <div
      className={[
        "relative h-0 w-full",
        index === selectedTile ? "" : "invisible",
      ].join(" ")}
      ref={tileTooltipRef}
    >
      <div
        className={[
          "absolute z-30 flex w-[300px] flex-col gap-4 rounded-xl p-4 font-bold transition-all duration-300",
          status === "ACTIVE"
            ? activeBackgroundColor
            : status === "LOCKED"
              ? "border-2 border-gray-200 bg-gray-100"
              : "bg-yellow-400",
          index === selectedTile ? "top-4 scale-100" : "-top-14 scale-0",
        ].join(" ")}
        style={{ left: "calc(50% - 150px)" }}
      >
        <div
          className={[
            "absolute left-[140px] top-[-8px] h-4 w-4 rotate-45",
            status === "ACTIVE"
              ? activeBackgroundColor
              : status === "LOCKED"
                ? "border-l-2 border-t-2 border-gray-200 bg-gray-100"
                : "bg-yellow-400",
          ].join(" ")}
          style={{
            left: getTileTooltipLeftOffset({ index, unitNumber, tilesLength }),
          }}
        ></div>
        <div
          className={[
            "text-lg",
            status === "ACTIVE"
              ? "text-white"
              : status === "LOCKED"
                ? "text-gray-400"
                : "text-yellow-600",
          ].join(" ")}
        >
          {description}
        </div>
        {status === "ACTIVE" ? (
          <Link
            href={getHrefByTileType(tileType, status)}
            className={[
              "flex w-full items-center justify-center rounded-xl border-b-4 border-gray-200 bg-white p-3 uppercase",
              activeTextColor,
            ].join(" ")}
          >
            Start
          </Link>
        ) : status === "LOCKED" ? (
          <button
            className="w-full rounded-xl bg-gray-200 p-3 uppercase text-gray-400"
            disabled
          >
            Locked
          </button>
        ) : (
          <Link
            href={getHrefByTileType(tileType, status)}
            className="flex w-full items-center justify-center rounded-xl border-b-4 border-yellow-200 bg-white p-3 uppercase text-yellow-400"
          >
            Practice
          </Link>
        )}
      </div>
    </div>
  );
};

const UnitSection = ({ unit }: { unit: Unit }): JSX.Element => {
  const [selectedTile, setSelectedTile] = useState<null | number>(null);
  // const [currentLearning, setCurrentLearning] = useState<number>(0); //최종

  useEffect(() => {
    const unselectTile = () => setSelectedTile(null);
    window.addEventListener("scroll", unselectTile);
    return () => window.removeEventListener("scroll", unselectTile);
  }, []);

  const closeTooltip = useCallback(() => setSelectedTile(null), []);

  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);
  const setLessonsCompleted = useBoundStore((x) => x.setLessonsCompleted);

  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted,
  );
  const increaseLingots = useBoundStore((x) => x.increaseLingots);
  const email = useBoundStore((x) => x.email);

  useEffect(() => {
    async function fetchCurrentLearning() {
      try {
        console.log("Fetching current learning for email:", email);
        let response = await readUserCurrentLearning(email);
        if (!response || !response.userCurrentLearning) {
          console.log("No current learning data, creating new...");
          await createUserCurrentLearning(email);
          response = await readUserCurrentLearning(email);
        }
        const current = response.userCurrentLearning;
        // setCurrentLearning(current);
        setLessonsCompleted(current);
        console.log("Fetched data:", current);
      } catch (error) {
        console.error("Failed to fetch or create current learning", error);
      }
    }

    fetchCurrentLearning().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [setLessonsCompleted, email]);
  return (
    <>
      <UnitHeader
        unitNumber={unit.unitNumber}
        description={unit.description}
        backgroundColor={unit.backgroundColor}
        borderColor={unit.borderColor}
      />
      <div className="relative mb-8 mt-[67px] flex max-w-[65rem] flex-col items-center gap-4">
        {unit.tiles.map((tile, i): JSX.Element => {
          console.log(lessonsCompleted);
          const status = tileStatus(tile, lessonsCompleted);
          return (
            <Fragment key={i}>
              {(() => {
                switch (tile.type) {
                  case "1.0":
                  case "1.1":
                  case "1.2":
                  case "2.0":
                  case "2.1":
                  case "2.2":
                  case "2.3":
                  case "2.4":
                  case "3.0":
                  case "3.1":
                  case "3.2":
                  case "3.3":
                  case "3.4":
                  case "3.5":
                  case "3.6":
                  case "3.7":
                  case "4.0":
                    return (
                      <div
                        className={[
                          "relative -mb-4 h-[93px] w-[98px]",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.tiles.length,
                          }),
                        ].join(" ")}
                      >
                        {selectedTile !== i && status === "ACTIVE" ? (
                          <HoverLabel text="Start" textColor={unit.textColor} />
                        ) : null}
                        <LessonCompletionSvg
                          lessonsCompleted={1}
                          status={status}
                        />
                        <button
                          className={[
                            "absolute m-3 rounded-full border-b-8 p-4",
                            getTileColors({
                              status,
                              defaultColors: `${unit.borderColor} ${unit.backgroundColor}`,
                            }),
                          ].join(" ")}
                          onClick={() => {
                            setSelectedTile(i);
                          }}
                        >
                          <TileIcon tileType={tile.type} status={status} />
                          <span className="sr-only">Show lesson</span>
                        </button>
                      </div>
                    );
                  case "treasure":
                    return (
                      <div
                        className={[
                          "relative -mb-4",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.tiles.length,
                          }),
                        ].join(" ")}
                        onClick={() => {
                          if (status === "ACTIVE") {
                            increaseLessonsCompleted(email, 1);
                            increaseLingots(1);
                          }
                        }}
                        role="button"
                        tabIndex={status === "ACTIVE" ? 0 : undefined}
                        aria-hidden={status !== "ACTIVE"}
                        aria-label={status === "ACTIVE" ? "Collect reward" : ""}
                      >
                        {status === "ACTIVE" && (
                          <HoverLabel text="Open" textColor="text-yellow-400" />
                        )}
                        <TileIcon tileType={tile.type} status={status} />
                      </div>
                    );
                }
              })()}
              <TileTooltip
                selectedTile={selectedTile}
                index={i}
                unitNumber={unit.unitNumber}
                tilesLength={unit.tiles.length}
                description={(() => {
                  switch (tile.type) {
                    case "1.0":
                    case "1.1":
                    case "1.2":
                    case "2.0":
                    case "2.1":
                    case "2.2":
                    case "2.3":
                    case "2.4":
                    case "3.0":
                    case "3.1":
                    case "3.2":
                    case "3.3":
                    case "3.4":
                    case "3.5":
                    case "3.6":
                    case "3.7":
                    case "4.0":
                      return tile.description;
                    case "treasure":
                      return "";
                  }
                })()}
                status={status}
                closeTooltip={closeTooltip}
                tileType={tile.type}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

const getTopBarColors = (
  scrollY: number,
): {
  backgroundColor: `bg-${string}`;
  borderColor: `border-${string}`;
} => {
  const defaultColors = {
    backgroundColor: "bg-[#0046ff]",
    borderColor: "border-[#235390]",
  } as const;

  if (scrollY < 680) {
    return defaultColors;
  } else if (scrollY < 1830) {
    return units[1] ?? defaultColors;
  } else {
    return units[2] ?? defaultColors;
  }
};

const Tutorial: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  const [isHydrated, setIsHydrated] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setIsHydrated(true);
    const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
    updateScrollY();
    document.addEventListener("scroll", updateScrollY);
    return () => document.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  const topBarColors = getTopBarColors(scrollY);

  if (!isHydrated) {
    // 초기 로딩 상태 표시 또는 빈 상태로 렌더링
    return null;
  }
  return (
    <div className="font-ttlaundrygothicb">
      <TutorialTopBar
        backgroundColor={topBarColors.backgroundColor}
        borderColor={topBarColors.borderColor}
      />
      <LeftBar selectedTab="튜토리얼" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-[65rem] grow flex-col">
          {units.map((unit) => (
            <UnitSection unit={unit} key={unit.unitNumber} />
          ))}
          <div className="sticky bottom-28 left-0 right-0 flex items-end justify-between">
            {scrollY > 100 && (
              <button
                className="absolute right-4 flex h-14 w-14 items-center justify-center self-end rounded-2xl border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50 hover:brightness-90 md:right-0"
                onClick={() => scrollTo(0, 0)}
              >
                <span className="sr-only">Jump to top</span>
                <UpArrowSvg />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="튜토리얼" />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </div>
  );
};

export default Tutorial;

const LessonCompletionSvg = ({
  lessonsCompleted,
  status,
  style = {},
}: {
  lessonsCompleted: number;
  status: TileStatus;
  style?: React.HTMLAttributes<SVGElement>["style"];
}) => {
  if (status !== "ACTIVE") {
    return null;
  }
  switch (lessonsCompleted) {
    case 1:
      return <LessonCompletionSvg0 style={style} />;

    default:
      return null;
  }
};

const HoverLabel = ({
  text,
  textColor,
}: {
  text: string;
  textColor: `text-${string}`;
}) => {
  const hoverElement = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(72);

  useEffect(() => {
    setWidth(hoverElement.current?.clientWidth ?? width);
  }, [hoverElement.current?.clientWidth, width]);

  return (
    <div
      className={`absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-bold uppercase ${textColor}`}
      style={{
        top: "-25%",
        left: `calc(50% - ${width / 2}px)`,
      }}
      ref={hoverElement}
    >
      {text}
      <div
        className="absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white"
        style={{ left: "calc(50% - 8px)", bottom: "-8px" }}
      />
    </div>
  );
};

const UnitHeader = ({
  unitNumber,
  description,
  backgroundColor,
}: {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  borderColor: `border-${string}`;
}) => {
  return (
    <article
      className={[
        "max-w-[65rem] text-white sm:rounded-xl",
        backgroundColor,
      ].join(" ")}
    >
      <header className="flex items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Unit {unitNumber}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </header>
    </article>
  );
};
