import { ReactElement } from 'react';
import * as sc from './styled';

interface ErrorMessageProps {
  children: string | null;
}

export const ErrorMessage = (props: ErrorMessageProps): ReactElement => {
  return (
    <sc.ErrorMessage>
      <h2>Error!</h2>
      {props.children}
    </sc.ErrorMessage>
  );
};
