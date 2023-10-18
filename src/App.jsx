import React, { useState } from 'react';

import './App.css';

function App() {


  const [formData, setFormData] = useState({name: "",description: "",category: "",quantity:"",price:""  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
alert(`
    Name: ${formData.name},
    Description: ${formData.description},
    Category: ${formData.category},
    Quantity: ${formData.quantity},
    Price: ${formData.price}`);
 
  };

  const resetAll = () => {
    setFormData({name: "",description: "",category: "",quantity:"",price:"" });
  

};


  return (
    
    <div className="container">
    

      <h1>New Product</h1>


        <form onSubmit={handleSubmit} onReset={resetAll} >

          <label htmlFor="name" className="namaelabel">Name</label> 
            <input type="text" className="nametext" id="name" name="name" value={formData.name} onChange={handleChange}/>
          
            <label htmlFor="description" className="descrlabel">Description</label>
            <input type="text" className="descrtext" id="description" name="description" value={formData.description} onChange={handleChange}/>
          
            <label htmlFor="category" className="catelabel">Category</label>
            <input type="text" className="catetext" id="category" name="category" value={formData.category} onChange={handleChange}/>

            <label htmlFor="quantity" className="quaninput">Quantity</label>
            <input type="text" className="quantext" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange}/>

            <label htmlFor="price" className="priceinput">Price</label>
            <input type="text" className="pricetext" id="price" name="price" value={formData.price} onChange={handleChange}/>

            <div className="btn">
               <button type="submit" id= "submit" className="submitbutt">SUBMIT</button>
               <button type="reset" id= 'cancel'className="cancelbutt">CANCEL</button>

            </div>
  
            </form>

</div>
   
    
  );
}

export default App;
