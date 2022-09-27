import React, { Component } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.match.params.id);

    this.state = {
      users: [],
      _id: this.props.match.params.id,
      fullname: "",
      username: "",
      salary: 0.0,
      role: "",
      email: "",
      msg: "",
    };
  }

  listUser = () => {
    fetch("http://localhost:3001/api/users")
      .then((responser) => responser.json())
      .then((usr) => this.setState({ users: usr }));
  };

  componentDidMount() {
    this.listUser();
    console.log(this.state._id);
    let url = `http://localhost:3001/api/updateEmp/${this.state._id}`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((us) =>
          this.setState({
            _id: us._id,
            fullname: us.fullname,
            username: us.username,
            email: us.email,
            salary: us.salary,

            role: us.role,
          })
        );
    } catch (err) {
      console.log(err);
    }
  }
  //127.0.0.1

  beforeUpdate(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  updateUser(event) {
    event.preventDefault();
    fetch("http://localhost:3001/api/users/update", {
      method: "put",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `_id=${this.state._id}&fullname=${this.state.fullname}&username=${this.state.username}&salary=${this.state.salary}&role=${this.state.role}&email=${this.state.email}`,
    });
    this.setState({
      msg: "Employee Addeed Successfully.",
      _id: "",
      fullname: "",
      username: "",
      salary: "",
      role: "",
      email: "",
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />

        <h4>{this.state.msg}</h4>

        <form onSubmit={this.updateUser.bind(this)}>
          <br />

          <p>
            ID:
            <input
              type="text"
              name="_id"
              value={this.state._id}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>

          <p>
            Fullname:
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>
          <p>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>
          <p>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>
          <p>
            Salary:
            <input
              type="text"
              name="salary"
              value={this.state.salary}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>
          <p>
            role:
            <input
              type="text"
              name="role"
              value={this.state.role}
              onChange={this.beforeUpdate.bind(this)}
            />
          </p>

          <p>
            <input type="submit" value="Update" />
          </p>
          <br />
        </form>
      </div>
    );
  }
}
export default EmployeeUpdate;
