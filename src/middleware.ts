import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const latitude = geo?.latitude;
  const longitude = geo?.longitude;

  url.searchParams.set("latitude", latitude ?? "");
  url.searchParams.set("longitude", longitude ?? "");

  return NextResponse.rewrite(url);
}
