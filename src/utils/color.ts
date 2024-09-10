import { colors } from '@/styles/colors';

export const darkenColor = (color: string, amount: number) => {
  const [r, g, b] = color.match(/\w\w/g)!.map(c => parseInt(c, 16));
  return `rgb(${Math.max(0, r - amount)}, ${Math.max(0, g - amount)}, ${Math.max(0, b - amount)})`;
};

export const getBrightness = (color: string) => {
  const [r, g, b] = color.match(/\w\w/g)!.map(c => parseInt(c, 16));
  return (r * 299 + g * 587 + b * 114) / 1000;
};

export const getCustomColor = (color?: string) => {
  switch (color) {
    case 'primary':
      return colors.primary;
    case 'secondary':
      return colors.secondary;
    case 'error':
      return colors.error.default;
    case 'warning':
      return colors.warning.default;
    case 'success':
      return colors.success.default;
    case 'info':
      return colors.info.default;
    case 'cancel':
    case 'default':
      return colors.cancel.lighter;
    default:
      return color || colors.primary;
  }
};

export const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  // 3자리 hex 코드일 경우
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6자리 hex 코드일 경우
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
};

export const getRgbaColor = (hex: string, opacity: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getColorByType = (type: string) => {
  const typeColors: { [key: string]: string } = {
    A: '#589EE3', // 더 진한 파란색(고침)
    D: '#FFAB85', // 더 진한 오렌지색
    M: '#defede',
    L: '#ECB0BB', // 더 진한 핑크색(고침)
    S: '#8BBF9F', // 더 진한 녹색
    T: '#AE95CF', // 진한 라벤더색(고침)
    P: '#FFC560', // 더 진한 황토색
    C: '#80CBC4', // 더 진한 민트색
    E: '#FFD95A', // 진한 레몬색(고침)
  };

  return typeColors[type] || colors.black; // 기본값은 검정색
};
