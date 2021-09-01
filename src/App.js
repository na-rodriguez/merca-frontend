import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useGetCharacters } from "./useRequest";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";

import { Button, Container, Row, Col, Form, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const { data, error, isLoading, isSuccess } = useGetCharacters();
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Container>
      <Row>
          <h1>Rick and Morty characters</h1>
      </Row>
      <Router>
        <Route path="/" exact>
          {
            isSuccess &&
            <Form>
              <Form.Group>
              <input className="text" type="text" placeholder="Search..."
                  onChange={ event => setSearch(event.target.value)}
              />
              <Col md>
                <Button onClick={() => setOrder('DESC')} >DESC</Button>
                <Button onClick={() => setOrder('ASC')} >ASC</Button>
              </Col>
              <CharacterList
                characters={ data.results}
                searchTerm={search}
                order={order}
              />
              </Form.Group>
            </Form>
          }
        </Route>
        <Route path="/single-character/:id">
          <CharacterDetail />
        </Route>
      </Router>
    </Container>
  );
}

export default App;
