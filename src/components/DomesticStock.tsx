import { ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchDomesticStockApi } from "~/apis/domesticStockApi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

interface ListItem {
  [key: string]: {
    output: {
      bstp_nmix_prpr: string; // 코스피, 코스닥, 코스피200 지수
      bstp_nmix_prdy_vrss: string; // 업종 지수 전일 대비
      bstp_nmix_prdy_ctrt: string; // 업종 지수 전일 대비율
    };
  };
}

const DomesticStock = () => {
  const [data, setData] = useState<ListItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const stockNum = ["0001", "1001", "2001"];

  useEffect(() => {
    fetchDomesticStockApi()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="relative z-[-1] overflow-x-auto px-[10px] pt-[10px] shadow-md sm:rounded-lg">
            {stockNum.map((elem) => (
              <div key={elem}>
                <div className="text-sm">
                  {elem === "0001"
                    ? "코스피"
                    : elem === "1001"
                      ? "코스닥"
                      : "코스피200"}
                </div>
                <div className="text-lg">
                  {data[elem].output.bstp_nmix_prpr}
                </div>
                <div className="mb-[10px] text-xs">
                  {Number(data[elem].output.bstp_nmix_prdy_ctrt) > 0 ? (
                    <>
                      {/*양수일 때*/}
                      <GoTriangleUp className="inline-block" color="red" />
                      <span className="text-red-500">
                        {data[elem].output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px]">
                          {data[elem].output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </>
                  ) : Number(data[elem].output.bstp_nmix_prdy_ctrt) < 0 ? (
                    <>
                      {/*음수일 때*/}
                      <GoTriangleDown className="inline-block" color="blue" />
                      <span className="text-blue-700">
                        {data[elem].output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px]">
                          {data[elem].output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </>
                  ) : (
                    <>
                      {/*0일 때*/}
                      <span>
                        {data["0001"].output.bstp_nmix_prdy_vrss}
                        <span className="ml-[10px]">
                          {data["0001"].output.bstp_nmix_prdy_ctrt}%
                        </span>
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DomesticStock;
