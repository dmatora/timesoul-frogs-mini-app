import styled from 'styled-components';

const MoreBonuses = styled.button`
  border: none;
  height: 82px;
  width: 532px;
  background-color: #98e703;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  box-shadow: 4px 4px 0 0 black;
  margin: 0 auto;

  &:active {
    position: relative;
    box-shadow: none;
    top: 4px;
    left: 4px;
  }
`;

export default MoreBonuses;
