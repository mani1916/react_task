import React from 'react';
import { useState } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import ResponsiveToolbar from "react-responsive-toolbar-ui"
// import Navbar from 'navbar-react'
// import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Payment = () => {
    const[amount,setamount]=useState('')
    // const handlesubmit=()=>{
    //     if(amount===''){
    //         alert("Enter Amount correctly")
    //     }else{
    //         var options={
    //             key:"rzp_test_P126i76m8z4pg4",
    //             key_secret:"pSPZvwf0ZDL9U1N9yHIMI9sq",
    //             amount:amount*100,
    //             currency:"INR",
    //             name:"cenzo",
    //             description:"testing",
    //             handler:function(response){
    //             alert(response.razorpay_payment_id)
    //             },
    //             prefill:{
    //                 name:"mani",
    //                 email:"manikandancse2020@ksrce.ac.in",
    //                 contact:"6379106625",
    //             },
    //             notes:{
    //                 address:"razor",
    //             },
    //             theme:{
    //                 color:"red"
    //             }
    //         }
    //         var pay=new window.Razorpay(options)
    //         pay.open()

    //     }
    // }
    const onToken=(token)=>{
        console.log(token)

    } 
    const customStyles={
        border:'1px solid #ccc',
        color:'black'
    }
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default Payment;
