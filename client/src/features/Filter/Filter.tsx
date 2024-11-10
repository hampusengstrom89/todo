import Checkbox from '../../components/Checkbox';
import DateInput from '../../components/DateInput';
import TextInput from '../../components/TextInput';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import * as sc from './styled';
import { ReactElement } from 'react';
import { FilterInterface } from '../../utils/providers/filtering';
import { SortAttribute } from '../../utils/providers/sorting';

export const Filter = (
  handleChange: (
    attr: string,
  ) => (value: string | boolean | number | null) => void,
  sortAttr: SortAttribute,
  handleSortChange: (value: string) => void,
  sortAttributes: SortAttribute[],
  filter: FilterInterface,
): ReactElement => (
  <>
    <sc.Filter>
      <sc.FilterArea>
        <sc.FilterCompleted>
          <Checkbox
            label="Completed"
            onChange={handleChange('completed')}
            checked={filter.completed}
          />
        </sc.FilterCompleted>

        <sc.FilterDate>
          <DateInput label="Start date:" onChange={handleChange('startDate')} />
        </sc.FilterDate>
        <sc.FilterDate>
          <DateInput label="End date:" onChange={handleChange('endDate')} />
        </sc.FilterDate>
      </sc.FilterArea>

      <sc.Search>
        <sc.SearchArea>
          <TextInput
            onChange={handleChange('search')}
            value={''}
            placeHolder="Search for todos"
          />
        </sc.SearchArea>
      </sc.Search>

      <sc.SortArea>
        <Dropdown
          activeOption={sortAttr}
          onChange={handleSortChange}
          options={sortAttributes}
        />
      </sc.SortArea>
    </sc.Filter>
  </>
);
