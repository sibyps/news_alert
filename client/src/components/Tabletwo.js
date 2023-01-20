import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Tabletwo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3500/get_news";
    axios.get(url).then((result) => {
      if (result.data.status === "success") {
        setData([...result.data.get_doument]);
      }
    });
  }, []);
  let handleclick=async(e)=>{
      let id =e.target.value
const url=`http://localhost:3500/delete_news/${id}`
const result=await axios.delete(url)

    alert(result.data.status)
  }
  return (
    <div>
      <div className="flex">
        <h2 className="text-2xl mx-auto p-5 ">News</h2>
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
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete
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
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button className="bg-red-300 rounded" onClick={handleclick} value={element._id} >Delete</button>
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
        <h2>Total ActiveAlerts:{data.length}</h2>
      </div>
      <div className="bg-emerald-300 w-28 rounded"><Link to={'/page2'}><h1>Go to page 2</h1></Link></div>
    </div>
    
  );
}

export default Tabletwo;
