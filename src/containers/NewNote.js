import React from "react";
import { useHistory } from "react-router-dom";
import "./NewNote.css";
import { API } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

export default function NewNote() {
  const {obj} = useAppContext();
  const history = useHistory();

  function createNote(product) {
    return API.post("notes", "/notes", {
      body: product
    });
  }

   return (
     <div>
       <div>Produto</div>
          <div className='product__name' onClick={() => createNote(
              {
              content: 'Minion 1',
              to: obj.email,
              toCc: 'thiago@bgcbrasil.com.br',
              from: 'vitor.colman2001@gmail.com',
              subject: 'Reserva BGC Toys - válida por 15 dias!'          
              }
          )
           & history.push("/")}>

           <h1>Minion 1</h1></div>

       <div className='product__name' onClick={() => createNote(
         {
          content: 'Minion 2.',
          to: obj.email,
          toCc: 'thiago@bgcbrasil.com.br',
          from: 'vitor.colman2001@gmail.com',
          subject: 'Reserva BGC Toys - válida por 15 dias!'          
         }
       ) 
       & history.push("/")}>
          <h1>Minion 2</h1>
       </div>
       <div className='product__name' onClick={() => createNote(
         {
          content: 'Minion 3.',
          to: obj.email,
          toCc: 'thiago@bgcbrasil.com.br',
          from: 'vitor.colman2001@gmail.com',
          subject: 'Reserva BGC Toys - válida por 15 dias!'          
         }
       ) 
       & history.push("/")}>
         <h1>Minion 3</h1>
       </div>
     </div>
     
   );
}