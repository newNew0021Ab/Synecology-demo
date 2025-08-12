
import type { Handler } from '@netlify/functions';

const DIRECTUS_URL = 'https://directus-production-6ce1.up.railway.app';

export const handler: Handler = async (event, context) => {
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
    const directusUrl = `${DIRECTUS_URL}/items/blog_posts?fields=*&${urlParams.toString()}`;

    console.log('Proxying request to Directus:', directusUrl);

    const response = await fetch(directusUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Directus response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Directus error response:', errorText);

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }

      return {
        statusCode: response.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: response.status,
          message: `Directus API error: ${response.status} - ${JSON.stringify(errorData)}`
        }),
      };
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const htmlContent = await response.text();
      console.error('Expected JSON but got HTML:', htmlContent.substring(0, 200));
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 500,
          message: `Expected JSON but got ${contentType}. Response: ${htmlContent.substring(0, 100)}...`
        }),
      };
    }

    let data;
    try {
      data = await response.json();
      console.log('Successfully fetched from Directus, data length:', data.data?.length || 0);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 500,
          message: `JSON parse error: ${parseError instanceof Error ? parseError.message : 'Unknown parse error'}`
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching blog posts from Directus:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 500,
        message: error instanceof Error ? error.message : 'Unknown server error'
      }),
    };
  }
};
