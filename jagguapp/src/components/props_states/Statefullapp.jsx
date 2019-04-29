import React from 'react'
import {Message} from "./Message"
import Grid from "./Grid";
import TestInput from "./TestInput";


class Statefullapp extends React.Component{
    constructor(props){
        super(props);
        this.state= {data:[{"id":"5053","employee_name":"test_1","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5060","employee_name":"ssssssxsswdsissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5062","employee_name":"Dinesh Kannan_Demo1","employee_salary":"1278","employee_age":"27","profile_image":""},{"id":"5063","employee_name":"ssssssxsswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5064","employee_name":"Shaista1","employee_salary":"10000","employee_age":"22","profile_image":""},{"id":"5066","employee_name":"PPstit22","employee_salary":"12322","employee_age":"24","profile_image":""},{"id":"5069","employee_name":"ssssssxsssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5070","employee_name":"ssssssxsssssssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5071","employee_name":"ssssssxsccswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5072","employee_name":"ssssssxsswsssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5073","employee_name":"ssssssfarexsssssssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5075","employee_name":"test1","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5083","employee_name":"test_2","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5084","employee_name":"test_3","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5085","employee_name":"robban2","employee_salary":"123","employee_age":"24","profile_image":""},{"id":"5087","employee_name":"hejhej","employee_salary":"123","employee_age":"24","profile_image":""},{"id":"5089","employee_name":"2019_04_29_01_06_14","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5090","employee_name":"jbghuj","employee_salary":"34344345","employee_age":"28","profile_image":""},{"id":"5092","employee_name":"2019_04_29_01_09_14","employee_salary":"88888","employee_age":"88","profile_image":""},{"id":"5093","employee_name":"2019_04_29_01_10_48","employee_salary":"77777","employee_age":"77","profile_image":""},{"id":"5094","employee_name":"asdaaf","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5095","employee_name":"asca","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5096","employee_name":"ganeeh","employee_salary":"234283744","employee_age":"34","profile_image":""},{"id":"5097","employee_name":"dca","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5098","employee_name":"pl","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5099","employee_name":"arne","employee_salary":"123","employee_age":"24","profile_image":""},{"id":"5100","employee_name":"jejja","employee_salary":"123","employee_age":"24","profile_image":""},{"id":"5102","employee_name":"ssssssasxsccswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5103","employee_name":"ssssssasdsaxsswsssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5104","employee_name":"sssssssfffarexsssssssswdssissstest1111","employee_salary":"28","employee_age":"28","profile_image":""},{"id":"5105","employee_name":"","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5111","employee_name":"jejfja","employee_salary":"123","employee_age":"24","profile_image":""},{"id":"5116","employee_name":"jaysu","employee_salary":"12231133","employee_age":"27","profile_image":""},{"id":"5120","employee_name":"samay 938d00c7-1454-4481-9744-6c15940027d6 ","employee_salary":"123","employee_age":"33","profile_image":""},{"id":"5123","employee_name":"test222","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5124","employee_name":"Test101","employee_salary":"1231","employee_age":"121","profile_image":""},{"id":"5125","employee_name":"Test111","employee_salary":"12341","employee_age":"1231","profile_image":""},{"id":"5126","employee_name":"Test121","employee_salary":"23451","employee_age":"2341","profile_image":""},{"id":"5128","employee_name":"{{name_data1}}","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5129","employee_name":"dataprac1}","employee_salary":"6000","employee_age":"56","profile_image":""},{"id":"5130","employee_name":"dataprac11","employee_salary":"6000","employee_age":"56","profile_image":""},{"id":"5132","employee_name":"te1st","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5134","employee_name":"dataprac12","employee_salary":"6000","employee_age":"56","profile_image":""},{"id":"5135","employee_name":"as","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5136","employee_name":"te11st","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5137","employee_name":"ddda","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5138","employee_name":"asdadda","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5140","employee_name":"ssafz","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5141","employee_name":"te11s1t","employee_salary":"1123","employee_age":"213","profile_image":""},{"id":"5142","employee_name":"{{name}}","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5147","employee_name":"Practi001","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5148","employee_name":"ganesh","employee_salary":"15990","employee_age":"21","profile_image":""},{"id":"5150","employee_name":"Jaysuuuuu","employee_salary":"1312","employee_age":"23","profile_image":""},{"id":"5152","employee_name":"Govalu","employee_salary":"10000","employee_age":"35","profile_image":""},{"id":"5154","employee_name":"bhh","employee_salary":"21","employee_age":"12","profile_image":""},{"id":"5155","employee_name":"asd","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5156","employee_name":"visco","employee_salary":"500","employee_age":"99","profile_image":""},{"id":"5158","employee_name":"Practi003","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5160","employee_name":"asaa","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5161","employee_name":"ad","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5162","employee_name":"wde","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5164","employee_name":"adsd","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5165","employee_name":"Practi004","employee_salary":"0","employee_age":"0","profile_image":""},{"id":"5166","employee_name":"asdasd","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5167","employee_name":"a","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5169","employee_name":"asdaa","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5170","employee_name":"d","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5172","employee_name":"dd","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5178","employee_name":"ddd","employee_salary":"15000","employee_age":"25","profile_image":""},{"id":"5179","employee_name":"test","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5185","employee_name":"Roja","employee_salary":"1000000","employee_age":"24","profile_image":""},{"id":"5186","employee_name":"Dinesh Kannan_Demo5","employee_salary":"1278","employee_age":"27","profile_image":""},{"id":"5187","employee_name":"cisco","employee_salary":"2000","employee_age":"88","profile_image":""},{"id":"5197","employee_name":"1234567890","employee_salary":"123","employee_age":"0","profile_image":""},{"id":"5198","employee_name":"1234","employee_salary":"123","employee_age":"0","profile_image":""},{"id":"5202","employee_name":"Rojaaa","employee_salary":"34344345","employee_age":"23","profile_image":""},{"id":"5203","employee_name":"23","employee_salary":"0","employee_age":"25","profile_image":""},{"id":"5204","employee_name":"Dinkan2912!","employee_salary":"5000","employee_age":"30","profile_image":""},{"id":"5218","employee_name":"gdgfh","employee_salary":"34344345","employee_age":"25","profile_image":""},{"id":"5224","employee_name":"test123","employee_salary":"123","employee_age":"23","profile_image":""},{"id":"5228","employee_name":"2019_04_29_02_23_01","employee_salary":"123456","employee_age":"23","profile_image":""}],
        inputText:"Jagadeesh"}
    }

    

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
           <div>
              <Message data="Verizon grabbed new React Project"/>
             <h3 className="bg-">Developers Enrolled</h3>
              <table  
              className='table table-light table-striped'>
                 <tbody>
                 <tr className="table-danger">
                    <th><b>ID</b></th>
                    <th><b>Name</b></th>
                    <th><b>Salary</b></th>
                    <th><b>Age</b></th>
                </tr>
                    {this.state.data.map((person, index) =>
                        <TableRow key = {index} data = {person} />)
                    }
                 </tbody>
              </table>  
              <br></br>
              <hr></hr>
              <Grid></Grid>
               <div>TestInput comonets inputText is : {this.state.inputText} </div>     
              <TestInput handleChange={this.handleChange} inputText={this.state.inputText}></TestInput>
           </div>
        );

    }
}


const TableRow = (props) =>{
    return (
         <tr>
             <td>{props.data.id}</td>
             <td>{props.data.employee_name}</td>
             <td>{props.data.employee_salary}</td>
             <td>{props.data.employee_age}</td>
         </tr>
    )
}

export default Statefullapp;
