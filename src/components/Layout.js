import React from 'react';
import CustomeTextField from './CustomTextField'
import CustomTextArea from './CustomTextArea'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalName: '',
            hospitalAddress: '',
            hospitalBorough: '',
            hospitalType: '',
            hospitalDescription: '',
            hospitalZipcode: ''
        }
        this.textFieldsHandler = this.textFieldsHandler.bind(this);
    }
    textFieldsHandler(event) {
        if(event.target.name === 'hospitalDescription'){
            this.setState({
                hospitalDescription: event.target.value
            });
            console.log('Hospital Description: ' + this.state.hospitalDescription)
        }
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

    render() {
        return (
            <div>
            <CustomTextArea 
                label='Hospital Description'
                name='hospitalDescription'
                val={this.state.hospitalDescription}
                inputHandler={this.textFieldsHandler}/>
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
            </div>
            
        );
    }
}