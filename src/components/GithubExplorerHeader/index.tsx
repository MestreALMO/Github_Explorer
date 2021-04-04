import React from 'react';
import { IoTelescope } from 'react-icons/io5';

import { Container } from './styles';

export const GithubExplorerHeader: React.FC = () => (
  <Container>
    <IoTelescope />
    <strong>Github Explorer</strong>
  </Container>
);
