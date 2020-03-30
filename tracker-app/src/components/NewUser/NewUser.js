import React from 'react';
import axios from 'axios';

class NewUser extends React.Component {

    constructor(props) {
      super(props);
      this.state =  {
          fName: '',
          lName: '',
          emailAddress: '',
          addressNum: '',
          street: '',
          city: '',
          state: '',
          zipCode: '',
          dateOfBirth: '',
          height: '',
          weight: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        axios.post('/api/user', {
            fName: this.state.fName,
            lName: this.state.lName,
            addressNum: this.state.addressNum,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            height: this.state.height,
            weight: this.state.weight,
            dateOfBirth: this.state.dateOfBirth,
            emailAddress: this.state.emailAddress
        }).then(res => {
            console.log('DATA SENT - ' + res);
        });
    }

    render() {
        return(
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='card-title'>Create New User</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='firstName'>First Name</label>
                                        <input type='text' className='form-control' name='fName' value={this.state.fName} onChange={this.handleChange}></input>
                                    </div>
                                </div>
    
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='lastName'>Last Name</label>
                                        <input type='text' className='form-control' name='lName' value={this.state.lName} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                    
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' className='form-control' name='emailAddress' value={this.state.emailAddress} onChange={this.handleChange}></input>
                                    </div>
                                </div>
                                    
                                <div className='form-row'>
                                    <div className='form-group col-md-3'>
                                        <label htmlFor='addressNumber'>Address Number</label>
                                        <input type='text' className='form-control' name='addressNum' value={this.state.addressNum} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='street'>Street</label>
                                        <input type='text' className='form-control' name='street' value={this.state.street} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label htmlFor='city'>City</label>
                                        <input type='text' className='form-control' name='city' value={this.state.city} onChange={this.handleChange}></input>
                                    </div>
                                </div>
    
                                <div className='form-row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='state'>State</label>
                                        <select className='form-control' name='state' value={this.state.state} onChange={this.handleChange}>
                                            <option value='none'>Choose a State</option>    
                                            <option value='AL'>AL</option>    
                                            <option value='AK'>AK</option>
                                            <option value='AZ'>AZ</option>
                                            <option value='AR'>AR</option>
                                            <option value='CA'>CA</option>
                                            <option value='CO'>CO</option>
                                            <option value='CT'>CT</option>
                                            <option value='DE'>DE</option>
                                            <option value='FL'>FL</option>
                                            <option value='GA'>GA</option>
                                            <option value='HI'>HI</option>
                                            <option value='ID'>ID</option>
                                            <option value='IL'>IL</option>
                                            <option value='IN'>IN</option>
                                            <option value='IA'>IA</option>
                                            <option value='KS'>KS</option>
                                            <option value='KY'>KY</option>
                                            <option value='LA'>LA</option>
                                            <option value='ME'>ME</option>
                                            <option value='MD'>MD</option>
                                            <option value='MA'>MA</option>
                                            <option value='MI'>MI</option>
                                            <option value='MN'>MN</option>
                                            <option value='MS'>MS</option>
                                            <option value='MO'>MO</option>
                                            <option value='MT'>MT</option>
                                            <option value='NE'>NE</option>
                                            <option value='NV'>NV</option>
                                            <option value='NH'>NH</option>
                                            <option value='NJ'>NJ</option>
                                            <option value='NM'>NM</option>
                                            <option value='NY'>NY</option>
                                            <option value='NC'>NC</option>
                                            <option value='ND'>ND</option>
                                            <option value='OH'>OH</option>
                                            <option value='OK'>OK</option>
                                            <option value='OR'>OR</option>
                                            <option value='PA'>PA</option>
                                            <option value='RI'>RI</option>
                                            <option value='SC'>SC</option>
                                            <option value='SD'>SD</option>
                                            <option value='TN'>TN</option>
                                            <option value='TX'>TX</option>
                                            <option value='UT'>UT</option>
                                            <option value='VT'>VT</option>
                                            <option value='VA'>VA</option>
                                            <option value='WA'>WA</option>
                                            <option value='WV'>WV</option>
                                            <option value='WI'>WI</option>
                                            <option value='WY'>WY</option>
                                        </select>
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='zipCode'>Zip Code</label>
                                        <input type='text' className='form-control' name='zipCode' value={this.state.zipCode} onChange={this.handleChange}></input>
                                    </div>
                                </div>
    
                                <div className='form-row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='birthDate'>Birth Date</label>
                                        <input type='date' className='form-control' name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleChange}></input>
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label htmlFor='weight'>Weight</label>
                                        <input type='text' className='form-control' name='weight' value={this.state.weight} onChange={this.handleChange}></input>
                                        <small id='weightHelp' className='form-text text-muted'>input weight in pounds</small>
                                    </div>
                                    <div className='form-group col-md-3'>
                                        <label htmlFor='height'>Height</label>
                                        <input type='text' className='form-control' name='height' value={this.state.height} onChange={this.handleChange}></input>
                                        <small id='heightHelp' className='form-text text-muted'>input height in feet</small>
                                    </div>
                                </div>
    
                                <div className='form-row justify-content-center'>
                                    <button type='submit' className='btn btn-primary col-md-6' value='Submit'>Create User</button>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NewUser;