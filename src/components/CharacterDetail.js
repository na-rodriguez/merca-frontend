import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacter } from "../useRequest";

import { Breadcrumb, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CharacterDetail() {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetCharacter(id);

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    isSuccess && (
      <Card style={{ color: "000" }}>
        <Card.Body>
          <Card.Title>
            {data.name}
          </Card.Title>
          <Card.Text>
            Location: {data.location.name}
          </Card.Text>
          <Card.Title>
            Episodes:
          </Card.Title>
            <Breadcrumb>
              {data.episode.map(
                episode =>
                  <Breadcrumb.Item active key={episode.id}>
                    {episode.name}
                  </Breadcrumb.Item>
              )}
            </Breadcrumb>
        </Card.Body>
      </Card>
    )
  );
}