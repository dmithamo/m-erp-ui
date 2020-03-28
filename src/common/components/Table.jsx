import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Table({ stateName, columns, dataSource }) {
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
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item) => (
          <tr key={item.number}>
            {keys.map((key) => (
              <StyledTableCell key={key}>
                {typeof item[key] === 'object'
                  ? JSON.stringify(item[key])
                  : item[key]}
              </StyledTableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  stateName: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
};

const StyledTableCell = styled.td`
  padding: 1em;
  border: 2px solid red;
`;

const StyledTable = styled.table`
  thead {
    font-weight: bold;
  }

  border-collapse: collapse;
`;
