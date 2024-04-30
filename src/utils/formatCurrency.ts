// https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
import { Currency, LocalePrice, NumberFormat } from '@/data/types';

export const formatCurrency = (price: LocalePrice, numberFormat: NumberFormat, currency: Currency) => {
  const formattedPrice = price / 100;
  return new Intl.NumberFormat(numberFormat, { style: 'currency', currency })
    .format(formattedPrice)
    .replace('.00', '')
    .replace(',00', '');
};
