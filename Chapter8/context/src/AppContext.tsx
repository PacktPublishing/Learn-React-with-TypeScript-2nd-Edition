import { createContext, useContext, useReducer, ReactNode } from 'react';
import { User } from './api/authenticate';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

type Action =
  | {
      type: 'authenticate';
    }
  | {
      type: 'authenticated';
      user: User | undefined;
    }
  | {
      type: 'authorize';
    }
  | {
      type: 'authorized';
      permissions: string[];
    };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'authenticate':
      return { ...state, loading: true };
    case 'authenticated':
      return { ...state, loading: false, user: action.user };
    case 'authorize':
      return { ...state, loading: true };
    case 'authorized':
      return {
        ...state,
        loading: false,
        permissions: action.permissions,
      };
    default:
      return state;
  }
}

type AppContextType = State & {
  dispatch: React.Dispatch<Action>;
};
const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};
export function AppProvider({ children }: Props) {
  const [{ user, permissions, loading }, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        user,
        permissions,
        loading,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
