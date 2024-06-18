import data from "../../public/miniTest_5.json" assert { type: "json" };
export interface Problem {
  problem: string;
  problemDetail?: string[] | null;
  problemImage?: string;
  problemSelect: string[];
  answer: string;
  solutionDetail?: string;
}
interface ProblemItem {
  [key: string]: Problem;
}
export const problem3_0: ProblemItem = data;

export const problem2_4: ProblemItem = {
  lessonProblem1: {
    problem: "동종 업종 중 삼성전자의 기업 개요로 옳은것은 무엇인가요?",
    problemImage: "/UNIT2_4/동일업종비교_삼전.png",
    problemSelect: [
      "삼성전자의 주요 제품으로는 스마트폰, 노트북, 태블릿 등이 있으며, 클라우드 컴퓨팅 서비스도 제공한다.",
      "삼성전자는 국내와 중국에 4개의 생산기지와 연구개발법인, 미국, 중국, 홍콩, 대만 등에 판매법인을 운영 중이다.",
      "삼성전자는 국내 최초로 반도체 패키지 절단 모듈인 'micro SAW'를 국산화 하는데 성공하였다.",
    ],
    answer: "0",
  },
  lessonProblem2: {
    problem: "삼성 전자의 매출액을 보고, 옳은 것을 고르세요.",
    problemSelect: [
      "삼성 전자는 작년에 비해 성장하고 있다.",
      "삼성 전자는 작년에 비해 성장하지 않고 있다.",
      "삼성 전자는 작년에 비해 큰 변화 없다.",
    ],
    answer: "0",
  },
  lessonProblem3: {
    problem: "영업이익에 대해 옳지 않은 것을 고르시오.",
    problemSelect: [
      "영업 이익은 매출액에서 매출원가, 판관비 등을 뺀 금액이다.",
      "당기 순이익은 영업이익에서 여러가지 비용 및 세금을 제외하고 남은 순이익이다.",
      "매출액이 크면 무조건 흑자이다.",
    ],
    answer: "2",
  },
  lessonProblem4: {
    problem: "삼성전자의 2024년 3월 순이익율을 고르세요.",
    problemSelect: ["18.47", "9.39", "9.19"],
    answer: "1",
  },
  lessonProblem5: {
    problem: "삼성전자의 2024년 3월 부채비율을 보고 옳은 것을 고르세요.",
    problemImage: "/UNIT2_4/기업실적분석_삼전.png",
    problemSelect: [
      "부채 비율은 189.76이다.",
      "재무 구조가 안정적이라고 할 수 있다.",
      "부채 비율이 높다는 것은 금융 기관에 대해 의존도가 낮다는 것이다.",
    ],
    answer: "1",
  },
  lessonProblem6: {
    problem: "삼성전자의 2024년 3월 PER이 의미하는 것이 무엇인지 고르세요.",
    problemImage: "/UNIT2_4/기업실적분석_삼전.png",
    problemSelect: [
      "삼성전자의 주가가 매우 저평가 되어있다.",
      "삼성전자의 주가가 적정 수준에 있다.",
      "삼성전자의 주가가 매우 고평가되어 있다.",
    ],
    answer: "2",
  },
  lessonProblem7: {
    problem: "다음 중 옳은 것을 고르세요.",
    problemImage: "/UNIT2_4/기업실적분석_삼전.png",
    problemSelect: [
      "삼성 전자의 분기 주가배당금은 2023년 12월 기준 1444원이다.",
      "삼성전자의 2023년 시가배당률은 2022년보다 낮다.",
      "배당성향을 볼 때 삼성전자는 주주친화적이라고 볼 수 있다.",
    ],
    answer: "2",
  },
};
