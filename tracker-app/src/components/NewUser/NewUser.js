import React from 'react';

function NewUser(props) {

    return(
        <div className='row justify-content-center'>
            <div className='col-md-10'>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Create New User</h3>
                        <form>
                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <label for='firstName'>First Name</label>
                                    <input type='text' className='form-control' id='fName'></input>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <label for='lastName'>Last Name</label>
                                    <input type='text' className='form-control' id='lName'></input>
                                </div>
                            </div>
                                
                            <div className='form-row'>
                                <div className='form-group col-md-12'>
                                    <label for='email'>Email</label>
                                    <input type='email' className='form-control' id='emailAddress'></input>
                                </div>
                            </div>
                                
                            <div className='form-row'>
                                <div className='form-group col-md-3'>
                                    <label for='addressNumber'>Address Number</label>
                                    <input type='text' className='form-control' id='addressNum'></input>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for='street'>Street</label>
                                    <input type='text' className='form-control' id='street'></input>
                                </div>
                                <div className='form-group col-md-3'>
                                    <label for='city'>City</label>
                                    <input type='text' className='form-control' id='city'></input>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label for='state'>State</label>
                                    <select className='form-control' name='State' id='state'>
                                        <option>Choose a State</option>    
                                        <option>AL</option>    
                                        <option>AK</option>
                                        <option>AZ</option>
                                        <option>AR</option>
                                        <option>CA</option>
                                        <option>CO</option>
                                        <option>CT</option>
                                        <option>DE</option>
                                        <option>FL</option>
                                        <option>GA</option>
                                        <option>HI</option>
                                        <option>ID</option>
                                        <option>IL</option>
                                        <option>IN</option>
                                        <option>IA</option>
                                        <option>KS</option>
                                        <option>KY</option>
                                        <option>LA</option>
                                        <option>ME</option>
                                        <option>MD</option>
                                        <option>MA</option>
                                        <option>MI</option>
                                        <option>MN</option>
                                        <option>MS</option>
                                        <option>MO</option>
                                        <option>MT</option>
                                        <option>NE</option>
                                        <option>NV</option>
                                        <option>NH</option>
                                        <option>NJ</option>
                                        <option>NM</option>
                                        <option>NY</option>
                                        <option>NC</option>
                                        <option>ND</option>
                                        <option>OH</option>
                                        <option>OK</option>
                                        <option>OR</option>
                                        <option>PA</option>
                                        <option>RI</option>
                                        <option>SC</option>
                                        <option>SD</option>
                                        <option>TN</option>
                                        <option>TX</option>
                                        <option>UT</option>
                                        <option>VT</option>
                                        <option>VA</option>
                                        <option>WA</option>
                                        <option>WV</option>
                                        <option>WI</option>
                                        <option>WY</option>
                                    </select>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for='zipCode'>Zip Code</label>
                                    <input type='text' className='form-control' id='zipCode'></input>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                    <label for='birthDate'>Birth Date</label>
                                    <input type='date' className='form-control' id='dateOfBirth'></input>
                                </div>
                                <div className='form-group col-md-3'>
                                    <label for='weight'>Weight</label>
                                    <input type='text' className='form-control' id='weight'></input>
                                    <small id='weightHelp' class='form-text text-muted'>input weight in pounds</small>
                                </div>
                                <div className='form-group col-md-3'>
                                    <label for='height'>Height</label>
                                    <input type='text' className='form-control' id='height'></input>
                                    <small id='heightHelp' class='form-text text-muted'>input height in feet</small>
                                </div>
                            </div>

                            <div className='form-row justify-content-center'>
                                <button type='submit' className='btn btn-primary col-md-6'>Create User</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;