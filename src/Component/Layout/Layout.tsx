import styled from '@emotion/styled';
import React from 'react';

export const Layout = () => {
  return (
    <Styled.Container>
      <header>momo</header>
    </Styled.Container>
  );
};

const Styled = {
  Container : styled.div`
    height: 100vh;
    overflow: scroll;
  `,
}