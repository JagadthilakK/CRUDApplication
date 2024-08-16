import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Stylesheet/SearchAndButton.css';

export const SearchAndButton = ({onRecordAdded,setSearchItem}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData,setFormData] = useState({name:"",age:"",city:''});

  const handleAddButton = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({name:"",age:"",city:""})
  };

  const getInputChange  = (e)=>{
    const{name,value} =e.target;
    setFormData({...formData,[name]:value});
  }

  const handleSearch=(e)=>{
    setSearchItem(e.target.value)
  }

  const addUserButton = async()=>{
    try{
      const response = await fetch("http://localhost:8082/insertDetail",
        {
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(formData)
        })
      if(response.ok){
        console.log("data sent");
        closeModal();
        onRecordAdded();
      }else{
        console.log("error data sending")
      }
    }catch(error){
      console.error("Error:",error)
    }
  }


  return (
    <div className="searchContainer">
      <div className="searchAddButton">
        <input type="text" className="searchBar" placeholder="Search..." onChange={handleSearch}/>
        <button className="addButton" onClick={handleAddButton}>Add Record</button>
      </div>
      {modalOpen && 
        <Modal
          isOpen={modalOpen}
          className="modalContainer"
          overlayClassName="modalOverlay"
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <h1>Add New Record</h1>
          <div className="modalContent">
            <label>
              Full Name:
              <input type="text" name="name" placeholder="Enter full name" value={formData.name} onChange={getInputChange}/>
            </label>
            <label>
              Age:
              <input type="number" name="age" placeholder="Enter age" value={formData.age} onChange={getInputChange}/>
            </label>
            <label>
              City:
              <input type="text" name="city" placeholder="Enter city" value={formData.city} onChange={getInputChange}/>
            </label>
            <button className="submitButton" onClick={addUserButton}>Add Record</button>
            <button className="closeButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      }
    </div>
  );
};
