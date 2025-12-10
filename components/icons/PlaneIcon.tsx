
import React from 'react';

const PlaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 21h12l7-8-7-8H2l4 8-4 8z" />
    <path d="M2 21v-4" />
    <path d="M20 13h2" />
    <path d="M14 13h2" />
  </svg>
);

export default PlaneIcon;
