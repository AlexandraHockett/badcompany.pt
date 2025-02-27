import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, password] = Buffer.from(auth, "base64").toString().split(":");

    if (user === "badcompany_anyfa" && password === "B@dc0mp@ny@nyf@") {
      return NextResponse.next();
    }
  }

  return new Response("Autenticação necessária", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  });
}
