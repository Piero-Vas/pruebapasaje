import {SVGProps} from 'react-html-props';

export const DetailsIcon: React.FC<SVGProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      fill="none"
      {...props}>
      <path
        fill="#fff"
        d="M4.5 11V9.5H14V11H4.5Zm0-4.25v-1.5H14v1.5H4.5Zm0-4.25V1H14v1.5H4.5Zm-3 9.25c-.42 0-.77-.15-1.06-.44-.3-.3-.44-.65-.44-1.06 0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44Zm0-4.25c-.42 0-.77-.15-1.06-.44C.14 6.76 0 6.4 0 6c0-.42.15-.77.44-1.06.3-.3.65-.44 1.06-.44.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44Zm0-4.25c-.42 0-.77-.15-1.06-.44C.14 2.5 0 2.16 0 1.75 0 1.33.15.98.44.69.74.39 1.1.25 1.5.25c.42 0 .77.15 1.06.44.3.3.44.65.44 1.06 0 .42-.15.77-.44 1.06-.3.3-.65.44-1.06.44Z"
      />
    </svg>
  );
};