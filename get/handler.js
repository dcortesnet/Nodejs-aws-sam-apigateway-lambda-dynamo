const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.GREETINGS_TABLE;

exports.getHello = async (event) => {
  try {
    const items = await getAllItems();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: 'Internal Server error'
    };
  }
}


async function getAllItems() {
  const params = {
    TableName: TABLE_NAME
  };
  return await dynamo.scan(params).promise()
};