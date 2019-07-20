import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Profile.css";
import Posts from "../Posts";
import classnames from "classnames";
import Followers from "../Followers";
import ListOfPages from "../ListOfPages";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      clicked: true
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Container>
        <div className="backgroundProfileImgDiv">
          <img
            className="backgroundProfileImg"
            src="https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg"
            alt=""
          />
        </div>
        <div className="profileHeader">
          <Row className="profileHeaderGrid">
            <Col xs="6" sm="4" md="2" className="profile_logo_col">
              <div className="profile_logo_container">
                <img
                  src="https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg"
                  className="profile_logo"
                  alt="Logo"
                />
              </div>
            </Col>
            <Col xs={{ sise: 12, offset: 1 }} sm="7" md="9">
              <Row>
                <Col xs="12" lg="7">
                  <div className="profile_info">
                    <span>Name </span>
                    <br />
                    <span>@NameName</span>
                  </div>
                </Col>

                <Col xs="12" lg="5">
                  <button
                    className="btn btn-info mt-4"
                    onClick={() =>
                      this.setState({ clicked: !this.state.clicked })
                    }
                  >
                    {this.state.clicked ? "Follow" : "Unfollow"}
                  </button>
                </Col>
                <Col>
                  <div className="postsToggle mt-2">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "1"
                          })}
                          onClick={() => {
                            this.toggle("1");
                          }}
                        >
                          <span className="navText">Posts</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "2"
                          })}
                          onClick={() => {
                            this.toggle("2");
                          }}
                        >
                          <span className="navText">Followers</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs="10" lg="9">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Posts />
              </TabPane>
              <TabPane tabId="2">
                <Followers />
              </TabPane>
            </TabContent>
          </Col>
          <Col xs="2" lg="3">
            <ListOfPages />
          </Col>
        </Row>
      </Container>
    );
  }
}
