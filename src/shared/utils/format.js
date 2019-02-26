import { ONE_BILLION, ONE_MILLION } from './constants';

export const fmtPercent = (n) => {
  if (n === null || n === undefined) {
    return '0.0%';
  }

  const pcSign = n >= 0 ? '+' : '';
  const pc = n ? n * 100 : 0;
  return `${pcSign}${pc.toFixed(2)}%`;
};

export const fmtPrice = (n) => {
  if (n === null || n === undefined) {
    return '';
  }

  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const fmtVolume = (n) => {
  if (n === null || n === undefined) {
    return '';
  }

  return (n / ONE_MILLION).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const fmtMktCap = (n) => {
  if (n === null || n === undefined) {
    return '';
  }

  return (n / ONE_BILLION).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const fmtShares = (n) =>
  n === null || n === undefined
    ? ''
    : (n / ONE_MILLION).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
