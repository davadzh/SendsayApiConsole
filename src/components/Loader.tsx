import React from 'react';
import loader from '../media/icons/loader.svg';
import styled from 'styled-components';

const LoaderStyled = styled.img`
  animation: spin 0.5s infinite steps(8);

  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <LoaderStyled src={loader} alt="Loading" />;
};

export default Loader;
