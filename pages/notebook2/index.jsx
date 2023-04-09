import React, { useState, useEffect } from "react";
import Head from "next/head";
import stringMap from "../../components/stringMap";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.json-generator.com/templates/sP_8GvVQ53ow/data?access_token=7yojywmb2p5khh426mmcmhjdgpjamd5iv2a0rj3e"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export const FilterTable = ({
  brandValue,
  onChangeBrand,
  platformValue,
  onChangePlatform,
  osValue,
  onChangeOs,
  ramValue,
  onChangeRam,
  cpuValue,
  onChangeCpu,
  storageValue,
  onChangeStorage,
  screenValue,
  onChangeScreen,
  countData,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="brand-filter-input">Filter by Brand:</label>
        <select
          id="brand-filter-input"
          value={brandValue}
          onChange={onChangeBrand}
        >
          <option value="">All</option>
          <option value="51">Acer</option>
          <option value="53">Asus</option>
          <option value="54">Dell</option>
          <option value="55">HP</option>
          <option value="56">Lenovo</option>
          <option value="57">MSI</option>
          <option value="58">Microsoft</option>
        </select>
      </div>
      <div>
        <label htmlFor="platform-filter-input">Filter by Platform:</label>
        <select
          id="platform-filter-input"
          value={platformValue}
          onChange={onChangePlatform}
        >
          <option value="">All</option>
          <option value="11">AMD</option>
          <option value="12">Intel</option>
        </select>
      </div>
      <div>
        <label htmlFor="os-filter-input">Filter by OS:</label>
        <select id="os-filter-input" value={osValue} onChange={onChangeOs}>
          <option value="">All</option>
          <option value="41">Windows 10</option>
          <option value="42">Windows 11</option>
          <option value="44">Windows Linux</option>
        </select>
      </div>
      <div>
        <label htmlFor="ram-filter-input">Filter by RAM Size:</label>
        <select id="ram-filter-input" value={ramValue} onChange={onChangeRam}>
          <option value="">All</option>
          <option value="2">2 GB</option>
          <option value="4">4 GB</option>
          <option value="8">8 GB</option>
          <option value="16">16 GB</option>
          <option value="32">32 GB</option>
        </select>
      </div>
      <div>
        <label htmlFor="cpu-filter-input">Filter by CPU:</label>
        <select id="cpu-filter-input" value={cpuValue} onChange={onChangeCpu}>
          <option value="">All</option>
          <option value="21">Intel i3</option>
          <option value="22">Intel i5</option>
          <option value="23">Intel i7</option>
          <option value="24">Intel i9</option>
          <option value="25">Ryzen 3</option>
          <option value="26">Ryzen 5</option>
          <option value="27">Ryzen 7</option>
          <option value="28">Ryzen 9</option>
        </select>
      </div>
      <div>
        <label htmlFor="storage-filter-input">Filter by Storage Size:</label>
        <select
          id="storage-filter-input"
          value={storageValue}
          onChange={onChangeStorage}
        >
          <option value="">All</option>
          <option value="128">128 GB</option>
          <option value="256">256 GB</option>
          <option value="512">512 GB</option>
          <option value="1024">1024 GB</option>
          <option value="2048">2048 GB</option>
        </select>
      </div>
      <div>
        <label htmlFor="screen-filter-input">Filter by Screen Size:</label>
        <select
          id="screen-filter-input"
          value={screenValue}
          onChange={onChangeScreen}
        >
          <option value="">All</option>
          <option value="12">12"</option>
          <option value="13">13"</option>
          <option value="14">14"</option>
          <option value="15">15"</option>
          <option value="16">16"</option>
          <option value="17">17"</option>
        </select>
      </div>
      <div>Total: {countData}</div>
    </div>
  );
};

function Notebook2({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterOS, setFilterOS] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterRam, setFilterRam] = useState("");
  const [filterCPU, setFilterCPU] = useState("");
  const [filterStorage, setFilterStorage] = useState("");
  const [filterScreen, setFilterScreen] = useState("");

  useEffect(() => {
    let tempData = data;

    if (filterBrand !== "") {
      tempData = tempData.filter((item) => item.brand == filterBrand);
    }

    if (filterPlatform !== "") {
      tempData = tempData.filter((item) => item.platform == filterPlatform);
    }

    if (filterOS !== "") {
      tempData = tempData.filter((item) => item.os_type == filterOS);
    }

    if (filterRam !== "") {
      tempData = tempData.filter((item) => item.ram_size == filterRam);
    }

    if (filterCPU !== "") {
      tempData = tempData.filter((item) => item.processor_model == filterCPU);
    }

    if (filterStorage !== "") {
      tempData = tempData.filter((item) => item.storage_size == filterStorage);
    }

    if (filterScreen !== "") {
      tempData = tempData.filter((item) => item.screen_size == filterScreen);
    }

    setFilteredData(tempData);
  }, [
    data,
    filterBrand,
    filterPlatform,
    filterOS,
    filterRam,
    filterCPU,
    filterStorage,
    filterScreen,
  ]);

  const handleFilterBrandChange = (e) => {
    setFilterBrand(e.target.value);
  };

  const handleFilterPlatformChange = (e) => {
    setFilterPlatform(e.target.value);
  };

  const handleFilterOSChange = (e) => {
    setFilterOS(e.target.value);
  };

  const handleFilterRamChange = (e) => {
    setFilterRam(e.target.value);
  };

  const handleFilterCpuChange = (e) => {
    setFilterCPU(e.target.value);
  };

  const handleFilterStorageChange = (e) => {
    setFilterStorage(e.target.value);
  };

  const handleFilterScreenChange = (e) => {
    setFilterScreen(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Notebook List</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="my-8 text-2xl text-center">Notebook Lists</h1>
        <FilterTable
          brandValue={filterBrand}
          onChangeBrand={handleFilterBrandChange}
          platformValue={filterPlatform}
          onChangePlatform={handleFilterPlatformChange}
          osValue={filterOS}
          onChangeOs={handleFilterOSChange}
          ramValue={filterRam}
          onChangeRam={handleFilterRamChange}
          cpuValue={filterCPU}
          onChangeCpu={handleFilterCpuChange}
          storageValue={filterStorage}
          onChangeStorage={handleFilterStorageChange}
          screenValue={filterScreen}
          onChangeScreen={handleFilterScreenChange}
          countData={filteredData.length}
        />
        <div className="overflow-auto">
          <table className="table table-compact table-zebra w-full md:w-10/12 mx-auto">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Platform</th>
                <th>OS</th>
                <th>RAM</th>
                <th>CPU</th>
                <th>Storage</th>
                <th>Screen Size</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{stringMap.get(item.brand)}</td>
                  <td>{stringMap.get(item.platform)}</td>
                  <td>{stringMap.get(item.os_type)}</td>
                  <td>{item.ram_size} GB</td>
                  <td>{stringMap.get(item.processor_model)}</td>
                  <td>{item.storage_size} GB</td>
                  <td>{item.screen_size}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notebook2;
