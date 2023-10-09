import {SVGProps} from 'react-html-props';

export const HistoryIcon: React.FC<SVGProps> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <mask
        id="mask0_1323_624"
        style={{maskType: 'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24">
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1323_624)">
        <path
          d="M12 21C10.75 21 9.57917 20.7625 8.4875 20.2875C7.39583 19.8125 6.44583 19.1708 5.6375 18.3625C4.82917 17.5542 4.1875 16.6042 3.7125 15.5125C3.2375 14.4208 3 13.25 3 12C3 10.75 3.2375 9.57917 3.7125 8.4875C4.1875 7.39583 4.82917 6.44583 5.6375 5.6375C6.44583 4.82917 7.39583 4.1875 8.4875 3.7125C9.57917 3.2375 10.75 3 12 3C13.3667 3 14.6625 3.29167 15.8875 3.875C17.1125 4.45833 18.15 5.28333 19 6.35V4H21V10H15V8H17.75C17.0667 7.06667 16.225 6.33333 15.225 5.8C14.225 5.26667 13.15 5 12 5C10.05 5 8.39583 5.67917 7.0375 7.0375C5.67917 8.39583 5 10.05 5 12C5 13.95 5.67917 15.6042 7.0375 16.9625C8.39583 18.3208 10.05 19 12 19C13.75 19 15.2792 18.4333 16.5875 17.3C17.8958 16.1667 18.6667 14.7333 18.9 13H20.95C20.7 15.2833 19.7208 17.1875 18.0125 18.7125C16.3042 20.2375 14.3 21 12 21ZM14.8 16.2L11 12.4V7H13V11.6L16.2 14.8L14.8 16.2Z"
          fill="white"
        />
      </g>
    </svg>
  );
};