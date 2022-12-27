import { useAppContext } from "../../context/app";

type PropsIcon = {
  name: string;
  color?: string;
};

export const Icon = ({ name, color }: PropsIcon) => {
  const { tenant } = useAppContext();

  function SelectedIcon() {
    switch (name) {
      case "close":
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z"
              fill={tenant?.mainColor}
            />
          </svg>
        );

      case "dislike":
        return (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z"
              fill="white"
            />
          </svg>
        );

      case "dislike":
        return (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z"
              fill="white"
            />
          </svg>
        );

      case "like":
        return (
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582995 7.63698 -0.503995 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
              fill="white"
            />
            <path
              d="M3.5 2L6.5 1.5L10.5 2L14 1.5L17.5 2.5L19 6L15 11.5L10 16.5L5 11.5L1 6L3.5 2Z"
              fill="white"
            />
          </svg>
        );

      case "arrow":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.828 6.99998H16V8.99998H3.828L9.192 14.364L7.778 15.778L0 7.99998L7.778 0.221985L9.192 1.63598L3.828 6.99998Z"
              fill={color || tenant?.mainColor}
            />
          </svg>
        );

      case "menuFood":
        return (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.333313V13.6666H10.6667V8.99998H8V4.33331C8 3.27245 8.42143 2.25503 9.17157 1.50489C9.92172 0.75474 10.9391 0.333313 12 0.333313V0.333313ZM10.6667 2.01998C10.1133 2.33331 9.33333 3.11331 9.33333 4.33331V7.66665H10.6667V2.01998V2.01998ZM4 8.26665V13.6666H2.66667V8.26665C1.91387 8.11273 1.23733 7.70356 0.75143 7.10834C0.265532 6.51311 9.40437e-05 5.76835 0 4.99998V0.99998H1.33333V5.66665H2.66667V0.99998H4V5.66665H5.33333V0.99998H6.66667V4.99998C6.66657 5.76835 6.40114 6.51311 5.91524 7.10834C5.42934 7.70356 4.75279 8.11273 4 8.26665V8.26665Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "exit":
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.66675 11H4.00008V12.3334H12.0001V1.66671H4.00008V3.00004H2.66675V1.00004C2.66675 0.82323 2.73699 0.65366 2.86201 0.528636C2.98703 0.403612 3.1566 0.333374 3.33341 0.333374H12.6667C12.8436 0.333374 13.0131 0.403612 13.1382 0.528636C13.2632 0.65366 13.3334 0.82323 13.3334 1.00004V13C13.3334 13.1769 13.2632 13.3464 13.1382 13.4714C13.0131 13.5965 12.8436 13.6667 12.6667 13.6667H3.33341C3.1566 13.6667 2.98703 13.5965 2.86201 13.4714C2.73699 13.3464 2.66675 13.1769 2.66675 13V11ZM4.00008 6.33337H8.66675V7.66671H4.00008V9.66671L0.666748 7.00004L4.00008 4.33337V6.33337Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "configure":
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.22671 10.3333C0.944887 9.84599 0.725817 9.32497 0.574707 8.78267C0.903579 8.6154 1.17977 8.36042 1.37273 8.04593C1.56568 7.73145 1.66788 7.36971 1.66802 7.00075C1.66816 6.63178 1.56623 6.26997 1.37351 5.95534C1.18079 5.64071 0.904787 5.38552 0.57604 5.218C0.877398 4.12833 1.45119 3.13331 2.24337 2.32667C2.55277 2.52782 2.91179 2.63944 3.28069 2.64919C3.6496 2.65894 4.01401 2.56642 4.33359 2.38189C4.65318 2.19736 4.91548 1.928 5.09146 1.60363C5.26744 1.27926 5.35024 0.912521 5.33071 0.544004C6.42545 0.261085 7.57419 0.261544 8.66871 0.545337C8.64934 0.913847 8.73231 1.28053 8.90843 1.60481C9.08454 1.92909 9.34695 2.19832 9.66659 2.38271C9.98624 2.5671 10.3507 2.65946 10.7196 2.64957C11.0884 2.63968 11.4474 2.52792 11.7567 2.32667C12.1427 2.72 12.4854 3.16734 12.7734 3.66667C13.062 4.166 13.278 4.68667 13.4254 5.21734C13.0965 5.38461 12.8203 5.63959 12.6274 5.95407C12.4344 6.26856 12.3322 6.6303 12.3321 6.99926C12.3319 7.36823 12.4339 7.73004 12.6266 8.04467C12.8193 8.3593 13.0953 8.61449 13.424 8.782C13.1227 9.87168 12.5489 10.8667 11.7567 11.6733C11.4473 11.4722 11.0883 11.3606 10.7194 11.3508C10.3505 11.3411 9.98607 11.4336 9.66649 11.6181C9.3469 11.8026 9.08461 12.072 8.90862 12.3964C8.73264 12.7207 8.64984 13.0875 8.66937 13.456C7.57463 13.7389 6.42589 13.7385 5.33137 13.4547C5.35074 13.0862 5.26777 12.7195 5.09165 12.3952C4.91554 12.0709 4.65314 11.8017 4.33349 11.6173C4.01384 11.4329 3.64941 11.3405 3.28052 11.3504C2.91164 11.3603 2.55268 11.4721 2.24337 11.6733C1.84937 11.2713 1.50777 10.8211 1.22671 10.3333V10.3333ZM5.00004 10.464C5.71046 10.8738 6.2446 11.5313 6.50004 12.3107C6.83271 12.342 7.16671 12.3427 7.49937 12.3113C7.75498 11.5319 8.28937 10.8743 9.00004 10.4647C9.71019 10.0538 10.5471 9.91966 11.35 10.088C11.5434 9.816 11.71 9.526 11.8487 9.22267C11.3017 8.61163 10.9995 7.82014 11 7C11 6.16 11.3134 5.37534 11.8487 4.77734C11.7091 4.4741 11.5417 4.18443 11.3487 3.912C10.5462 4.08021 9.7099 3.94632 9.00004 3.536C8.28962 3.12625 7.75548 2.46866 7.50004 1.68934C7.16737 1.658 6.83337 1.65734 6.50071 1.68867C6.24511 2.4681 5.71071 3.12571 5.00004 3.53534C4.2899 3.94621 3.45303 4.08035 2.65004 3.912C2.45708 4.18419 2.29013 4.47391 2.15137 4.77734C2.69842 5.38838 3.00063 6.17986 3.00004 7C3.00004 7.84 2.68671 8.62467 2.15137 9.22267C2.29102 9.52591 2.4584 9.81558 2.65137 10.088C3.45385 9.9198 4.29018 10.0537 5.00004 10.464ZM7.00004 9C6.46961 9 5.9609 8.78929 5.58583 8.41422C5.21075 8.03915 5.00004 7.53044 5.00004 7C5.00004 6.46957 5.21075 5.96086 5.58583 5.58579C5.9609 5.21072 6.46961 5 7.00004 5C7.53047 5 8.03918 5.21072 8.41425 5.58579C8.78933 5.96086 9.00004 6.46957 9.00004 7C9.00004 7.53044 8.78933 8.03915 8.41425 8.41422C8.03918 8.78929 7.53047 9 7.00004 9ZM7.00004 7.66667C7.17685 7.66667 7.34642 7.59643 7.47144 7.47141C7.59647 7.34638 7.66671 7.17682 7.66671 7C7.66671 6.82319 7.59647 6.65362 7.47144 6.5286C7.34642 6.40358 7.17685 6.33334 7.00004 6.33334C6.82323 6.33334 6.65366 6.40358 6.52864 6.5286C6.40361 6.65362 6.33337 6.82319 6.33337 7C6.33337 7.17682 6.40361 7.34638 6.52864 7.47141C6.65366 7.59643 6.82323 7.66667 7.00004 7.66667V7.66667Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "request":
        return (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 13.6666H0.666667C0.489856 13.6666 0.320286 13.5964 0.195262 13.4714C0.0702379 13.3464 0 13.1768 0 13V0.99998C0 0.823169 0.0702379 0.653599 0.195262 0.528575C0.320286 0.403551 0.489856 0.333313 0.666667 0.333313H11.3333C11.5101 0.333313 11.6797 0.403551 11.8047 0.528575C11.9298 0.653599 12 0.823169 12 0.99998V13C12 13.1768 11.9298 13.3464 11.8047 13.4714C11.6797 13.5964 11.5101 13.6666 11.3333 13.6666ZM10.6667 12.3333V1.66665H1.33333V12.3333H10.6667ZM3.33333 3.66665H8.66667V4.99998H3.33333V3.66665ZM3.33333 6.33331H8.66667V7.66665H3.33333V6.33331ZM3.33333 8.99998H8.66667V10.3333H3.33333V8.99998Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "favorite":
        return (
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00059 1.01932C8.56659 -0.38668 10.9866 -0.340013 12.4953 1.17132C14.0033 2.68332 14.0553 5.09132 12.6526 6.66199L6.99926 12.3233L1.34726 6.66199C-0.0554107 5.09132 -0.00274389 2.67932 1.50459 1.17132C3.01459 -0.338013 5.42992 -0.38868 7.00059 1.01932V1.01932ZM11.5513 2.11332C10.5513 1.11199 8.93792 1.07132 7.89126 2.01132L7.00126 2.80999L6.11059 2.01199C5.06059 1.07065 3.45059 1.11199 2.44792 2.11465C1.45459 3.10799 1.40459 4.69799 2.31992 5.74865L6.99992 10.436L11.6799 5.74932C12.5959 4.69799 12.5459 3.10999 11.5513 2.11332V2.11332Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "bag":
        return (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.33333 0.333313H9.66667C9.77016 0.333313 9.87224 0.35741 9.96481 0.403695C10.0574 0.44998 10.1379 0.517182 10.2 0.59998L12 2.99998V13C12 13.1768 11.9298 13.3464 11.8047 13.4714C11.6797 13.5964 11.5101 13.6666 11.3333 13.6666H0.666667C0.489856 13.6666 0.320286 13.5964 0.195262 13.4714C0.0702379 13.3464 0 13.1768 0 13V2.99998L1.8 0.59998C1.8621 0.517182 1.94262 0.44998 2.03519 0.403695C2.12776 0.35741 2.22984 0.333313 2.33333 0.333313ZM10.6667 4.33331H1.33333V12.3333H10.6667V4.33331ZM10.3333 2.99998L9.33333 1.66665H2.66667L1.66667 2.99998H10.3333ZM4 5.66665V6.99998C4 7.53041 4.21071 8.03912 4.58579 8.41419C4.96086 8.78927 5.46957 8.99998 6 8.99998C6.53043 8.99998 7.03914 8.78927 7.41421 8.41419C7.78929 8.03912 8 7.53041 8 6.99998V5.66665H9.33333V6.99998C9.33333 7.88403 8.98214 8.73188 8.35702 9.357C7.7319 9.98212 6.88406 10.3333 6 10.3333C5.11595 10.3333 4.2681 9.98212 3.64298 9.357C3.01786 8.73188 2.66667 7.88403 2.66667 6.99998V5.66665H4Z"
              fill="#6A7D8B"
            />
          </svg>
        );

      case "notIcons":
        return (
          <svg
            width="236"
            height="136"
            viewBox="0 0 236 136"
            fill={tenant?.mainColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M36 63.2L47.9 115.4L39.4 117.3L27.5 65.1C22.5 65.2 17.6 63.6 13.6 60.5C9.6 57.4 6.9 53.1 5.8 48.2L0 22.7L8.5 20.8L15.3 50.5L23.8 48.6L17 18.8L25.5 16.9L32.3 46.6L40.8 44.7L34 14.9L42.5 13L48.3 38.5C49.4 43.4 48.8 48.5 46.6 53C44.4 57.5 40.6 61.1 36 63.2Z"
                fill="#E0E0E0"
              />
              <path
                d="M235.2 14.9L207.2 116.5L198.8 114.2L211.7 67.2L194.9 62.6L203 33.2C204.8 26.5 209.3 20.8 215.3 17.4C221.4 14 228.5 13.1 235.2 14.9ZM223.8 23.3C219.8 24.3 213.5 27.9 211.4 35.6L205.6 56.6L214 58.9L223.8 23.3Z"
                fill="#E0E0E0"
              />
              <path
                d="M109.5 59.3C109.9 63.3 106.9 66.8 102.9 67.2C98.8999 67.6 95.3999 64.6 94.9999 60.6C94.5999 56.6 97.5999 53.1 101.6 52.7C105.6 52.3 109.1 55.3 109.5 59.3Z"
                fill="#E0E0E0"
              />
              <path
                d="M149.2 55.5C149.6 59.5 146.6 63 142.6 63.4C138.6 63.8 135.1 60.8 134.7 56.8C134.3 52.8 137.3 49.3 141.3 48.9C145.3 48.6 148.8 51.5 149.2 55.5Z"
                fill="#E0E0E0"
              />
              <path
                d="M114.6 90.4001L114.4 87.9001C114.1 84.8001 115.1 81.8 117.1 79.5C119.1 77.1 121.9 75.7 125 75.4C128.1 75.1 131.1 76.1 133.4 78.1C135.8 80.1 137.2 82.9 137.5 86L137.7 88.5L132.6 88.9001L132.4 86.4001C132.3 84.6 131.4 83.1 130.1 81.9C128.8 80.8 127.1 80.3 125.4 80.4C123.6 80.5 122 81.4 120.9 82.7C119.8 84 119.3 85.7001 119.4 87.4001L119.6 89.9001L114.6 90.4001Z"
                fill="#E0E0E0"
              />
              <path
                d="M122 136C84.5 136 54 105.5 54 68C54 30.5 84.5 0 122 0C159.5 0 190 30.5 190 68C190 105.5 159.5 136 122 136ZM122 8C88.9 8 62 34.9 62 68C62 101.1 88.9 128 122 128C155.1 128 182 101.1 182 68C182 34.9 155.1 8 122 8Z"
                fill="#E0E0E0"
              />
              <path
                d="M121.9 121C113.3 121 104.9 118.9 97.3 114.9C87.7 109.9 80 102.2 75 92.6C70 83 68 72.3 69.3 61.6C70.6 50.9 75.1 40.9 82.3 32.9C89.5 24.8 98.8 19.2 109.3 16.6C119.8 14 130.7 14.7 140.8 18.5C150.9 22.3 159.5 29.1 165.6 37.9C171.7 46.8 175 57.2 175 68H167C167 58.8 164.2 50 159 42.4C153.8 34.9 146.5 29.1 137.9 25.9C129.3 22.7 120.1 22.1 111.2 24.3C102.3 26.5 94.4 31.3 88.3 38.1C82.2 45 78.4 53.4 77.3 62.5C76.2 71.6 77.8 80.7 82.1 88.8C86.4 96.9 92.9 103.5 101 107.8C109.1 112.1 118.2 113.8 127.3 112.7L128.3 120.6C126.2 120.9 124.1 121 121.9 121Z"
                fill="#E0E0E0"
              />
              <path
                d="M138.7 118.3L136.2 110.7C143.6 108.3 150.2 103.9 155.4 98.1C160.6 92.3 164.2 85.3 165.9 77.7L173.7 79.4C171.7 88.3 167.4 96.7 161.3 103.5C155.2 110.3 147.4 115.4 138.7 118.3Z"
                fill="#E0E0E0"
              />
            </g>
          </svg>
        );

      default:
        return ":(";
    }
  }

  return <div>{SelectedIcon()}</div>;
};