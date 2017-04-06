import React from 'react';
import {getUsers} from '../../api/userApi';

class UsersTable extends React.Component {
  constructor(){
    super();

    this.state = {
      users: []
    };

    getUsers()
      .then(
        result => {
          this.setState({
            users: result
          });

          console.log(this.state.users);

        }
      );




  }

  render(){
    return(

      <table>
        <thead>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </thead>
        <tbody>

        {this.state.users.map(user=> <UserListRow key={user.id} user={user} />)}

        </tbody>
      </table>

    );
  }
}

export default UsersTable;


const UserListRow = ({user}) => {
  return (
    <tr>
      <td><a href="#!" className="delete">Delete</a></td>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: React.PropTypes.object.isRequired
};


