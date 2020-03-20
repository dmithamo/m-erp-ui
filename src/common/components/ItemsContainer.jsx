import React from 'react';
import PropTypes from 'prop-types';

export default function ItemsContainer(props) {
  const { stateName, items } = props;

  return (
    <>
      <p>{stateName}</p>
      <ul>
        {items.map((i) => (
          <li>{JSON.stringify(i)}</li>
        ))}
      </ul>
    </>
  );
}

ItemsContainer.propTypes = {
  stateName: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
