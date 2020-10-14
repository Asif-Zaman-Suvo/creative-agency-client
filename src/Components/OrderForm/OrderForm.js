import React from 'react';
import { useParams } from 'react-router-dom';
import './OrderForm.css';

const OrderForm = () => {

    const { courseName } = useParams()
    return (
        <div className='container'>
            <h2 style={{fontFamily:'poppins'}} className='mb-4 mt-3'>Order</h2>

            <div className='row formSection'>
                <div className='col-md-8 py-5'>
                    <form className='p-4'>
                        <div class="form-group">

                            <input type="text" name="name" class="form-control" id="exampleInputPassword1" placeholder="Your Name/Company name" />
                        </div>
                        <div class="form-group">

                            <input type="email" email="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address" />

                        </div>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleInputPassword1" value={`${courseName}`} />
                        </div>
                        <div class="form-group">
                           
                            <textarea type="text" style={{height:'100px'}} placeholder='Project Details' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">

                            <input style={{width: '150px'}} type="text" class="form-control" id="exampleInputPassword1" placeholder="Price" />  

                           
                        </div>

                        <button type="submit" class="hireButton">Submit</button>
                    </form>
                </div>
            </div>

            <div className='col-md-4'>

            </div>



        </div>
    );
};

export default OrderForm;