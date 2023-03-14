const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.GREETINGS_TABLE;

exports.getHello = async (event) => {
  const name = event.queryStringParameters.name;
  try {
    const item = await getItem(name);
    console.log(item);
    if (item.date) {
      const d = new Date(item.date);
      return {
        statusCode: 200,
        body: `Was greeted on ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
      };
    }
  } catch (e) {
    return {
      statusCode: 200,
      body: 'Nobody was greeted with that name'
    };
  }
}


async function getItem(name) {
  console.log('getItem');
  const params = {
    Key: {
      id: name,
    },
    TableName: TABLE_NAME
  };
  console.log(params);
  return dynamo.get(params).promise().then(result => {
    console.log(result);
    return result.Item;
  });
};