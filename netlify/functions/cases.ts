
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
    const directusUrl = `${DIRECTUS_URL}/items/case_studies?fields=*&${urlParams.toString()}`;

    console.log('Proxying request to Directus:', directusUrl);

    const response = await fetch(directusUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log('Directus response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Directus error response:', errorText);
      return {
        statusCode: response.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: response.status,
          message: `Directus API error: ${response.status} - ${errorText.substring(0, 200)}`
        }),
      };
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const responseText = await response.text();
      console.error('Non-JSON response from Directus:', responseText.substring(0, 300));
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 500,
          message: `Expected JSON from Directus but received ${contentType}: ${responseText.substring(0, 100)}`
        }),
      };
    }

    const data = await response.json();
    console.log('Successfully fetched from Directus, data length:', data?.data?.length || 0);

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
    console.error("Directus proxy error:", error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 500,
        message: `Proxy error: ${error instanceof Error ? error.message : 'Unknown error'}`
      }),
    };
  }
};
