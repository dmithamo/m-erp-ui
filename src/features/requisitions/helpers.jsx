import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ButtonWithIcon } from '../../common/components/Button';
import { colors } from '../../common/styles';

export const renderApproval = (values) => (
  <StyledApprovalsWrapper key="approvals">
    {values.map((approval) => (
      <StyledApproval key={approval.id} className={approval.status}>
        <FontAwesomeIcon
          className={`status ${approval.status}`}
          icon={getIcon(approval.status)}
        />
        {approval.status}
        <ButtonWithIcon icon="ellipsis-v" onClick={() => {}} />
      </StyledApproval>
    ))}
  </StyledApprovalsWrapper>
);

export const getIcon = (status) => {
  switch (status) {
    case 2:
      return ['far', 'check-circle'];

    case 1:
      return ['far', 'times-circle'];

    case 0:
      return 'hourglass-start';

    default:
      return '';
  }
};

const StyledApproval = styled.span`
  text-transform: capitalize;
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
  display: flex;
  justify-content: center;
  align-items: center;

  span.2 {
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
