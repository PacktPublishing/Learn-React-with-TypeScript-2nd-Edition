import { FieldError } from 'react-hook-form';

type Props = {
  fieldError: FieldError | undefined;
};
export function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}
