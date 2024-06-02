import styled from 'styled-components';

const BoostCard = styled.button<{ disabled: boolean }>`
  border: none;
  height: 80px;
  padding: 0 30px;
  background-color: #98e703;
  border-radius: 40px;
  box-shadow: 5px 2px 0 0 black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  color: #262626;
  font-size: 35px;
  font-weight: 500;
  line-height: 80px;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  &:active {
    ${({ disabled }) =>
      !disabled &&
      `
          position: relative;
          box-shadow: none;
          top: 2px;
          left: 5px;
      `}
  }
`;

export default BoostCard;
