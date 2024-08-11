import {BiSearch} from 'react-icons/bi';
import {useProviderGlobal} from '../../context/Provider';

const SearchBar = () => {
  const {search, setSearch} = useProviderGlobal();

  const handleChange = value => {
    setSearch(value);
  };

  return (
    <label className="input input-sm md:input-md input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        value={search}
        onChange={e => handleChange(e.target.value)}
      />
      <BiSearch />
    </label>
  );
};

export default SearchBar;
