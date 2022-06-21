import React from 'react';
import {Icon, Row, Col, Card,CardTitle} from 'react-materialize';


const Index = ({image, children, link}) => {
    return (
        <div>
  <Row>
  <Col
    m={12}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href={link} style={{color:"#e01860"}}>Click to view their website</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={image}  className="ngoImg"/> }
      horizontal
    >
      {children}
    </Card>
  </Col>
</Row>
        </div>
    ) 
}

export default Index;