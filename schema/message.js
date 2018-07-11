//  Subscription newChannelMessage:
//    A field that represents a topic a client can listen to to be notified of messages
//    added to a specific channel. 
export default `
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
    created_at: String!
  }

  type Subscription {
    newChannelMessage(channelId: Int!) : Message!
  }

  type Query {
    messages(channelId: Int!): [Message!]!
  }

  type Mutation {
    createMessage(channelId: Int!, text: String!): Boolean!
  }
`;
