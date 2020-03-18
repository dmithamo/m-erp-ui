import React from 'react';
import styled from 'styled-components';
import { CopyrightWarning } from '../presentational/CopyrightWarning';

export default function LicenseInfo() {
  return (
    <Container>
      <CopyrightWarning />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
