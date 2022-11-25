import { FieldError, useForm } from 'react-hook-form';
import { SearchCriteria } from '../api/types';

type Props = {
  onSearch: (search: SearchCriteria) => void;
};

export function SearchRepoForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchCriteria>();

  const fieldStyle = 'flex flex-col mb-2';
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }
  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSearch)}>
      <div className={fieldStyle}>
        <label htmlFor="org">Organization</label>
        <input
          type="text"
          id="org"
          {...register('org', { required: 'You must enter a organization' })}
          className={getEditorStyle(errors.org)}
        />
        <ValidationError fieldError={errors.org} />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="org">Repository</label>
        <input
          type="text"
          id="repo"
          {...register('repo', { required: 'You must enter a repository' })}
          className={getEditorStyle(errors.repo)}
        />
        <ValidationError fieldError={errors.repo} />
      </div>
      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white self-start"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function ValidationError({ fieldError }: { fieldError: FieldError | undefined }) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}
