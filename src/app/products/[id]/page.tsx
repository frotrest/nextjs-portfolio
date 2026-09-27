import { notFound } from 'next/navigation';
import type { ProductI } from '../page';
import Link from 'next/link';

const productsItems: ProductI[] = [
  {
    id: '1',
    name: 'Nike Air Force 1',
    price: 110,
    description: 'Легендарные белые кроссовки на каждый день.',
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 180,
    description: 'Ультрамягкие беговые кроссовки с крутой амортизацией.',
  },
  {
    id: '3',
    name: 'Puma Suede Classic',
    price: 90,
    description: 'Классическая замшевая модель в стиле ретро.',
  },
];

export function generateStaticParams() {
  return productsItems.map((item) => ({
    id: item.id
  }))
}

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = productsItems.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section>
      <Link href="/products" style={{ color: 'gray', textDecoration: 'none' }}>
        ← Назад к каталогу
      </Link>

      <h1 style={{ fontSize: '32px', margin: '20px 0 10px 0' }}>{product.name}</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'green' }}>${product.price}</p>

      <p style={{ marginTop: '20px', fontSize: '18px', color: '#444' }}>{product.description}</p>

      <p style={{ marginTop: '40px', fontSize: '14px', color: '#888' }}>
        Системный ID товара: {product.id}
      </p>
    </section>
  );
};

export default Product;
