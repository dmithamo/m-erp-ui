import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonWithIcon } from '../../common/components/Button';
import { colors } from '../../common/styles';

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
        {approval.role}
        <ButtonWithIcon icon="ellipsis-v" onClick={() => {}} />
      </StyledApproval>
    ))}
  </StyledApprovalsWrapper>
);

export const getIcon = (status) => {
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
  display: flex;
  justify-content: center;
  align-items: center;

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
