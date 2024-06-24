import React from 'react';
import styled from 'styled-components';
import Row from '../../Row';

const Container = styled.div<{ icon?: boolean; done?: boolean }>`
  border: ${({ done }) => (done ? '3px solid #98e703' : '3px solid transparent')};
  height: 162px;
  width: ${({ icon }) => (icon ? '894px' : '874px')};
  border-radius: 84px;
  background: white;
  padding: ${({ icon }) => (icon ? '0 58px 0 33px' : '0 58px 0 53px')};
  display: flex;
  margin: 0 auto 20px;
  font-size: 33px;
  flex-shrink: 0;
`;

const Label = styled.div`
  width: 510px;
`;

const DoneIcon = styled((props) => (
  <svg viewBox="0 0 46 34" width="46" height="34" fill="none" {...props}>
    <path d="M3 16.988L16.0081 30L43 3" stroke="#98E703" strokeWidth="5" strokeLinecap="round" />
  </svg>
))`
  padding: 0 36px;
`;

const Option = ({
  label,
  Icon,
  selected = false,
  onClick,
}: {
  label: string;
  Icon?: string;
  selected: boolean;
  onClick: () => Promise<void>;
}) => {
  return (
    <Container done={selected} onClick={onClick} icon={!!Icon}>
      <Row spread={true} style={{ width: '100%' }}>
        <Row>
          {Icon && <Icon />}
          <Label>{label}</Label>
        </Row>
        {selected && <DoneIcon />}
      </Row>
    </Container>
  );
};

export default Option;
