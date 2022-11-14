import { useParams } from 'react-router-dom';

export function ThankYouPage() {
  const { name } = useParams<{ name: string }>();
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <div role="alert" className="bg-green-100 py-5 px-6 text-base text-green-700 ">
        Thanks {name}, we will be in touch shortly
      </div>
    </div>
  );
}
