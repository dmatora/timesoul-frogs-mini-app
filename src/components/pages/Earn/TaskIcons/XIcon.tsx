import styled from 'styled-components';

export const XIcon = styled((props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="112" height="113" viewBox="0 0 112 113" fill="none" {...props}>
    <g clipPath="url(#clip0_2099_17807)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56 0.570312C86.9291 0.570312 112 25.6413 112 56.5703C112 87.4994 86.9291 112.57 56 112.57C25.0709 112.57 0 87.4994 0 56.5703C0 25.6413 25.0709 0.570312 56 0.570312Z"
        fill="#222625"
      />
      <path
        d="M69.7025 35.0342H77.0088L61.0466 53.2801L79.8263 78.1061H65.1219L53.6047 63.0473L40.4272 78.1061H33.1166L50.19 58.5914L32.1759 35.0342H47.2522L57.6625 48.7979L69.7025 35.0342ZM67.1388 73.7332H71.1878L45.0516 39.1795H40.7072L67.1388 73.7332Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2099_17807">
        <rect width="112" height="112" fill="white" transform="translate(0 0.570312)" />
      </clipPath>
    </defs>
  </svg>
))`
  flex-shrink: 0;
  margin-right: ${({ large }) => (large ? '' : '26px')};
  width: ${({ large }) => (large ? '350px' : '')};
  height: ${({ large }) => (large ? '350px' : '')};
`;
