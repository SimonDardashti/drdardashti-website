import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.drdardashti.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || "https";

  // Redirect to canonical domain with HTTPS
  if (host !== CANONICAL_HOST || protocol !== "https") {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }

  const requestHeaders = new Headers(request.headers);
  const isSpanishRoute = request.nextUrl.pathname === "/es" || request.nextUrl.pathname.startsWith("/es/");
  requestHeaders.set("x-html-lang", isSpanishRoute ? "es" : "en");

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
