import React, { Component } from "react";
import Layout from "../../components/Layout";
import Helper from "./Helper";

class Dashboard extends Component {

  state={
    users: [],
  };

  handleAuth = async () => {

  const res = await fetch("/api/isUserAuth" , {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  });

  const data = await res.json();
      if(data.auth == "true")
    this.props.history.push("/dashboard");
    else 
    this.props.history.push("/login");
  };

  getUsers = async () => {
  
    const res = await fetch("/api/isUserAuth/getusers" , {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    });

  const data = await res.json();
    if(data.success == true)
      this.state.users=data.data;
  };

  

  render() {

    return (
      <>
      <Helper handleAuth={this.handleAuth} getUsers={this.getUsers} />
      <Layout>
        <div className="register">
          <div className="register__title">Dashboard</div>
          {/* <div className="register__title">Batch</div> */}
        </div>
      </Layout>
      </>
    );
  }
}

export default Dashboard;
