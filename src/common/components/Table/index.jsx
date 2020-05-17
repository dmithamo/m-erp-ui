import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../styles';
import Search from '../Search';
import renderByType from './helpers/renderVal';

/**
 * @description Generic table
 * @param {object} param0 Props
 * @return {JSX}
 */
function Table({ stateName, columns, dataSource, actions }) {
  const keys = columns.map((col) => col.key);
  const [dataToDisplay, setDataToDisplay] = useState(dataSource);

  const [query, setQuery] = useState('');

  /**
   * @description Respond to input in search bar
   * @param {KeyBoardEven} e
   */
  function onSearchInput(e) {
    setQuery(e.target.value);
    if (!e.target.value) {
      onCancel();
    }
  }

  /**
   * @description Respond to input in search bar
   */
  function onSearch() {
    setDataToDisplay(
      query
        ? dataSource.filter((item) => JSON.stringify(item).includes(query))
        : dataSource,
    );
  }

  /**
   * @description Respond to cancellation of search
   */
  function onCancel() {
    setQuery('');
    setDataToDisplay(dataSource);
  }

  return (
    <TableWrapper>
      <Search
        onChange={onSearchInput}
        query={query}
        onSearch={onSearch}
        onCancel={onCancel}
        placeholder="Type to filter"
      />
      {dataToDisplay.length === 0 ? (
        <>
          Searching for {stateName}: {query}
          <p>{`NO_${stateName.toUpperCase()}_FOUND`}</p>
        </>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              {columns.map((col) => (
                <StyledTableCell key={col.key}>
                  {col.displayName}
                </StyledTableCell>
              ))}
              <StyledTableCell>Actions</StyledTableCell>
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((item) => (
              <tr key={item.id}>
                {keys.map((key) => (
                  <StyledTableCell key={key}>
                    <Fragment key={uuidv4()}>
                      {renderByType(item[key], key)}
                    </Fragment>
                  </StyledTableCell>
                ))}
                <StyledTableCell>
                  {actions.map((action) => (
                    <StyledTableButton
                      key={uuidv4()}
                      type="button"
                      onClick={() => action.onClick(item)}
                    >
                      {action.value}
                    </StyledTableButton>
                  ))}
                </StyledTableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </TableWrapper>
  );
}

Table.propTypes = {
  stateName: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
};

const TableWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledTableCell = styled.td`
  padding: 1em;
  /* border: 1px dashed ${colors.grey}; */
`;

const StyledTable = styled.table`
  thead {
    text-transform: capitalize;
    color: ${colors.white};
    background-color: ${colors.black};
    padding: 1.5em 0;
  }

  tbody {
    tr {
    }
    tr:nth-of-type(odd) {
      background-color: ${colors.lightGrey};
    }
    tr:nth-of-type(even) {
      background-color: ${colors.lightGrey};
    }

    tr:hover {
    }
  }

  padding: 1em;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
`;

const StyledTableButton = styled.button`
  outline: none;
`;

export default Table;
