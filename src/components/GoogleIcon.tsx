import React from "react";

const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      fill="#EA4335"
      d="M12 11.5v2.9h5.1c-.2 1.2-.9 2.3-1.9 3.1l3 2.3C20.9 19.5 22 16 22 12.5 22 11.6 21.9 10.7 21.7 9.9H12z"
    />
    <path
      fill="#34A853"
      d="M4.8 14C4.6 13.1 4.6 12 4.6 12s0-.1.2-.9L2 8.9C1.2 10.6 1 12.5 1 12.5 1 16 3.1 19.4 6.6 21.4l2.2-1.7C7 18.4 5.6 16.3 4.8 14z"
    />
    <path
      fill="#4A90E2"
      d="M12 5.3c1.8 0 3.4.6 4.7 1.9l3.5-3.5C17.5 1.7 14.9.5 12 .5 7.7.5 3.9 3 2.1 6.7L4.9 9.5C5.8 7 8.6 5.3 12 5.3z"
    />
    <path
      fill="#FBBC05"
      d="M21.7 9.9c-.5-1.6-1.6-3-3-4l-3.9 3.9c.5.4.8.9.9 1.6h6z"
    />
  </svg>
);

export default GoogleIcon;
