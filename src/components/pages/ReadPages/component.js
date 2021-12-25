import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import quranApi from '../../../api/quranApi';

export default function ReadPage() {
  let params = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await quranApi.get(`/surah/${parseInt(params?.id) + 1}`);
      setData(response)
    }

    fetchData()
  }, [params?.id])

  const surat = data?.data?.data || [];
  const verse = surat?.verses || [];

  const listData = verse.map((item, index) => {
    return (
      <div key={index} className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <div className="flex justify-center items-center rounded-b-lg bg-cyan-500 hover:bg-cyan-600 w-10">
            <p className="text-left text-white text-base">{item?.number?.inSurah || ""}</p>
          </div>
          <p className="text-right text-gray-700 font-bold text-3xl my-4">{item?.text?.arab || ""}</p>
          <p className="text-left text-gray-700 font-medium text-lg my-2">{item?.text?.transliteration?.en || ""}</p>
          <p className="text-left text-gray-700 text-base my-2">{item?.translation?.id || ""}</p>
          <hr />
        </div>
      </div>
    )
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <p className="text-center text-gray-700 font-bold text-2xl">Surat {surat?.name?.transliteration?.id || ""}</p>
          <p className="text-center text-gray-700 text-lg my-2">{surat?.name?.translation?.id || ""}</p>
          <p className="text-center text-gray-700 text-lg my-2">{surat?.revelation?.id || ""}</p>
          <p className="text-center text-gray-700 text-lg my-2">{surat?.numberOfVerses || ""} Ayat</p>
          <hr />
          <p className="text-center text-gray-700 text-4xl my-6">{surat?.preBismillah?.text?.arab || ""}</p>
        </div>
        <div className="w-full px-3">
          {listData}
        </div>
      </div>
    </div>
  );
}