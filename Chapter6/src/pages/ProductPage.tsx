import { useParams } from 'react-router-dom';
import { products } from '../data/products';

type Params = {
  id: string;
};
export function ProductPage() {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id);

  const product = products.find((product) => product.id === id);

  return (
    <div className="text-center p-5 text-xl">
      {product === undefined ? (
        <h1 className="text-xl text-slate-900">Unknown product</h1>
      ) : (
        <>
          <h1 className="text-xl text-slate-900">{product.name}</h1>
          <p className="text-base text-slate-800">{product.description}</p>
          <p className="text-base text-slate-800">
            {new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }).format(product.price)}
          </p>
        </>
      )}
    </div>
  );
}
