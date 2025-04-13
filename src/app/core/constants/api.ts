export const BASE_API_URL = 'api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = 'fe3695759da76e0c9dcaf566634a08ed';

export const API_PROTOCOL = {
  http: 'http//',
  https: 'https://',
};

export const CURRENT_PROTOCOL = {
  protocol: API_PROTOCOL.https,
};

export const WEATHER_CONFIG = {
  endpoint: BASE_API_URL,
  key: WEATHER_API_KEY,
  protocol: CURRENT_PROTOCOL.protocol,
  url: {
    forecast: '/forecast',
  },
  iconUrl: (iconCode: string) =>
    `${CURRENT_PROTOCOL.protocol}openweathermap.org/img/wn/${iconCode}@2x.png`,
};
