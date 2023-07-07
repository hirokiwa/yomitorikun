import { NextResponse } from "next/server";

export async function GET(request: Request, params: paramsType) {
  try {
    const url = params.params.url
    const response = await fetch(url);
    const html = await response.text();
    const titleRegex = /<title>(.*?)<\/title>/i;
    const match = html.match(titleRegex);
    const title = match && match[1] ? match[1].trim() : url;

    const faviconRegex = /<link[^>]+rel=["'](?:icon|shortcut icon)["'][^>]+href=["'](.*?)["'][^>]*>/i;
    const faviconMatch = html.match(faviconRegex);
    const faviconUrl = faviconMatch && faviconMatch[1] ? new URL(faviconMatch[1], url).href : undefined;

    return NextResponse.json({ title: title, favicon: faviconUrl });
  } catch (error) {
    return NextResponse.json({ title: undefined, favicon: undefined });
  }
}