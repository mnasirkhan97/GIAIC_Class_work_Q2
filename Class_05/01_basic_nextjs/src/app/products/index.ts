import { useRouter } from 'next/router';
import products from '../../data/products.json';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Loading...</div>; // You can add a better loading state here
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
