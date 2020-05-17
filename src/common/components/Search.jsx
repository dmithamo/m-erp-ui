import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Input from './Input';

/**
 * @description Generic search bar. Pluggable anywehere
 * @param {object} props
 * @return {JSX}
 */
export default function Search(props) {
  const { query, placeholder, onChange, onSearch, onCancel } = props;

  /**
   * @description Respond to input in search bar (any keypress)
   * @param {KeyBoardEvent} e
   */
  function handleOnChange(e) {
    switch (e.which) {
      case 13:
        onSearch();
        break;
      case 27:
        onCancel();
        break;
      default:
        onChange(e);
    }
  }

  return (
    <SearchWrapper>
      <Input
        onChange={handleOnChange}
        value={query}
        type="text"
        icon="search"
        placeholder={placeholder}
        onIconClick={onSearch}
        onKeyUp={handleOnChange}
        error={false}
      />
      {query && <code>Press `Enter` to search. `Escape` to clear.</code>}
    </SearchWrapper>
  );
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'Search',
};

const SearchWrapper = styled.div`
  margin: 0 0 1em 0;
  div {
    margin: 0;
  }

  code {
    font-size: 0.7em;
    padding: 0.7em;
    opacity: 0.5;
  }
`;
