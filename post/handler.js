const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.GREETINGS_TABLE;

exports.saveHello = async (event) => {
  try {
    const item = {
      id: Math.random().toString(36).substring(2, 100),
      date: Date.now()
    };
    await saveItem(item);
    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server error'
    };
  }
}

async function saveItem(item) {
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };
  return await dynamo.put(params).promise();
};
