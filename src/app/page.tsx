import { Hero } from '@/components/Hero';
import { ProductList } from '@/components/ProductList';

export default async function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
    </main>
  );
}
