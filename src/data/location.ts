// cityData, countryData and currencyData are readonly and used to generate the union types for Country, City, Currency and NumberFormat
export const cityData = {
  Birmingham: {
    locale: 'en-GB',
  },
  Manchester: {
    locale: 'en-GB',
  },
  Leeds: {
    locale: 'en-GB',
  },
  London: {
    locale: 'en-GB',
  },
  Amsterdam: {
    locale: 'nl-NL',
  },
  Rotterdam: {
    locale: 'nl-NL',
  },
  Atlanta: {
    locale: 'en-US',
  },
} as const;

export const countryData = {
  'en-GB': {
    name: 'United Kingdom',
    currency: 'GBP',
  },
  'nl-NL': {
    name: 'Netherlands',
    currency: 'EUR',
  },
  'en-US': {
    name: 'United States',
    currency: 'USD',
  },
} as const;

export const currencyData = {
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
  },
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
  },
} as const;
