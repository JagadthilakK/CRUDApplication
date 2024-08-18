import { useEffect, useState } from "react";
import {DataTable} from "./Components/DataTable";
import {Header} from "./Components/Header";
import {SearchAndButton} from "./Components/SearchAndButton";

function App() {

  const [data ,setData] = useState([]);
  const [searchItem,setSearchItem]= useState("");

  const fetchData = async ()=>{
    try{
      const response = await fetch('https://springcruddemo-50021865643.development.catalystappsail.in/getDetails');
      const data = await response.json();
      setData(data);
    }catch(error){
      console.log("ERROR",error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <Header/>
      <SearchAndButton onRecordAdded={fetchData} setSearchItem={setSearchItem}/>
      <DataTable data={data} onEdited={fetchData} searchItem={searchItem} />
    </div>
  );
}

export default App;
