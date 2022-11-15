import { User } from './api/authenticate';
import { Content } from './Content';

type Props = {
  user: undefined | User;
  permissions: undefined | string[];
};

export function Main({ user, permissions }: Props) {
  return (
    <main className="py-8">
      <h1 className="text-3xl text-center font-bold underline">Welcome</h1>
      <p className="mt-8 text-xl text-center">{user ? `Hello ${user.name}!` : 'Please sign in'}</p>
      <Content permissions={permissions} />
    </main>
  );
}
