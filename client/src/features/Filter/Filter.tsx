import Checkbox from '../../components/Checkbox';
import DateInput from '../../components/DateInput';
import TextInput from '../../components/TextInput';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import * as sc from './styled';
import { ReactElement } from 'react';
import { FilterInterface, SortOptions } from './FilterContainer';

export const Filter = (
  handleChange: (attr: string) => (value: string | boolean | number) => void,
  sortByAttr: SortOptions,
  handleSortChange: (value: string) => void,
  sortOptions: SortOptions[],
  filters: FilterInterface,
): ReactElement => (
  <sc.Filter>
    <sc.SearchArea>
      <TextInput
        onChange={handleChange('search')}
        value={''}
        placeHolder="Search for todos"
      />
    </sc.SearchArea>
    <sc.SortArea>
      <Dropdown
        activeOption={sortByAttr}
        onChange={handleSortChange}
        options={sortOptions}
      />
    </sc.SortArea>
    <sc.FilterArea>
      <Checkbox
        label="Completed"
        onChange={handleChange('completed')}
        checked={filters.completed}
      />
      <DateInput label="Start date" onChange={handleChange('startDate')} />
      <DateInput label="End date" onChange={handleChange('endDate')} />
    </sc.FilterArea>
  </sc.Filter>
);
