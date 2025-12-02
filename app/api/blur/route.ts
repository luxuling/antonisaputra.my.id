import sharp from 'sharp';
import { NextRequest, NextResponse } from 'next/server';

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

async function getBuffer(url: string) {
  try {
    const response = await fetch(url);
    return Buffer.from(await response.arrayBuffer());
  } catch {
    throw new Error('Failed to fetch');
  }
}

export async function getPlaceholderImage(url: string) {
  try {
    const lowResImage = await getBuffer(
      `${process.env.NEXT_URL}_next/image?url=${encodeURIComponent(
        url
      )}&w=48&q=50`
    );
    if (lowResImage) {
      const resizedBuffer = await sharp(lowResImage).resize(20).toBuffer();
      return bufferToBase64(resizedBuffer);
    }
  } catch {
    throw new Error('Failed get placeholder');
  }
}

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json(
      { message: 'URL required', error: null },
      { status: 400 }
    );
  }

  try {
    const url = await getPlaceholderImage(imageUrl);
    return NextResponse.json({
      blurDataURL: url,
    });
  } catch {
    return NextResponse.json({
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    });
  }
}
