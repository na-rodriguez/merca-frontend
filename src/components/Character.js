import React from "react";
import { Link } from "react-router-dom";

import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Character({ character }) {
  const { id, name } = character;
  return (
    <Card>
      <Link to={`/single-character/${id}`}><Card.Title>{name}</Card.Title></Link>
    </Card>
  );
}
