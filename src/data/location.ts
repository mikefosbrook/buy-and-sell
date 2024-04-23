// locationsData is readonly and used to generate the union types for Country, City, Currency and NumberFormat
export const locationData = {
  GBR: {
    name: 'United Kingdom',
    cities: ['Birmingham', 'Manchester', 'Leeds', 'London'],
    currency: 'GBP',
    numberFormat: 'en-GB',
  },
  NLD: {
    name: 'Netherlands',
    cities: ['Amsterdam', 'Rotterdam'],
    currency: 'EUR',
    numberFormat: 'nl-NL',
  },
  USA: {
    name: 'United States of America',
    cities: ['Atlanta'],
    currency: 'USD',
    numberFormat: 'en-US',
  },
} as const;
