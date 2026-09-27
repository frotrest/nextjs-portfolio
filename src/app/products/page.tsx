import Link from 'next/link';

export interface ProductI {
  readonly id: string;
  name: string;
  price: number;
  description: string;
}

const products: ProductI[] = [
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

const Products = () => {
  return (
    <section>
      <h1>Каталог кроссовок</h1>
      <p>Кликни на товар, чтобы открыть его отдельную страницу:</p>

      <ul style={{ marginTop: '20px', lineHeight: '2' }}>
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`products/${product.id}`}
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              Перейти на сторінку {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;