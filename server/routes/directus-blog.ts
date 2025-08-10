import { Request, Response } from 'express';

const API_BASE = 'https://directus-production-6ce1.up.railway.app';

export async function getDirectusBlog(req: Request, res: Response) {
  try {
    const url = `${API_BASE}/items/blog_posts?fields=*`;
    console.log('Proxying request to Directus:', url);

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Directus response status:', response.status);
    console.log('Directus response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.log('Directus error response:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      
      return res.status(500).json({
        status: 500,
        message: `Directus API error: ${response.status} - ${JSON.stringify(errorData)}`
      });
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const htmlContent = await response.text();
      console.log('Expected JSON but got HTML:', htmlContent.substring(0, 200));
      return res.status(500).json({
        status: 500,
        message: `Expected JSON but got ${contentType}. Response: ${htmlContent.substring(0, 100)}...`
      });
    }

    let data;
    try {
      const responseText = await response.text();
      data = JSON.parse(responseText);
      console.log('Successfully fetched from Directus, data length:', data.data?.length || 0);
    } catch (parseError) {
      console.log('JSON parse error:', parseError);
      return res.status(500).json({
        status: 500,
        message: `JSON parse error: ${parseError instanceof Error ? parseError.message : 'Unknown parse error'}`
      });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching blog posts from Directus:', error);
    res.status(500).json({
      status: 500,
      message: error instanceof Error ? error.message : 'Unknown server error'
    });
  }
}