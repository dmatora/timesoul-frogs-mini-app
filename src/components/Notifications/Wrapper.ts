// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  z-index: 200;
  padding: 0;
  font-family: Geologica, sans-serif;
  opacity: 0.9;

  li {
    background: #000;
    margin: 8px 10px 0;
    position: relative;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    h3 {
      opacity: 0.9;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      margin: 0;
      margin-bottom: 3px;
      flex: 1;
    }
    p {
      opacity: 0.8;
      font-weight: 400;
      color: #fff;
      font-size: 13px;
      line-height: 13px;
      margin: 0;
    }
  }
`;