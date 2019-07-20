import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import profile from "../../profile";
import "./Posts.css";

export default class Posts extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {profile.posts.map(function(post, i) {
              // moment.locale('en');

              return (
                <div key={i}>
                  <Media className="postArea mt-3 p-3">
                    <Media left top className="postImgDiv mr-3 ml-3">
                      <Media
                        className="postImg"
                        object
                        src={post.img}
                        alt={post.title}
                      />
                    </Media>
                    <Media body>
                      <Media heading>
                        <span>{post.title}</span>
                      </Media>
                      <span>{post.text}</span>
                    </Media>
                  </Media>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
