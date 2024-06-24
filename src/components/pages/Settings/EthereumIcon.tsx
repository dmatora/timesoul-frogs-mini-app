import styled from 'styled-components';
import React from 'react';

const EthereumIcon = styled((props) => (
  <svg {...props} width="112" height="113" viewBox="0 0 112 113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2099_21686)">
      <path
        d="M56 0.0107422C86.929 0.0107422 112 25.0852 112 56.0107C112 86.9363 86.929 112.011 56 112.011C25.071 112.011 0 86.9397 0 56.0107C0 25.0818 25.0744 0.0107422 56 0.0107422Z"
        fill="#222625"
      />
      <g clipPath="url(#clip1_2099_21686)">
        <path d="M55.5018 98.0001V76.8976L29 61.666L55.5018 98.0001Z" fill="white" />
        <path d="M81.9701 61.666L55.4683 76.8976V98.0001L81.9701 61.666Z" fill="white" />
        <path d="M55.5018 14L29 56.779L55.5018 72.0178L82 56.779L55.5018 14Z" fill="white" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2099_21686">
        <rect width="112" height="112" fill="white" transform="translate(0 0.0107422)" />
      </clipPath>
      <clipPath id="clip1_2099_21686">
        <rect width="53" height="84" fill="white" transform="translate(29 14)" />
      </clipPath>
    </defs>
  </svg>
))`
  margin-right: 30px;
  flex-shrink: 0;
`;

export default EthereumIcon;
