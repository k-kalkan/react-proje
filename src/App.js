import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
       


    <form className="container" >
    
     <label id="eposta" >
    E-Posta:
    <input  type="text" name="name" placeholder="Lütfen E-posta giriniz." />
    </label>
    <br/>
    <label id="sifre">
    Şifre:
    <input  type="text" name="name" placeholder="Lütfen şifrenizi giriniz." />
    </label> 
     </form>
     
     <label id="checks">
    şifremi hatırla:    
    <input  type="checkbox" name="name" placeholder="işaretleyin" />
    </label>
   
  
    <button  id="btn" type="button" class="btn btn-primary">◄ Gönder</button>


    </div>



  );
}

export default App;
