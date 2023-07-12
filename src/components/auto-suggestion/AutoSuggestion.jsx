import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { searchData } from '../../apis/searchApi';
import { useDebounce } from '../../hooks/useDebounce';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { useTriggerLengthStore } from '../../store/useTriggerLengthStore';
import SuggestionPanel from './components/SuggestionPanel';

function AutoSuggestion(props) {
  const { customInput } = props;
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const triggerLength = useTriggerLengthStore((state) => state.triggerLength);
  const debounceKeyword = useDebounce(keyword, 500);
  const [searchResult, setSearchResult] = useState();

  const isOpenSuggestionPanel =
    debounceKeyword.length >= triggerLength && isOpen;

  useOnClickOutside(ref, () => setIsOpen(false));

  useUpdateEffect(() => {
    if (!isOpenSuggestionPanel) return;
    handleSearch();
  }, [debounceKeyword]);

  const handleSearch = () => {
    const response = searchData(debounceKeyword);
    setSearchResult(response);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const renderInput = () => {
    if (customInput) {
      return React.Children.map(customInput, (child) => {
        if (!React.isValidElement(child)) return customInput;

        return React.cloneElement(customInput, {
          onChange: handleChange,
          onClick: () => setIsOpen(true),
        });
      });
    }

    return (
      <TextField
        label="Search"
        onChange={handleChange}
        className="w-full"
        variant="standard"
        onClick={() => setIsOpen(true)}
      />
    );
  };

  return (
    <div ref={ref} className="relative">
      {renderInput()}
      {isOpenSuggestionPanel && searchResult && (
        <SuggestionPanel searchResult={searchResult} />
      )}
    </div>
  );
}

export default AutoSuggestion;
