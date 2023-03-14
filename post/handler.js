const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.GREETINGS_TABLE;

exports.saveHello = async (event) => {
  console.log(event);
  const name = event.queryStringParameters.name;
  const item = {
    id: name,
    name: name,
    date: Date.now()
  };
  console.log(item);
  const savedItem = await saveItem(item);
  return {
    statusCode: 200,
    body: JSON.stringify(savedItem),
  };
}

async function saveItem(item) {
  console.log('saveItem');
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  console.log(params);
  return dynamo.put(params).promise().then(() => {
    return item;
  });
};
