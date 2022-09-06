import React, { Component } from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(comments) {
    if (comments !== null) {
      const comment = comments.map((comment) => {
        return (
          <ul className="list-unstyled" key={comment.id}>
            <li>{comment.comment}</li>
            <li>{comment.author} {comment.date}</li>
          </ul>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comment}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const dish = this.props.dish;
    if (dish === null) {
      return <div></div>;
    }
    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(dish.comments)}
      </div>
    );
  }
}

export default Dishdetail;
