import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const productsResponse = await prisma.product.findMany({
      include: {
        category: true,
      },
    });

    const products = productsResponse.map((product) => ({
      id: product.id,
      title: product.title,
      category: product.category.name,
      price: product.price,
      description: product.description,
      image: product.image,
    }));

    return NextResponse.json(products, { status: 200 });
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
