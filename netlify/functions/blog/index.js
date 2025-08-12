
const fetch = require('node-fetch');

const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
      },
      body: '',
    };
  }

  try {
    const queryParams = event.queryStringParameters || {};
    const urlParams = new URLSearchParams(queryParams);
    const apiUrl = `https://directus-production-6ce1.up.railway.app/items/blog_posts?fields=*&${urlParams.toString()}`;
    
    console.log('Fetching from Directus:', apiUrl);
    
    const res = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.error('Directus error:', res.status, res.statusText);
      return {
        statusCode: res.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: "Failed to fetch blog data",
          status: res.status,
          message: res.statusText
        })
      };
    }

    const data = await res.json();
    console.log('Successfully fetched blog data, count:', data.data?.length || 0);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    console.error('Blog function error:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: err.message || 'Internal server error'
      })
    };
  }
};

module.exports = { handler };
