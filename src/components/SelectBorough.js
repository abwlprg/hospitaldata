// import React from 'react';
// import Form from 'react-bootstrap/Form';
// //Was making a dynamic dropdown menu since spelling out names never truly works.
// export default class SelectBorough extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           borough: [],
//         };
//       }

//       componentDidMount() {
//         let allBoroughs = [];
//         fetch('https://data.cityofnewyork.us/resource/f7b6-v6v3.json?borough=Manhattan')
//             .then(response => {
//                 return response.json();
//             }).then(data => {
//               allBoroughs = data.results.map((boroughs) => {
//                 return boroughs
//             });
//             console.log(allBoroughs);
//             this.setState({
//                 boroughs: allBoroughs,
//             });
//         });
//     }

//       render() {
//         let borough = this.props.state.boroughs;
//         let optionItems = boroughs.map((borough) =>
//                 <option key={borough.name}>{borough.name}</option>
//             );
//           return (
//             <Form>
//             <Form.Group>
//                 <Form.Label>Borough Select</Form.Label>
//                 <Form.Control as="select"
//                 >
//                    {optionItems}
//                 </Form.Control>
//             </Form.Group>
//             </Form>
//         );
//     }
// }