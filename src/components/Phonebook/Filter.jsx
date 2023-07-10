import css from './Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  function onChangeFilter(e) {
    const filterValue = e.currentTarget.value;
    dispatch(filterContact(filterValue));
  }

  return (
    <div className={css.filter}>
      <p>Find contact by name</p>
      <input type="text" name="filter" onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
