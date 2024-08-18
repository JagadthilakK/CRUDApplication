import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import '../Stylesheet/DataTable.css';

export const DataTable = ({data,onEdited,searchItem}) => {

    // const details1 = [
    //     {id:1,name:"Jagad",age:24,city:"Chennai"},
    //     {id:2,name:"Karki",age:78,city:"Dolakpur"},
    //     {id:3,name:"Gady",age:27,city:"Madurai"},
    //     {id:4,name:"Chop",age:29,city:"Salem"}
    // ]

    const [editModalOpen,setEditModalOpen] =  useState(false);
    const [currentDetail,setCurrentDetail] = useState(null);

    const handleEdit = (details)=>{
      setCurrentDetail(details);
      setEditModalOpen(true);
    };

    const handleEditChange =(e)=>{
      const {name,value} = e.target;
      setCurrentDetail({...currentDetail,[name]:value})
    } 

    const handleEditSubmit =async ()=>{
      try{
        const response = await fetch(`https://springcruddemo-50021865643.development.catalystappsail.in/updateDetail`,
          {
            method:"PUT",
            headers:{"Content-type":"application/json",'Access-Control-Allow-Origin': '*'},
            body:JSON.stringify(currentDetail)
          });

          if(response.ok){
            console.log("Record Updated");
            setEditModalOpen(false);
            onEdited();
          }else{
            console.log("Error")
          }
      }catch(error){  
        console.error("ERROR",error)
      }
    }

    const handleDelete = async(id)=>{
      Swal.fire({
        title:"Are you sure?",
        text:"You won't be able to revert this!",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor:"#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it !"
      }).then(async(result)=>{
        if(result.isConfirmed){
          try{
            const response = await fetch(`https://springcruddemo-50021865643.development.catalystappsail.in/deleteDetail/${id}`,{
              headers:{'Access-Control-Allow-Origin': '*'},
              method:"DELETE"
            });
            if(response.ok){
              Swal.fire({
                title:"Deleted!",
                text:'Your record has been deleted.',
                icon:'success'
              });
              onEdited()
            }
          }catch(error){
            console.log("ERROR",error)
          }
        }
      })
    }

    const filteredData = data.filter((detail) =>
      detail.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      detail.city.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <div className="dataTableContainer">
      <table className="dataTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {filteredData && <tbody>
          {filteredData.map((detail,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{detail.name}</td>
                <td>{detail.age}</td>
                <td>{detail.city}</td>
                <td><button className="editButton" onClick={()=>handleEdit(detail)}>Edit</button></td>
                <td><button className="deleteButton" onClick={()=>{handleDelete(detail.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>}
      </table>
      {editModalOpen && currentDetail &&
        <Modal
          isOpen={editModalOpen}
          className="modalContainer"
          overlayClassName="modalOverlay"
          onRequestClose={() => setEditModalOpen(false)}
          ariaHideApp={false}
        >
          <h1>Edit Record</h1>
          <div className="modalContent">
            <label>
              Full Name:
              <input
                type="text"
                name="name"
                value={currentDetail.name}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={currentDetail.age}
                onChange={handleEditChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={currentDetail.city}
                onChange={handleEditChange}
              />
            </label>
            <button className="submitButton" onClick={handleEditSubmit}>Edit Record</button>
            <button className="closeButton" onClick={() => setEditModalOpen(false)}>Close</button>
          </div>
        </Modal>
      }
    </div>
  )
}