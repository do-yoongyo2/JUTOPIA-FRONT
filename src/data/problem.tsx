import data from "../../public/miniTest_5.json" assert { type: "json" };
export interface Problem {
  problem: string;
  problemDetail?: string[] | null;
  problemImage?: string;
  problemSelect: string[];
  answer: string;
  solutionDetail?: string;
}
export interface ProblemItem {
  [key: string]: Problem;
}
export const problem3_0: ProblemItem = data;

export const problem2_4: ProblemItem = {
  lessonProblem1: {
    problem: "동종 업종 중 삼성전자의 기업 개요로 옳은것은 무엇인가요?",
    problemImage: "/UNIT2_4/기업개요.png",
    problemSelect: [
      "삼성전자의 주요 제품으로는 스마트폰, 노트북, 태블릿 등이 있으며, 클라우드 컴퓨팅 서비스도 제공한다.",
      "삼성전자는 국내와 중국에 4개의 생산기지와 연구개발법인, 미국, 중국, 홍콩, 대만 등에 판매법인을 운영 중이다.",
      "삼성전자는 국내 최초로 반도체 패키지 절단 모듈인 'micro SAW'를 국산화 하는데 성공하였다.",
    ],
    answer: "0",
  },
  lessonProblem2: {
    problem: "삼성 전자의 매출액을 보고, 옳은 것을 고르세요.",
    problemImage: "/UNIT2_4/매출액.png",
    problemSelect: [
      "삼성 전자는 작년에 비해 성장하고 있다.",
      "삼성 전자는 작년에 비해 성장하지 않고 있다.",
      "삼성 전자는 작년에 비해 큰 변화 없다.",
    ],
    answer: "0",
  },
  lessonProblem3: {
    problem: "영업이익에 대해 옳지 않은 것을 고르시오.",
    problemImage: "/UNIT2_4/영업이익.png",
    problemSelect: [
      "영업 이익은 매출액에서 매출원가, 판관비 등을 뺀 금액이다.",
      "당기 순이익은 영업이익에서 여러가지 비용 및 세금을 제외하고 남은 순이익이다.",
      "매출액이 크면 무조건 흑자이다.",
    ],
    answer: "2",
  },
  lessonProblem4: {
    problem: "삼성전자의 2024년 3월 순이익율을 고르세요.",
    problemImage: "/UNIT2_4/순이익률.png",
    problemSelect: ["18.47", "9.39", "9.19"],
    answer: "1",
  },
  lessonProblem5: {
    problem: "삼성전자의 2024년 3월 부채비율을 보고 옳은 것을 고르세요.",
    problemImage: "/UNIT2_4/부채비율.png",
    problemSelect: [
      "부채 비율은 189.76이다.",
      "재무 구조가 안정적이라고 할 수 있다.",
      "부채 비율이 높다는 것은 금융 기관에 대해 의존도가 낮다는 것이다.",
    ],
    answer: "1",
  },
  lessonProblem6: {
    problem: "삼성전자의 2024년 3월 PER이 의미하는 것이 무엇인지 고르세요.",
    problemImage: "/UNIT2_4/PER.png",
    problemSelect: [
      "삼성전자의 주가가 매우 저평가 되어있다.",
      "삼성전자의 주가가 적정 수준에 있다.",
      "삼성전자의 주가가 매우 고평가되어 있다.",
    ],
    answer: "2",
  },
  lessonProblem7: {
    problem: "다음 중 옳은 것을 고르세요.",
    problemImage: "/UNIT2_4/배당.png",
    problemSelect: [
      "삼성 전자의 분기 주가배당금은 2023년 12월 기준 1444원이다.",
      "삼성전자의 2023년 시가배당률은 2022년보다 낮다.",
      "배당성향을 볼 때 삼성전자는 주주친화적이라고 볼 수 있다.",
    ],
    answer: "2",
  },
};
export const problem2_2: ProblemItem = {
  lessonProblem1: {
    problem: "개인이 일정 기간 동안 벌어들인 돈을 무엇이라고 하나요?",
    problemSelect: ["자산", "수익", "비용"],
    answer: "1",
  },
  lessonProblem2: {
    problem: "은행에서 돈을 빌리고 갚아야 할 때 사용하는 계좌는 무엇인가요?",
    problemSelect: ["대출 계좌", "예금 계좌", "적금 계좌"],
    answer: "0",
  },
  lessonProblem3: {
    problem:
      "일정 기간 동안 정기적으로 일정 금액을 저축하고, 만기 시 이자와 함께 돌려받는 금융 상품은 무엇인가요?",
    problemSelect: ["예금", "적금", "주식"],
    answer: "1",
  },
  lessonProblem4: {
    problem: "다음 중 금융 상품에 해당하는 것은 무엇인가요?",
    problemSelect: ["주식", "부동산", "예술품"],
    answer: "0",
  },
  lessonProblem5: {
    problem: "주식, 채권 등 증권이 거래되는 시장을 무엇이라고 하나요?",
    problemSelect: ["은행", "증시", "상점"],
    answer: "1",
  },
  lessonProblem6: {
    problem: "회사가 사업을 위해 주주들로부터 투자받은 돈을 무엇이라고 하나요?",
    problemSelect: ["배당금", "시세 차익", "자본금"],
    answer: "2",
  },
  lessonProblem7: {
    problem:
      "주식을 낮은 가격에 사서 높은 가격에 팔아 차익을 얻는 방법은 무엇인가요?",
    problemSelect: ["배당금", "시세 차익", "이자"],
    answer: "1",
  },
  lessonProblem8: {
    problem: "주식이 거래되는 시장을 무엇이라고 하나요?",
    problemSelect: ["주식 시장", "채권 시장", "외환 시장"],
    answer: "0",
  },
  lessonProblem9: {
    problem: "주식처럼 거래소에 상장되어 거래되는 펀드를 무엇이라고 하나요?",
    problemSelect: ["채권", "예금", "ETF"],
    answer: "2",
  },
  lessonProblem10: {
    problem:
      "정부나 기업이 자금을 조달하기 위해 발행하는 일종의 차용 증서는 무엇인가요?",
    problemSelect: ["주식", "채권", "ETF"],
    answer: "1",
  },
};
