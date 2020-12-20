// import React from 'react';
// import axios from 'axios';

// class GetRequestErrorHandling extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             borough: null,
//             errorMessage: null
//         };
//     }

//     componentDidMount() {
//         // GET request using axios with error handling
//         axios.get('https://data.cityofnewyork.us/resource/f7b6-v6v3.json')
//             .then(response => this.setState({ borough: response.data.total }))
//             .catch(error => {
//                 this.setState({ errorMessage: error.message });
//                 console.error('There was an error!', error);
//             });
//     }

//     render() {
//         const { errorMessage } = this.state;
//         return (
//             <div className="card text-center m-3">
//                 <h5 className="card-header">GET Request with Error Handling</h5>
//                 <div className="card-body">
//                     Error message: {errorMessage}
//                 </div>
//             </div>
//         );
//     }
// }

// export { GetRequestErrorHandling }; 