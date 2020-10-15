import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

import LeftSideBar from '../LeftSideBar/LeftSideBar';

const PostReview = () => {

    const [user] = useContext(UserContext);
    // console.log('logged In User info', loggedInUser);

    const { name, email, photoURL } = user;


    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: name,
            email:email
        }
    });

    const onSubmit = data => {
       
        fetch('http://localhost:5000//addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                }
            })

    }

    return (
        <div className="row">

            <div className="col-md-3">

                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">

            <div className='container'>
                    <h2 style={{ fontFamily: 'poppins' }} className='mb-4 mt-3'>Review</h2>

                    <div className='row formSection'>
                        <div className='col-md-8 py-5'>
                            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">

                                    <input type="text" ref={register({ required: true })} name="name" class="form-control" id="exampleInputPassword1" placeholder="Your Name/Company name" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                
                               
                                <div class="form-group">

                                    <textarea type="text" name="review" ref={register({ required: true })} style={{ height: '100px' }} placeholder='Maximum 100 Words' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    {errors.review && <span className="text-danger">This field is required</span>}
                                </div>
                                

                                <button type="submit" class="hireButton">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className='col-md-4'>

                    </div>



                </div>
            </div>





        </div>

    );
};

export default PostReview;