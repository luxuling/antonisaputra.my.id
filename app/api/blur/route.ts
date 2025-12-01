import sharp from 'sharp';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'URL required' }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    const blurredBuffer = await sharp(Buffer.from(buffer))
      .resize(10, 10, { fit: 'inside' })
      .blur()
      .toBuffer();

    const base64 = blurredBuffer.toString('base64');

    return NextResponse.json({
      blurDataURL: `data:image/jpeg;base64,${base64}`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to process image blur', error },
      { status: 500 }
    );
  }
}
