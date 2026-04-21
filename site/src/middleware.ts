import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "gregg-auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/for-gregg")) {
    return NextResponse.next();
  }

  if (pathname === "/for-gregg/gate" || pathname.startsWith("/for-gregg/api/")) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(AUTH_COOKIE);
  if (cookie?.value === "ok") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/for-gregg/gate";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/for-gregg/:path*"],
};
