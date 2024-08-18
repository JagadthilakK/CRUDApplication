import { useEffect, useState } from "react";
import {DataTable} from "./Components/DataTable";
import {Header} from "./Components/Header";
import {SearchAndButton} from "./Components/SearchAndButton";

function App() {

  const [data ,setData] = useState([]);
  const [searchItem,setSearchItem]= useState("");
  const [serverErrorText,setServerErrorText] = useState(false)

  const fetchData = async ()=>{
    try{
      const response = await fetch('https://springcruddemo-50021865643.development.catalystappsail.in/getDetails');
      const data = await response.json();
      setData(data);
    }catch(error){
      console.log("ERROR",error)
    }
  }

  setTimeout(()=>{
    setServerErrorText(true)
  },10000)

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <Header/>
      <SearchAndButton onRecordAdded={fetchData} setSearchItem={setSearchItem}/>
      <DataTable data={data} onEdited={fetchData} searchItem={searchItem} />
      {serverErrorText && <h4 style={{textAlign:"center",color:"red"}}>If adding, editing, or deleting records is not working, there might be an issue with the server or the server might be down, especially since it is a free server where I have hosted my Spring Boot application.</h4>}
    </div>
  );
}

export default App;
