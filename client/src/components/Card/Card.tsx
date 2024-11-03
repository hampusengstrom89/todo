import { ReactElement } from 'react';
import * as sc from './styled';

export const Card = ({
  children,
  $inActive,
}: {
  children: ReactElement;
  $inActive: boolean;
}) => <sc.Card $inActive={$inActive}>{children}</sc.Card>;
