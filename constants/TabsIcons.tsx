import React from "react";
import Svg, {Path} from "react-native-svg";

// HomeIcon

export const HomeIcon = ({size = 24, color = "red", brandColor = "blue"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M10.07 2.81984L3.14002 8.36983C2.36002 8.98983 1.86002 10.2999 2.03002 11.2799L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2799C22.13 10.2999 21.63 8.98983 20.86 8.36983L13.93 2.82985C12.86 1.96985 11.13 1.96984 10.07 2.81984Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

// StakeIcon
export const StakeIcon = ({size = 24, color = "red", brandColor = "blue"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M8.31982 15.27L14.8598 8.72998'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.73001 10.3701C9.40932 10.3701 9.95999 9.81948 9.95999 9.14017C9.95999 8.46086 9.40932 7.91016 8.73001 7.91016C8.0507 7.91016 7.5 8.46086 7.5 9.14017C7.5 9.81948 8.0507 10.3701 8.73001 10.3701Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.27 16.0899C15.9493 16.0899 16.5 15.5392 16.5 14.8599C16.5 14.1806 15.9493 13.6299 15.27 13.6299C14.5907 13.6299 14.04 14.1806 14.04 14.8599C14.04 15.5392 14.5907 16.0899 15.27 16.0899Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

// RewardIcon
export const RewardIcon = ({size = 24, color = "red", brandColor = "blue"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M19.97 10H3.97V18C3.97 21 4.97 22 7.97 22H15.97C18.97 22 19.97 21 19.97 18V10Z'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.64 4.99994H6.12C5.78 4.62994 5.79 4.05994 6.15 3.69994L7.57 2.27994C7.94 1.90994 8.55 1.90994 8.92 2.27994L11.64 4.99994Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M17.87 4.99994H12.35L15.07 2.27994C15.44 1.90994 16.05 1.90994 16.42 2.27994L17.84 3.69994C18.2 4.05994 18.21 4.62994 17.87 4.99994Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M8.94 10V15.14C8.94 15.94 9.82 16.41 10.49 15.98L11.43 15.36C11.77 15.14 12.2 15.14 12.53 15.36L13.42 15.96C14.08 16.4 14.97 15.93 14.97 15.13V10H8.94Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

// MineIcon
export const MineIcon = ({size = 24, color = "red", brandColor = "blue"}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M7.61301 4.604C9.34901 2.868 10.217 2 11.295 2C12.374 2 13.242 2.868 14.977 4.604L19.397 9.023C21.131 10.758 22 11.626 22 12.705C22 13.784 21.132 14.651 19.396 16.387C17.66 18.123 16.792 18.991 15.714 18.991C14.635 18.991 13.767 18.123 12.032 16.387L7.61201 11.968C5.87801 10.233 5.01001 9.365 5.01001 8.286C5.01001 7.207 5.87701 6.34 7.61301 4.604Z'
        stroke={color}
        strokeWidth='1.5'
      />
      <Path
        d='M11.295 15.6501L5.77201 21.1741C5.42901 21.5171 5.25801 21.6881 5.08001 21.7911C4.84263 21.9284 4.57324 22.0007 4.29901 22.0007C4.02478 22.0007 3.7554 21.9284 3.51801 21.7911C3.33901 21.6881 3.16801 21.5171 2.82601 21.1741C2.48301 20.8321 2.31201 20.6611 2.20901 20.4831C2.07154 20.2456 1.99915 19.976 1.99915 19.7016C1.99915 19.4272 2.07154 19.1576 2.20901 18.9201C2.31201 18.7421 2.48301 18.5711 2.82601 18.2281L8.34901 12.7051M18.66 8.28609L19.028 7.91809C19.37 7.57509 19.542 7.40409 19.645 7.22609C19.7823 6.9887 19.8546 6.71931 19.8546 6.44509C19.8546 6.17086 19.7823 5.90147 19.645 5.66409C19.542 5.48509 19.37 5.31409 19.028 4.97209C18.686 4.62909 18.514 4.45809 18.336 4.35509C18.0986 4.2178 17.8292 4.14551 17.555 4.14551C17.2808 4.14551 17.0114 4.2178 16.774 4.35509C16.596 4.45809 16.424 4.62909 16.082 4.97209L15.714 5.34009'
        stroke={brandColor}
        strokeWidth='1.5'
      />
    </Svg>
  );
};

// ProfileIcon
export const ProfileIcon = ({
  size = 24,
  color = "red",
  brandColor = "blue",
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.50998C8.72 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};

// HistoryIcon
export const HistoryIcon = ({
  size = 24,
  color = "red",
  brandColor = "blue",
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 25' fill='none'>
      <Path
        d='M22 10.5V15.5C22 20.5 20 22.5 15 22.5H9C4 22.5 2 20.5 2 15.5V9.5C2 4.5 4 2.5 9 2.5H14'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M22 10.5H18C15 10.5 14 9.5 14 6.5V2.5L22 10.5Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7 13.5H13'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M7 17.5H11'
        stroke={brandColor}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
};
