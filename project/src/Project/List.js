import React, { Component } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

class List extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      message: "",
    };
  }
  listUser = () => {
    fetch("http://localhost:3001/api/users")
      .then((responser) => responser.json())
      .then((usr) => this.setState({ users: usr }));
  };

  componentDidMount() {
    this.listUser();
  }

  // handleRemoveItem(uid) {
  handleRemoveItem = (uid) => {
    console.log(uid);
    fetch("http://localhost:3001/api/users/delete", {
      method: "delete",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `_id=${uid}`,
    });
    this.listUser();
    //to refresh the browers not use at this project
    //  window.location.reload(false);
    //
    this.props.history.push("/list");
    this.setState({
      message: "This user was deleted successfully!",
    });
  };

  handleUpdateItem = (uid) => {
    console.log(uid);

    fetch("http://localhost:3001/api/users/update", {
      method: "update",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `_id=${uid}`,
    });

    //to refresh the browers not use at this project

    //
    this.props.history.push(`/update/${uid}`);
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h4>{this.state.message}</h4>

        <Table border="1" striped bordered hover size="sm">
          <thead>
            <tr>
              <td>ID</td>
              <td className="txts">Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((u, index) => (
              <tr>
                <td>{u._id}</td>
                <td>{u.fullname}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.salary}</td>
                <td>{u.role}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={this.handleRemoveItem.bind(this, u._id)}
                  >
                    {" "}
                    save
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={this.handleRemoveItem.bind(this, u._id)}
                  >
                    Delete
                  </Button>
                  | Update
                  <NavLink to={`/updateEmp/${u._id}`}>Update</NavLink>
                  {/* <a href="/update/:id">Update</a> */}
                  <Button
                    variant="outline-warning"
                    onClick={this.handleUpdateItem}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
            <tr class="bg-warning">
              <td>ID</td>
              <td>Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
            <tr class="bg-success">
              <td>ID</td>
              <td>Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
            <tr class="bg-info">
              <td>ID</td>
              <td>Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
            <tr class="bg-warning">
              <td>ID</td>
              <td>Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
            <tr class="bg-primary">
              <td>ID</td>
              <td>Full Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Salary</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default List;
