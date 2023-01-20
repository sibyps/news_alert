import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3500/get_news";
    axios.get(url).then((result) => {
      if (result.data.status === "success") {
        setData([...result.data.get_doument]);
      }
    });
  }, []);

  return (
    <div>
    <div className="text-center ml-[2%] space-y-2">

      <h1 className="text-lg text-black">Active Alerts</h1>
      <h2>Following are the active alerts</h2>
    </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((element) => {
                    return (
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {element.news_title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {element.news_time}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {element.news_date}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {element.news_type}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>© 2022 Alert System PVT LTD</h1>
      </div>
    </div>
  );
}

export default Table;
