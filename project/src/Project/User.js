import React, { Component } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
class User extends Component {
  state = {
    fullname: "",
    username: "",
    email: "",
    salary: null,
    role: "",
  };
  createUser = (e) => {
    this.setState({
      fullname: "",
      username: "",
      email: "",
      salary: "",
      role: "",
    });
    e.preventDefault();

    fetch(
      "http://localhost:3001/api/users/create",

      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: `fullname=${this.state.fullname}&username=${this.state.username}&email=${this.state.email}&salary=${this.state.salary}&role=${this.state.role}`,
      }
    );
  };

  handleChnage = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  };
  // handleClick = () => {
  //   // this.setState({
  //   //   name: "Emcee",
  //   //   email: "hemuadhikari1xyz123@gmail.com",
  //   //   salary: "30000",
  //   //   role: "Manger",
  //   var fullname = this.state.fullname;
  //   var username = this.state.username;
  //   var email = this.state.email;
  //   var salary = this.state.salary;
  //   var role = this.state.role;

  //   var use = { fullname: fullname };
  //   var use1 = { username: username };
  //   var use2 = { email: email };
  //   var use3 = { salary: salary };
  //   var use4 = { role: role };
  //   alert(
  //     JSON.stringify(use) +
  //       JSON.stringify(use1) +
  //       JSON.stringify(use2) +
  //       JSON.stringify(use3) +
  //       JSON.stringify(use4)
  //   );
  // };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <form onSubmit={this.createUser}>
          <Table border="2" striped bordered hover size="sm">
            <h3>
              <lable>
                <br />
                Full Name:{"     "}
                {"     "}
                {"     "}
                <input
                  type="text"
                  name="fullname"
                  placeholder="enter your first name.."
                  value={this.state.fullname}
                  onChange={this.handleChnage}
                />
              </lable>
              <lable>
                <br />
                <br />
                User Name:{"     "}
                {"     "}
                {"     "}
                <input
                  type="text"
                  name="username"
                  placeholder="enter your last name.."
                  value={this.state.username}
                  onChange={this.handleChnage}
                />
              </lable>
              <br /> <br />
              <label>
                Email:{"     "}
                {"     "}
                {"     "}
                <input
                  type="text"
                  name="email"
                  placeholder="enter your email.."
                  value={this.state.email}
                  onChange={this.handleChnage}
                />
              </label>
              <br /> <br />
              <label>
                salary: {"     "}
                {"     "}
                {"     "}
                <input
                  type="number"
                  name="salary"
                  placeholder="enter your salary.."
                  value={this.state.salary}
                  onChange={this.handleChnage}
                  maxlength="11"
                />
              </label>
              <br /> <br />
              <label>
                Role: {"     "}
                {"     "}
                {"     "}
                <input
                  type="text"
                  name="role"
                  placeholder="enter your role.."
                  value={this.state.role}
                  onChange={this.handleChnage}
                />
              </label>
            </h3>
            <br />
            <input type="submit" value="create" />

            <br />
            <br />
            <br />
          </Table>
        </form>
      </div>
    );
  }
}

export default User;
