import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonWithIcon } from '../../Button';
import { colors } from '../../../styles';
/**
 * @description Render [table] value depending on its type

 * @param {any} value
 * @param {?array} list of desired attributes
 */
export const renderByType = (value, key = '', desiredAttrs = []) => {
  // null, undefined, bool, empty str, zero
  if (!value) return String(value);

  if (key === 'approvals') return renderApproval(value);

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

export const renderApproval = (values) => (
  <StyledApprovalsWrapper key="approvals">
    {values.map((approval) => (
      <StyledApproval
        key={approval.id}
        className={approval.status.toLowerCase()}
      >
        <FontAwesomeIcon
          className={`status ${approval.status.toLowerCase()}`}
          icon={getIcon(approval.status)}
        />
        {approval.name}
        <ButtonWithIcon icon="ellipsis-v" onClick={() => {}} />
      </StyledApproval>
    ))}
  </StyledApprovalsWrapper>
);

const getIcon = (status) => {
  switch (status) {
    case 'APPROVED':
      return ['far', 'check-circle'];

    case 'REJECTED':
      return ['far', 'times-circle'];

    case 'PENDING':
      return 'hourglass-start';

    default:
      return '';
  }
};

const StyledApproval = styled.span`
  width: 150px;
  padding: 0.9em;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 1px 1px #00000010;

  svg {
    margin: 0.1em;
    font-size: inherit;
  }
`;

const StyledApprovalsWrapper = styled.p`
  margin: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  span.approved {
    border-left: 5px solid ${colors.darkGreen};
    svg.status {
      color: ${colors.darkGreen};
    }
  }

  span.rejected {
    border-left: 5px solid ${colors.red};
    svg.status {
      color: ${colors.red};
    }
  }

  span.pending {
    border-left: 5px solid ${colors.grey};
    svg.status {
      color: ${colors.fadedGrey};
    }
  }
`;
