import React from "react";
import { useHistory } from "react-router-dom";
import "./NewNote.css";
import { API } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

export default function NewNote() {
  const {obj} = useAppContext();
  const history = useHistory();

/*
  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${
          config.MAX_ATTACHMENT_SIZE / 1000000
        } MB.`
      );
      return;
    }
  
    setIsLoading(true);
  
    try {
      const attachment = file.current ? await s3Upload(file.current) : null;
  
      await createNote({ content, attachment, });
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }  

*/
  
  function createNote(product) {
    return API.post("notes", "/notes", {
      body: product
    });
  }
/*
  return (
    <div className="NewNote">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
    );


sendMail(email)
  return ses.sendTemplatedEmail({
      Destination:{
        ToAddress: email
      },
      Source: 'vitor.colman2001@gmail.com',
      Template: TemplateMinions,
      TemplateData: product
    });
}

*/

   return (
     <div>
       <div>Produto</div>
          <div className='product__name' onClick={() => createNote(
              {
              content: 'Minion 1',
              to: obj.email,
              toCc: 'vitor.colman@grom.com.br',
              from: 'vitor.colman2001@gmail.com',
              subject: 'Reserva BGC Toys - válida por 15 dias!'          
              }
          )
           & history.push("/")}>

           <h1>Minion 1</h1></div>

       <div className='product__name' onClick={() => createNote(
         {
          content: 'Minion 2.',
          to: 'vitor.colman2001@gmail.com',
          toCc: 'vitor.colman@grom.com.br',
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
          to: 'vitor.colman2001@gmail.com',
          toCc: 'vitor.colman@grom.com.br',
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