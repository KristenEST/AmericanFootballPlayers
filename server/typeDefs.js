const { gql } = require('apollo-server');

// Define your type definitions which be Query, and Player object types
const typeDefs = gql`
    # Define your Query object type which have a players field 
    # that will return an array of Player object types.
    type Query {
        # Specify your are returning the Player object type.
        players: [Player]
    }
    type Mutation {
        createPlayer(name: String, position: String, team: String, jerseyNumber: Int, wonSuperBowl: Boolean): Player
    }
    # Define your Player object type, with fields position, name, team, jerseyNumber, and wonSuperBowl.
    type Player {
        position: String
        name: String
        team: String
        jerseyNumber: Int
        wonSuperBowl: Boolean
    }
    # Set your query keyword to your Query object type.
    schema {
        query: Query
        mutation: Mutation
    }
`;

//Export your type definitions as a default export 
module.exports = typeDefs;