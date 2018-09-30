import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import 'tachyons';
import './Contact.css';
import Nav from '../Nav/Nav';

const Contact = () => {

return (

	
	
	<div className="athelas bg-black-80 contactpic2 ">

	<div className="contactpic">
		<Nav />
	</div>

	<div className="pa5">
			  <Form>
	        <FormGroup>
	          <Label for="exampleEmail">Email</Label>
	          <Input type="email" name="email" id="exampleEmail" placeholder="name@email.com" />
	        </FormGroup>
	        
	        <FormGroup>
	          <Label for="exampleText">Text Area</Label>
	          <Input type="textarea" name="text" id="exampleText" />
	        </FormGroup>
	      
	        
	        <Button>Submit</Button>
	      </Form>

      </div>



	  
	</div>



	);
}


export default Contact;