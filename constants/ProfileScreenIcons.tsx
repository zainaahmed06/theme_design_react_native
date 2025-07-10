import Svg, {Path} from "react-native-svg";

// BackIcon
export const BackIcon = ({size = 24, color = "red"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10 18L11.4 16.55L7.85 13H20V11H7.85L11.4 7.45L10 6L4 12L10 18Z'
        fill={color}
      />
    </Svg>
  );
};

// SuccessIcon
export const EmailVerifiedIcon = ({size = 12, color = "red"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 12 12' fill='none'>
      <Path
        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
        stroke={color}
        strokeWidth='0.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        opacity='0.34'
        d='M3.875 5.99996L5.29 7.41496L8.125 4.58496'
        stroke={color}
        strokeWidth='0.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

// SettingIcon
export const SettingIcon = ({size = 24, color = "red"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 22.6298C11.33 22.6298 10.65 22.4798 10.12 22.1698L4.61999 18.9998C2.37999 17.4898 2.23999 17.2598 2.23999 14.8898V9.1098C2.23999 6.7398 2.36999 6.5098 4.56999 5.0198L10.11 1.8198C11.16 1.2098 12.81 1.2098 13.86 1.8198L19.38 4.9998C21.62 6.5098 21.76 6.7398 21.76 9.1098V14.8798C21.76 17.2498 21.63 17.4798 19.43 18.9698L13.89 22.1698C13.35 22.4798 12.67 22.6298 12 22.6298ZM12 2.8698C11.58 2.8698 11.17 2.9498 10.88 3.1198L5.37999 6.2998C3.74999 7.3998 3.74999 7.3998 3.74999 9.1098V14.8798C3.74999 16.5898 3.74999 16.5898 5.41999 17.7198L10.88 20.8698C11.47 21.2098 12.54 21.2098 13.13 20.8698L18.63 17.6898C20.25 16.5898 20.25 16.5898 20.25 14.8798V9.1098C20.25 7.3998 20.25 7.3998 18.58 6.2698L13.12 3.1198C12.83 2.9498 12.42 2.8698 12 2.8698Z'
        fill={color}
      />
      <Path
        d='M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z'
        fill={color}
      />
    </Svg>
  );
};
