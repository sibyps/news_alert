import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";

import Tabletwo from "./Tabletwo";
function Form() {
  const [show, setShow] = useState(false);
  const [news_title, setTitle] = useState("");
  const [news_time, setTime] = useState("");
  const [news_date, setDate] = useState("");
  const [news_type, setType] = useState("");

  useEffect(() => {
    let curentdate = new Date().toLocaleDateString();

    setDate(curentdate);

    setTime(
      new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  }, []);
  let info = {
    news_title,
    news_time,
    news_date,
    news_type,
  };
  let handelsubmit = async (e) => {
    try {
      e.preventDefault();

      let url = "http://localhost:3500/post_news";
      let result = await axios.post(url, info);
      if (result.data.status === "success") {
        alert("success");
        setShow(false);
  
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="bg-cyan-200 w-24 text-center ml-[50%] ">
        <button
          onClick={(e) => {
            setShow(!show);
          }}
        >
          Create Allert
        </button>
      </div>
      {show ? (
        <div class="w-full max-w-sm   bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 absolute lg:top-[4%] lg:left-[40%] top-[25%] left-1 lg:right-0">
          <form class="space-y-2 " onSubmit={handelsubmit}>
            <textarea
              name="title"
              rows="4"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="write content..."
            ></textarea>

            <div>
              <Input
                type="text"
                name="time"
                // onChange={handelchange}
                value={news_time}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Input
                type="text"
                name="date"
                // onChange={handelchange}
                value={news_date}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <select
                name="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select</option>
                <option value="Level_1">Level 1</option>
                <option value="Level_2">Level 2</option>
                <option value="Level_3">Level 3</option>
              </select>
            </div>

            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      <Tabletwo/>
    </>
  );
}

export default Form;
