import React from "react";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Notebook = () => {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const datas = JSON.parse(data);
  const datt = datas.results;
  console.log(datt);
  return (
    <div>
      <Head>
        <title>Notebook List</title>
      </Head>
      <div className="overflow-x-auto">
        <table className="table-zebra table-fixed w-screen">
          <thead>
            <tr>
              <th className="w-1">Brand</th>
              <th className="w-10">Product Name</th>
              <th className="w-1">Price</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {datt.map((dat) => (
              <tr key={dat.index}>
                <td>{dat.Brand}</td>
                <td>{dat.Product}</td>
                <td>{dat.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notebook;
