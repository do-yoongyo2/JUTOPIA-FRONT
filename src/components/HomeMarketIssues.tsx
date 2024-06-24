import React, { useEffect, useState } from "react";
import { fetchMarketIssuesApi } from "../apis/marketIssuesApi"; // 수정된 경로
import { Modal, ModalBackdrop } from "./styled"; // 수정된 경로

interface ListItem {
  id: number;
  bbs_name: string;
  title: string;
  writer: string;
  reg_date: string;
  attachment_url: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const MarketIssues: React.FC = () => {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDetailClick = (item: ListItem) => {
    setSelectedItem(item);
    toggleModal();
  };

  useEffect(() => {
    fetchMarketIssuesApi()
      .then((response) => {
        const responseData = response.data as ListItem[];
        console.log(responseData);
        setData(responseData.slice(0, 4)); // 4개의 데이터만 사용
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
            <th scope="col" className="px-4 py-3">
              제목
            </th>
            <th scope="col" className="px-4 py-3">
              발행일
            </th>
            <th scope="col" className="px-4 py-3">
              PDF 파일
              <span className="sr-only">Download</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="mr-2">{item.title}</span>
                  <button
                    type="button"
                    className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    onClick={() => handleDetailClick(item)}
                  >
                    자세히
                  </button>
                </div>
              </th>
              <td className="px-4 py-2">{item.reg_date}</td>
              <td className="px-4 py-2 text-right">
                <a
                  href={item.attachment_url}
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
      {isModalOpen && selectedItem && (
        <>
          <ModalBackdrop display="block" onClick={toggleModal} />
          <Modal
            toggleModal={toggleModal}
            title={selectedItem.title}
            detail={
              <div className="p-4">
                <div className="mb-4">
                  <p>
                    <strong>게시판:</strong> {selectedItem.bbs_name}
                  </p>
                  <p>
                    <strong>작성자:</strong> {selectedItem.writer}
                  </p>
                  <p>
                    <strong>발행일:</strong> {selectedItem.reg_date}
                  </p>
                </div>
                <hr className="mb-4" />
                <p>
                  <strong>내용:</strong> {selectedItem.content}
                </p>
                <hr className="my-4" />
                <p className="text-lg">
                  자세히 확인하고 싶으시면{" "}
                  <a
                    href={selectedItem.attachment_url}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    다운로드
                  </a>
                  후 PDF 파일을 확인하세요.
                </p>
              </div>
            }
          />
        </>
      )}
    </div>
  );
};

export default MarketIssues;
