export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const res = await fetch(request.url, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }


  export async function POST(request: Request) {

    const res = await fetch(request.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: request.body,
    })
    const data = await res.json()
    return data;
  }