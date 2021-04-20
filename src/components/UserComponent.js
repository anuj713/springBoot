import React from 'react';
import UserService from '../services/UserService';

export default class UserComponent extends React.Component{
constructor(props)
{
    super(props)
     this.state ={
    users:[]
         }

}
componentDidMount(){

    UserService.getUsers().then((response)=>{
this.setState({users:response.data})

    });
}

render (){
    return(
<div>
<h1 className="text-center">USERS INFORMATION PORTOL</h1>
<hr/>
<hr/>
<center><table className="table-striped">
<thead>
    <tr>
    
        <td> <b>** USER ID** </b> </td>
        
        <td> <b> **USER NAME** </b></td>
        
        <td> <b>**ADDRESS**</b></td>
        
    </tr>
</thead>
<tbody>

    {

        this.state.users.map(
user =>
<tr key={user.id}>
        <td>{user.id} </td>
        <td>{user.name} </td>
        <td>{user.address} </td>

</tr>


        )
    }
</tbody>

</table>
</center>
</div>
    )

}

}


 