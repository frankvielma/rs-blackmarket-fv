interface iconProps {
  className: string;
}

const Facebook = ({ className }: iconProps) => (
  <svg
    width='24'
    height='23'
    viewBox='0 0 24 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M21.046 0H3.17778C1.80721 0 0.741211 1.11676 0.741211 2.43657V20.3048C0.741211 21.6753 1.80721 22.7413 3.17778 22.7413H10.1322V15.0255H6.93416V11.3707H10.1322V8.62953C10.1322 5.48229 12.0104 3.70562 14.853 3.70562C16.2744 3.70562 17.6957 3.95943 17.6957 3.95943V7.05591H16.1221C14.5485 7.05591 14.0408 8.02038 14.0408 9.03562V11.3707H17.5434L16.985 15.0255H14.0408V22.7413H21.046C22.3658 22.7413 23.4825 21.6753 23.4825 20.3048V2.43657C23.4825 1.11676 22.3658 0 21.046 0Z'
      fill='currentColor'
    />
  </svg>
);

export default Facebook;