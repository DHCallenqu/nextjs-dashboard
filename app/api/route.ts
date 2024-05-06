export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(url: string) {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }


  export async function POST(url: string,body:any) {

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
      body: body,
    })
    const data = await res.json()
    return data;
  }