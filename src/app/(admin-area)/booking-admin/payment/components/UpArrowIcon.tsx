import {SVGProps} from 'react-html-props';

export const UpArrowIcon: React.FC<SVGProps> = props => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <mask
        id="mask0_733_8"
        style={{maskType: 'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40">
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_733_8)">
        <path
          d="M18.6108 26.3333H21.3886V18.9443L24.333 21.8888L26.2774 19.9444L19.9997 13.6666L13.7219 19.9444L15.6663 21.8888L18.6108 18.9443V26.3333ZM19.9997 36.6666C17.7126 36.6666 15.5552 36.2291 13.5275 35.3541C11.4997 34.4791 9.73116 33.287 8.22188 31.7777C6.71263 30.2684 5.52051 28.4999 4.64551 26.4721C3.77051 24.4444 3.33301 22.2869 3.33301 19.9999C3.33301 17.6944 3.77051 15.5277 4.64551 13.4999C5.52051 11.4721 6.71263 9.70825 8.22188 8.20825C9.73116 6.70825 11.4997 5.52075 13.5275 4.64575C15.5552 3.77075 17.7126 3.33325 19.9997 3.33325C22.3052 3.33325 24.4719 3.77075 26.4997 4.64575C28.5275 5.52075 30.2913 6.70825 31.7913 8.20825C33.2913 9.70825 34.4788 11.4721 35.3538 13.4999C36.2288 15.5277 36.6663 17.6944 36.6663 19.9999C36.6663 22.2869 36.2288 24.4444 35.3538 26.4721C34.4788 28.4999 33.2913 30.2684 31.7913 31.7777C30.2913 33.287 28.5275 34.4791 26.4997 35.3541C24.4719 36.2291 22.3052 36.6666 19.9997 36.6666Z"
          fill="#343438"
        />
      </g>
    </svg>
  );
};
