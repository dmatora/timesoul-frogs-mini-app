import styled from 'styled-components';

const Row = styled(({ margin = '0', spread = false, gap=0, ...props }) => (
  <div {...props} />
))`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${props => props.margin};
    gap: ${props => props.gap};
    justify-content: ${props => props.spread ? 'space-between' : 'center'};
`;
export default Row;
