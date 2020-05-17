import React from 'react';
import { renderApproval } from '../../../../features/requisitions/helpers';

/**
 * @description Render [table] value depending on its type
 * @param {string} value
 * @param {string} key
 * @param {?array} desiredAttrs of desired attributes
 * @return {JSX}
 */
const renderByType = (value, key = '', desiredAttrs = []) => {
  // null, undefined, bool, empty str, zero
  if (!value) return String(value);

  if (key === 'approvals') return renderApproval(value);

  if (key === 'amount') {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'Kes',
    }).format(value);
  }

  switch (value.constructor) {
    case Array:
      // some array.
      return value.map((val) => renderByType(val, desiredAttrs));

    case Object:
      // extract desired fields, if any
      return desiredAttrs.length > 0
        ? desiredAttrs.map((attr) => (
            <span key={value[attr]}>{value[attr]}</span>
          ))
        : Object.keys(value).map((k) => <span key={value[k]}>{value[k]}</span>);

    case String:
    case Number:
      return <span key={value}>{value}</span>;

    default:
      // stringify value for safety?
      // throw to discourage this type?
      return <span key={JSON.stringify(value)}>{JSON.stringify(value)}</span>;
  }
};

export default renderByType;
