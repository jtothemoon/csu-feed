interface StarProps {
  filled?: boolean;
  className?: string;
}

export function Star({ filled = false, className = "" }: StarProps) {
  // Filled Star
  if (filled) {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g filter="url(#filter0_di_28_326)">
          <path
            d="M14.5304 1.28332C14.6906 0.845726 15.3094 0.845724 15.4696 1.28331L18.5347 9.66044C18.6045 9.85127 18.7829 9.98087 18.9859 9.9883L27.9002 10.3147C28.3659 10.3318 28.5571 10.9204 28.1904 11.2079L21.1705 16.7117C21.0106 16.837 20.9425 17.0467 20.9981 17.2422L23.4423 25.821C23.57 26.2692 23.0693 26.6329 22.6826 26.373L15.2789 21.3974C15.1102 21.2841 14.8898 21.2841 14.7211 21.3974L7.31741 26.373C6.93067 26.6329 6.42998 26.2692 6.55766 25.821L9.00187 17.2422C9.05755 17.0467 8.98941 16.837 8.8295 16.7117L1.80956 11.2079C1.44286 10.9204 1.63411 10.3318 2.09976 10.3147L11.0141 9.9883C11.2171 9.98087 11.3955 9.85127 11.4653 9.66044L14.5304 1.28332Z"
            fill="#F5BF03"
          />
          <path
            d="M14.7656 1.36914C14.8458 1.15061 15.1542 1.15061 15.2344 1.36914L18.2998 9.74609C18.4045 10.0323 18.6721 10.227 18.9766 10.2383L27.8906 10.5645C28.1234 10.573 28.2193 10.8669 28.0361 11.0107L21.0166 16.5146C20.7768 16.7027 20.6743 17.0174 20.7578 17.3105L23.2021 25.8896C23.2658 26.1135 23.0155 26.2954 22.8223 26.166L15.418 21.1895C15.1652 21.0199 14.8348 21.0199 14.582 21.1895L7.17773 26.166C6.98446 26.2954 6.73423 26.1135 6.79785 25.8896L9.24219 17.3105C9.32567 17.0174 9.22325 16.7027 8.9834 16.5146L1.96387 11.0107C1.78073 10.8669 1.87662 10.573 2.10938 10.5645L11.0234 10.2383C11.3279 10.227 11.5955 10.0323 11.7002 9.74609L14.7656 1.36914Z"
            stroke="#B5993A"
            strokeWidth="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_28_326"
            x="1.11719"
            y="0.455124"
            width="28.7656"
            height="27.5048"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.5" dy="0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_28_326"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_28_326"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_28_326"
            />
          </filter>
        </defs>
      </svg>
    );
  }

  // Default/Empty Star
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_7_4252)">
        <path
          d="M14.5304 1.28332C14.6906 0.845726 15.3094 0.845724 15.4696 1.28331L18.5347 9.66044C18.6045 9.85127 18.7829 9.98087 18.9859 9.9883L27.9002 10.3147C28.3659 10.3318 28.5571 10.9204 28.1904 11.2079L21.1705 16.7117C21.0106 16.837 20.9425 17.0467 20.9981 17.2422L23.4423 25.821C23.57 26.2692 23.0693 26.6329 22.6826 26.373L15.2789 21.3974C15.1102 21.2841 14.8898 21.2841 14.7211 21.3974L7.31741 26.373C6.93067 26.6329 6.42998 26.2692 6.55766 25.821L9.00187 17.2422C9.05755 17.0467 8.98941 16.837 8.8295 16.7117L1.80956 11.2079C1.44286 10.9204 1.63411 10.3318 2.09976 10.3147L11.0141 9.9883C11.2171 9.98087 11.3955 9.85127 11.4653 9.66044L14.5304 1.28332Z"
          fill="white"
        />
        <path
          d="M14.7656 1.36914C14.8458 1.15061 15.1542 1.15061 15.2344 1.36914L18.2998 9.74609C18.4045 10.0323 18.6721 10.227 18.9766 10.2383L27.8906 10.5645C28.1234 10.573 28.2193 10.867 28.0361 11.0107L21.0166 16.5146C20.7768 16.7027 20.6743 17.0174 20.7578 17.3105L23.2021 25.8896C23.2658 26.1135 23.0155 26.2954 22.8223 26.166L15.418 21.1895C15.1652 21.0199 14.8348 21.0199 14.582 21.1895L7.17773 26.166C6.98446 26.2954 6.73423 26.1135 6.79785 25.8896L9.24219 17.3105C9.32567 17.0174 9.22325 16.7027 8.9834 16.5146L1.96387 11.0107C1.78073 10.8669 1.87662 10.573 2.10938 10.5645L11.0234 10.2383C11.3279 10.227 11.5955 10.0323 11.7002 9.74609L14.7656 1.36914Z"
          stroke="#777777"
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7_4252"
          x="1.11719"
          y="0.455139"
          width="28.7656"
          height="27.5048"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.5" dy="0.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_4252"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_4252"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
