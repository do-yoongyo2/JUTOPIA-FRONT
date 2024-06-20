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
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
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
                {item.title}
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
