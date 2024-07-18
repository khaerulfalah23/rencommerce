import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const productResponse = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!productResponse) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    const product = {
      id: productResponse.id,
      title: productResponse.title,
      price: productResponse.price,
      description: productResponse.description,
      image: productResponse.image,
    };

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
