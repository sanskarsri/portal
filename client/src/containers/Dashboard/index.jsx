import React, { Component } from "react";
import Layout from "../../components/Layout";

class Dashboard extends Component {
  state = {
    users: [],
    a_count: 0,
    b_count: 0,
    c_count: 0,
    d_count: 0,
  };

  
  a_count=0;
  b_count=0;
  c_count=0;
  d_count=0;

  handleAuth = async () => {
    const res = await fetch("/api/isUserAuth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.auth == "false") 
    // this.props.history.push("/dashboard");
      this.props.history.push("/login");
  };

  getUsers = async () => {
    const res = await fetch("/api/isUserAuth/getusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.success == true) 
    {
      
      this.setState({
        users :  data.users,
        a_count: data.a_count,
        b_count: data.b_count,
        c_count: data.c_count,
        d_count: data.d_count,
      });
    }
  };

  componentDidMount()
  {
    this.handleAuth();
    this.getUsers();
  }

  render() {

    return (
      <>
        <Layout>
          <div className="register">
            <div className="register__title">
              <h4>Dashboard</h4>
            </div>
            <div className="register__title">Batch 5 - 6 AM</div>
            {this.state.a_count > 0 ? (
              <div className="d-flex flex-wrap" style={{ gridGap: "30px",marginBottom:"20px" }}>
                {this.state.users.map((ele,i) =>
                  ele.batch === "1" ? (
                    <div
                      key={i}
                      className="Button Button--brand--uncheck"
                      style={{ minWidth: "auto" }}
                    >
                      <p>Email - {ele.email}</p>
                      <p style={{ marginBottom: "0px" }}>
                        Contact - {ele.phone}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div className="register__title">
              <p>No one registered in this slot</p>
              </div>
            )}
            <div className="register__title">Batch 6 - 7 AM</div>
            {this.state.b_count > 0 ? (
              <div className="d-flex flex-wrap" style={{ gridGap: "30px",marginBottom:"20px" }}>
                {this.state.users.map((ele,i) =>
                  ele.batch === "2" ? (
                    <div
                      key={i}
                      className="Button Button--brand--uncheck"
                      style={{ minWidth: "auto" }}
                    >
                      <p>Email - {ele.email}</p>
                      <p style={{ marginBottom: "0px" }}>
                        Contact - {ele.phone}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div className="register__title">
              <p>No one registered in this slot</p>
              </div>
            )}
            <div className="register__title">Batch 7 - 8 AM</div>
            {this.state.c_count > 0 ? (
              <div className="d-flex flex-wrap" style={{ gridGap: "30px",marginBottom:"20px" }}>
                {this.state.users.map((ele,i) =>
                  ele.batch === "3" ? (
                    <div
                      key={i}
                      className="Button Button--brand--uncheck"
                      style={{ minWidth: "auto" }}
                    >
                      <p>Email - {ele.email}</p>
                      <p style={{ marginBottom: "0px" }}>
                        Contact - {ele.phone}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div className="register__title">
              <p>No one registered in this slot</p>
              </div>
            )}
            <div className="register__title">Batch 5 - 6 PM</div>
            {this.state.d_count > 0 ? (
              <div className="d-flex flex-wrap" style={{ gridGap: "30px",marginBottom:"20px" }}>
                {this.state.users.map((ele,i) =>
                  ele.batch === "4" ? (
                    <div
                      key={i}
                      className="Button Button--brand--uncheck"
                      style={{ minWidth: "auto" }}
                    >
                      <p>Email - {ele.email}</p>
                      <p style={{ marginBottom: "0px" }}>
                        Contact - {ele.phone}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <div className="register__title">
              <p>No one registered in this slot</p>
              </div>
            )}
          </div>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
