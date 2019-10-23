//import your Player model to retrieve data from your players collection.
const Player = require('./connectors');
//Define your resolver
const resolvers = {
    Query: {
        players: () => Player.find({}, (error, players) => {
            //If there is an errror throw the error on your graphql playground.
            if(error) throw new Error(error);
            console.log('players-------', players);
            //Else return your players.
            return players;
        })
    },
    Mutation: {
        //THe callback for mutation resolvers has obj, context, args, and info arguments. 
        //In this case we will just use the args, and have the rest of the args in a form of a private variable.
        createPlayer:(_, args) => {
            //We will assign a new model with our position, name, team, jerseyNumber, and wonSuperBowl argument from the mutation.
            const newPlayer = new Player({
                name: args.name,
                position: args.position,
                team: args.team,
                jerseyNumber: args.jerseyNumber,
                wonSuperBowl: args.wonSuperBowl
            });

            //After assigning the variable, save the model to the database.
            newPlayer.save();

            return null;
        }
    }
}

module.exports = resolvers;