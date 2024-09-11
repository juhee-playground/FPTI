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
      return colors.cancel.lighter;
    case 'default':
      return colors.text.basic;
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
    L: '#F7A4A4',
    S: '#F95959',
    A: '#1CC5DC',
    M: '#defede',
    D: '#14B1AB',
    T: '#86A7FC',
    P: '#A63EC5',
    C: '#FF9F29',
    E: '#FFD95A',
  };

  return typeColors[type] || colors.black; // 기본값은 검정색
};
