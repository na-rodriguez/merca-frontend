import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = 'https://rickandmortyapi.com/graphql';

const graphQLClient = new GraphQLClient(API_URL);

export function useGetCharacters() {
    return useQuery("characters", async () => {
        const { characters } = await graphQLClient.request(gql`
        query {
          characters {
            results {
              id
              name
            }
          }
          }
        `);
        return characters;
    });
}

export function useGetCharacter(characterId) {
  return useQuery(["getCharacter", characterId], async () => {
    const { character } = await graphQLClient.request(
      gql`
        query getCharacter($characterId: ID!) {
          character (id: $characterId) {
            name
            location {
              name
            }
            episode {
              id
              name
            }
          }
        }
      `,
      { characterId }
    );
    return character;
  });
}
