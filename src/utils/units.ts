export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type:
        | "1.0"
        | "1.1"
        | "1.2"
        | "2.0"
        | "2.1"
        | "2.2"
        | "2.3"
        | "2.4"
        | "3.0"
        | "3.1"
        | "3.2"
        | "3.3"
        | "3.4"
        | "3.5"
        | "3.6"
        | "3.7"
        | "4.0";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "계좌 개설하기, 매수하기, 매도하기",
    backgroundColor: "bg-[#0046ff]",
    textColor: "text-[#0046ff]",
    borderColor: "border-[#0046ff]",
    tiles: [
      {
        type: "1.0",
        description: "계좌 개설하기",
      },
      {
        type: "1.1",
        description: "삼성전자 매수하기",
      },
      {
        type: "1.2",
        description: "삼성전자 매도하기",
      },
      { type: "treasure" },
    ],
  },
  {
    unitNumber: 2,
    description: "금융 기초 지식, 기업 분석, 주식 분석",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "2.0", description: "기본 경제 지식" },
      { type: "2.1", description: "주식 시장, 종류" },
      { type: "2.2", description: "주식 외 ETF, 채권" },
      { type: "2.3", description: "기업 분석" },
      { type: "2.4", description: "기업 분석 퀴즈" },
      { type: "treasure" },
    ],
  },
  {
    unitNumber: 3,
    description: "재무제표",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "3.0", description: "재무제표" },
      { type: "3.1", description: "재무제표 분석" },
      { type: "3.2", description: "손익계산서" },
      { type: "3.3", description: "재무상태표" },
      { type: "3.4", description: "손익계산서와 재무상태표 크로스 분석" },
      { type: "3.5", description: "손익계산서와 재무상태표 크로스 분석2" },
      { type: "3.6", description: "손익계산서와 재무상태표 크로스 분석" },
      { type: "3.7", description: "손익계산서와 재무상태표 크로스 분석2" },
      { type: "treasure" },
    ],
  },
  {
    unitNumber: 4,
    description: "퀴즈",
    backgroundColor: "bg-[#FF9EAA]",
    textColor: "text-[#FF9EAA]",
    borderColor: "border-[#FF9EAA]",
    tiles: [{ type: "4.0", description: "퀴즈" }, { type: "treasure" }],
  },
];
