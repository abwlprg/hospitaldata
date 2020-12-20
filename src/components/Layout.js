import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CustomeTextField from './CustomTextField';
// import SelectBorough from './SelectBorough';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalName: '',
            hospitalAddress: '',
            hospitalBorough: '',
            hospitalType: '',
            hospitalZipcode: ''
        }
        this.textFieldsHandler = this.textFieldsHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    //saves to the MOdels 
    handleSubmit(event){ 
        const hospitalSearch = {
            facility_name: this.state.hospitalName,
            address: this.state.hospitalAddress,  
            borough: this.state.hospitalBorough,
            facility_type : this.state.hospitalType,
            zipCode : this.state.hospitalZipcode
        };
        fetch('/api/createHospital',{
            method: 'POST',
            body: JSON.stringify(hospitalSearch),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then((response) =>{
            if(response.ok){
                console.log('The Hospital Search was saved');
            } else {
                console.log('Problem when saving the search');
            }
        });
        event.preventDefault();
        console.log('Create a new Hospital Search')
    }

    handleChange(event){
        if(event.target.value === 'Brooklyn'){
            this.setState({
                borough: event.target.value = 'Brooklyn'
            });
            console.log('Borough: ' + this.state.hospitalBorough)
        }
        if(event.target.value === 'Bronx'){
            this.setState({
                borough: event.target.value = 'Bronx'
            });
            console.log('Borough: ' + this.state.hospitalBorough)
        }
        if(event.target.value === 'Queens'){
            this.setState({
                borough: event.target.value = 'Queens'
            });
            console.log('Borough: ' + this.state.hospitalBorough)
        }
        if(event.target.value === 'Manhattan'){
            this.setState({
                borough: event.target.value = 'Manhattan'
            });
            console.log('Borough: ' + this.state.hospitalBorough)
        }
    }

    textFieldsHandler(event) {
        if(event.target.name === 'hospitalZipcode'){
            this.setState({
                hospitalZipcode: event.target.value
            });
            console.log('Hospital Zipcode: ' + this.state.hospitalZipcode)
        }

        if(event.target.name  === 'hospitalName'){
            this.setState({
                hospitalName: event.target.value
            });
            console.log('Hospital Name: ' + this.state.hospitalName)
        }
        if(event.target.name  === 'hospitalType'){
            this.setState({
                hospitalType: event.target.value
            });
            console.log('Hospital Type ' + this.state.hospitalType)
        }

        if(event.target.name  === 'hospitalBorough'){
            this.setState({
                hospitalBorough: event.target.value
            });
            console.log('Hospital Borough: ' + this.state.hospitalBoroug)
        }
        if(event.target.name  === 'hospitalAddress'){
            this.setState({
                hospitalAddress: event.target.value
            });
            console.log('Hospital Address: ' + this.state.hospitalAddress)
        }
    }

    // componentDidMount() {
    //     axios
    //      .get('https://data.cityofnewyork.us/resource/f7b6-v6v3.json')
    //      .then(response => { 
    //           console.log(response)
    //           this.setState({
    //               schemas: response
    //           });
    //      })
    //      .catch(error => console.log(error.response));
    // }


    render() {
        return (
            <Form
            onSubmit={this.handleSubmit}
            >
            <CustomeTextField
                customId='hospital-name'
                label='Hospital Name'
                placeholder='Type in the Name'
                name='hospitalName'
                val={this.state.hospitalName}
                inputHandler={this.textFieldsHandler}
                text='Enter the full Hospital'/>

            <CustomeTextField
                customId='hospital-type'
                label='Hospital Type'
                placeholder='Type in the Hospital Type'
                name='hospitalType'
                val={this.state.hospitalType}
                inputHandler={this.textFieldsHandler}
                text='Enter the Hospital Type'/>

            <CustomeTextField
                customId='hospital-borough'
                label='Hospital Borough'
                placeholder='Type in the Borough'
                name='hospitalBorough'
                val={this.state.hospitalBorough}
                inputHandler={this.textFieldsHandler}
                text='Enter the Hospital Borough'/>

            {/* <SelectBorough customId='hospital-borough'
                label='Hospital Borough'
                placeholder='Select the Borough'
                name='hospitalBorough'
                val={this.state.value}
                onChange={this.handleChange}/> */}


            <CustomeTextField
                customId='hospital-address'
                label='Hospital Address'
                placeholder='Type in the Address'
                name='hospitalAddress'
                val={this.state.hospitalAddress}
                inputHandler={this.textFieldsHandler}
                text='Enter the Address'/>
            <CustomeTextField
                customId='hospital-zipcode'
                label='Hospital Zipcode'
                placeholder='Type in the Zipcode'
                name='hospitalZipcode'
                val={this.state.hospitalZipcode}
                inputHandler={this.textFieldsHandler}
                text='Enter the Zipcode'/>

            <Button
            type='submit'
            variant='primary'
            size='lg'>
            Create A Hospital Search
            </Button>

            </Form>
            
        );
    }
}