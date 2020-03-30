import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import renderByType from './helpers/renderVal';
import { colors } from '../../styles';

const Table = ({ stateName, columns, dataSource, actions }) => {
  const keys = columns.map((col) => col.key);

  if (dataSource.length === 0) {
    return <p>{`NO_${stateName.toUpperCase()}_FOUND`}</p>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((col) => (
            <StyledTableCell key={col.key}>{col.displayName}</StyledTableCell>
          ))}
          <StyledTableCell>Actions</StyledTableCell>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item) => (
          <tr key={item.number}>
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
  );
};

Table.propTypes = {
  stateName: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
};

const StyledTableCell = styled.td`
  padding: 1em;
  border: 1px dashed ${colors.grey};
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
`;

const StyledTableButton = styled.button`
  outline: none;
`;

export default Table;
