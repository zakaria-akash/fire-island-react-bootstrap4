import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderLeader({ leader }) {
  if (leader == null) {
    return <div></div>;
  } else {
    return (
      <div key={leader.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object src={leader.image} alt={leader.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{leader.name}</Media>
            <h3>{leader.designation}</h3>
            <p>{leader.description}</p>
          </Media>
        </Media>
      </div>
    );
  }
}

function About(props) {
  const leaders = props.leaders.map((leader) => {
    return (
      <div key={leader.id}>
        <RenderLeader leader={leader} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <hr />
          <p>
            Started in 2020,{" "}
            <strong>
              <i>Fire Island</i>
            </strong>{" "}
            quickly established itself as a culinary icon par excellence in
            Bangladesh. With its unique brand of world fusion cuisine that can
            be found nowhere else, it enjoys patronage from the A-list clientele
            in Bangladesh. Featuring four of the best three-star Michelin chefs
            in Bangladesh, you never know what will arrive on your plate the
            next time you visit us.
          </p>
          <br />
          <br />
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt class="col-6">Started</dt>
                <dd class="col-6">December 3, 2020.</dd>
                <dt class="col-6">Major Stake Holder</dt>
                <dd class="col-6">BD Fine Foods Inc.</dd>
                <dt class="col-6">Last Year's Turnover</dt>
                <dd class="col-6">&#2547;9,50,375</dd>
                <dt class="col-6">Employees</dt>
                <dd class="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p class="mb-0">
                  “A recipe has no soul. You, as the cook, must bring soul to
                  the recipe.”
                </p>
                <footer class="blockquote-footer">
                  Thomas Keller,
                  <cite title="Source Title">
                    American chef, restaurateur, and cookbook writer.
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
        <hr />
          <Media list>{leaders}</Media>}
        </div>
      </div>
    </div>
  );
}

export default About;