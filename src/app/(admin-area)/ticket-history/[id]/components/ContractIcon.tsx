import {SVGProps} from 'react-html-props';

export const ContractIcon: React.FC<SVGProps> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <mask
        id="mask0_1452_274"
        style={{maskType: 'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24">
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1452_274)">
        <path
          d="M6 22C5.16667 22 4.45833 21.7083 3.875 21.125C3.29167 20.5417 3 19.8333 3 19V16H6V2H21V19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22H6ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19V4H8V16H17V19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20ZM9 9V7H18V9H9ZM9 12V10H18V12H9Z"
          fill="#4185EF"
        />
      </g>
    </svg>
  );
};
