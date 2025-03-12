"use client";

import React, { useState } from "react";
import Header from "../templates/Header";

interface cosPlan {
  coser: string;
  character: string;
  description: string;
  place: string;
  date: string;
  chname: string;
}

const PageDatabase = () => {
  const [formDataCos, setFormDataCos] = useState<cosPlan>({
    coser: "",
    character: "",
    description: "",
    place: "",
    date: "",
    chname: "",
  });
  const [isAddNew, setIsAddNew] = useState(false);

  const dataToDefault = () => {
    setFormDataCos({
      coser: "",
      character: "",
      description: "",
      place: "",
      date: "",
      chname: "",
    });
  };

  return (
    <div className="mx-auto bg-white p-6 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <p className="lg:max-w-3xl text-center mx-auto font-bold text-black text-4xl mt-10">
          Tokisaki Gallery Private Database
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:max-w-3xl mx-auto">
          {isAddNew ? (
            <>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Cosplayer
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="coser"
                    name="coser"
                    type="text"
                    value={formDataCos.coser}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        coser: e.target.value,
                      }));
                    }}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="characters"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Character
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="character"
                    name="character"
                    type="text"
                    value={formDataCos.character}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        character: e.target.value,
                      }));
                    }}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Date
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formDataCos.date}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        date: e.target.value,
                      }));
                    }}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="characters"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Place
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="place"
                    name="place"
                    type="text"
                    value={formDataCos.place}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        place: e.target.value,
                      }));
                    }}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Chapter Name
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <input
                    id="chname"
                    name="chname"
                    type="text"
                    value={formDataCos.chname}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        chname: e.target.value,
                      }));
                    }}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="characters"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <textarea
                    id="hashtags"
                    name="hashtags"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={formDataCos.description}
                    onChange={(e) => {
                      setFormDataCos((prevData) => ({
                        ...prevData,
                        description: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="col-span-full flex flex-row gap-2 justify-end">
                <button
                  className="text-center py-2 px-4 rounded-lg bg-red-500 hover:bg-red-700 text-white cursor-pointer"
                  onClick={() => {
                    setIsAddNew(false);
                    dataToDefault();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer"
                  onClick={() => setIsAddNew(true)}
                >
                  Add Plan
                </button>
              </div>
            </>
          ) : (
            <div className="mx-auto col-span-full">
              <button
                className="mx-auto text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer"
                onClick={() => setIsAddNew(true)}
              >
                Create New Plan
              </button>
            </div>
          )}

          <div className="col-span-full">
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max text-slate-800">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                    <th className="p-4">
                      <p className="text-sm leading-none font-normal">
                        Character
                      </p>
                    </th>
                    <th className="p-4">
                      <p className="text-sm leading-none font-normal">Coser</p>
                    </th>
                    <th className="p-4">
                      <p className="text-sm leading-none font-normal">Date</p>
                    </th>
                    <th className="p-4">
                      <p className="text-sm leading-none font-normal">Place</p>
                    </th>
                    <th className="p-4">
                      <p className="text-sm leading-none font-normal">
                        Ch. Name
                      </p>
                    </th>
                    <th className="p-4">
                      <p></p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4">
                      <p className="text-sm font-bold">Kiana HoF</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">@yunawrvii._</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">-</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">-</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">The Day You Look at Me</p>
                    </td>
                    <td className="p-4">
                      <a href="#" className="text-sm font-semibold ">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4">
                      <p className="text-sm font-bold">The Herta</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">@chisupasta</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">-</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">-</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">Unknown</p>
                    </td>
                    <td className="p-4">
                      <a href="#" className="text-sm font-semibold ">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDatabase;
