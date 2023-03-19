import React from 'react';

interface ExchangeProps {
  className: string;
}
const exchange = ({ className }: ExchangeProps) => {
  return <section className={className}>exchange</section>;
};

export default exchange;
