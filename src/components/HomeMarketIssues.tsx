import React, { useEffect, useState } from "react";
import { fetchMarketIssuesApi } from "../apis/marketIssuesApi"; // 수정된 경로

interface ListItem {
  bbsName: string;
  title: string;
  regDate: string;
  messageId: string;
  attachmentUrl: string;
}

interface ApiResponse {
  dataHeader: {
    successCode: string;
    resultCode: string;
    resultMessage: string;
    category: string;
  };
  dataBody: {
    list: ListItem[];
  };
}

const MarketIssues: React.FC = () => {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMarketIssuesApi()
      .then((response) => {
        const responseData = response.data as ApiResponse;
        console.log(responseData);
        setData(responseData.dataBody.list.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log(error.response);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              발행일
            </th>
            <th scope="col" className="px-6 py-3">
              PDF 파일
              <span className="sr-only">Download</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {/* 제목과 버튼을 감싸는 flex 컨테이너 추가 */}
                <div className="flex items-center justify-between">
                  {item.title}
                  <a
                    href={`/details/${item.messageId}`}
                    className="ml-4 inline-flex"
                  >
                    <button
                      type="button"
                      className="mb-2 me-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      자세히
                    </button>
                  </a>
                </div>
              </th>
              <td className="px-6 py-4">{item.regDate}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href={item.attachmentUrl}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketIssues;
