import React, { useState } from 'react'
import './Form.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap-icons/font/bootstrap-icons.css';
import generateUniqueId from 'generate-unique-id';



function FormKrunal() {


    const [inputState, setInputState] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: ''
    });


    const handleChange = (e) => {

        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }


    const [viewData, setViewData] = useState([]);



    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputState.id) {
            let record = viewData;
            let updateRec = record.map((rec) => {
                if (rec.id === inputState.id) {
                    return rec = inputState
                } else {
                    return rec
                }
            })
            setViewData(updateRec);
        } else {

            const newData = {
                ...inputState,
                id: generateUniqueId({
                    length: 5,
                    useLetters: false
                })
            }

            setViewData([...viewData, newData]);
        }


        setInputState({
            id: '',
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: ''
        })
    }




    const handleEdit = (id) => {
        console.log("Edit", id);

        let record = viewData;
        let updateRecord = record.filter((rec) => {
            return rec;
        });


        setInputState(updateRecord[0]);
    };



    const handleDelete = (id) => {

        let record = viewData;
        let deleteRecord = record.filter((rec) => {
            return rec.id !== id;
        });

        setViewData(deleteRecord);
    };




    return (
        <div>
            <h1 className='Display-1 text-center py-5'>Employee Management CRUD</h1>

            <Container>

                <div className='bg-color d-flex justify-content-between align-items-center'>
                    <div>
                        <i className="bi bi-house-door-fill text-white fs-3 px-4"></i>
                    </div>
                    <div className='px-3'>
                        <div className='d-flex align-items-center'>
                            <i className="bi bi-person-fill text-white fs-3 px-2"></i>
                            <span className='text-white'>Empoloyee Management</span>
                        </div>
                    </div>
                </div>



                <div>
                    {/* <Form className='py-3'> */}

                    <div className='w-50 m-auto py-3'>
                        <h2 className='p-3 bg-color text-white fs-5'>New Employee</h2>
                    </div>




                    <div className='w-50 m-auto'>
                        <div className='px-5 p-3 shadow p-3 mb-5 bg-body rounded'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Control type="text" hidden />
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}>
                                        First Name
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" name='fname' value={inputState.fname} onChange={handleChange} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={3}>
                                        Last Name
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" name='lname' value={inputState.lname} onChange={handleChange} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={3}>
                                        Email
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="email" name='email' value={inputState.email} onChange={handleChange} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={3}>
                                        Address
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" as="textarea" name='address' value={inputState.address} onChange={handleChange} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={3}>
                                        Phone
                                        <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="number" name='phone' value={inputState.phone} onChange={handleChange} />
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3">
                                    <div className='d-flex justify-content-center'>
                                        <button className='border-0 px-4 py-2 text-white bg-success' type='submit'>SUBMIT</button>
                                    </div>
                                </Form.Group>


                            </Form>
                        </div>
                    </div>


                    {/* </Form> */}
                </div>


            </Container>



            <div className='py-1 w-95 m-auto bg-color'></div>




            <Container>
                <div className='p-3'>
                    <div className='w-100 m-auto'>
                        <div>
                            <h2 className='p-3 bg-color text-white fs-5'>Manage Employee</h2>
                        </div>

                        <div>
                            <table className='w-100 text-center border-1'>
                                <thead className='border-3'>
                                    <tr className='border-3'>
                                        <th className='border-3 p-4'>#</th>
                                        <th className='border-3'>First Name</th>
                                        <th className='border-3'>Last Name</th>
                                        <th className='border-3'>Email</th>
                                        <th className='border-3'>Address</th>
                                        <th className='border-3'>Phone</th>
                                        <th className='border-3'>Actions</th>

                                    </tr>
                                </thead>

                                <tbody className='border-1'>
                                    {
                                        viewData.map((data) => {
                                            return (
                                                <tr className='border-1'>
                                                    <td className='border-1  p-3'>{data.id}</td>
                                                    <td className='border-1  p-3'>{data.fname}</td>
                                                    <td className='border-1  p-3'>{data.lname}</td>
                                                    <td className='border-1  p-3'>{data.email}</td>
                                                    <td className='border-1  p-3'>{data.address}</td>
                                                    <td className='border-1  p-3'>{data.phone}</td>

                                                    <td>
                                                        <div>
                                                            <span className='p-2 h4'>
                                                                <i class="bi bi-eye-fill" style={{color: "blue", cursor: "pointer"}}></i>
                                                            </span>
                                                            <span className='p-2 h4'>

                                                                <i class="bi bi-pencil-square" style={{color: "orange", cursor: "pointer"}} onClick={() => handleEdit(data.id)}></i>
                                                            </span>
                                                            <span className='p-2 h4'>

                                                                <i class="bi bi-trash3-fill" style={{color: "red", cursor: "pointer"}} onClick={() => handleDelete(data.id)}></i>
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </Container>


        </div>
    );
}

export default FormKrunal
