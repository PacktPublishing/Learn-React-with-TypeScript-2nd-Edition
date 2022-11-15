import { useAppContext } from './AppContext';

export function Content() {
  const { permissions } = useAppContext();

  if (permissions === undefined) {
    return null;
  }

  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">Some important stuff that only an admin can do</p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions</p>
  );
}
