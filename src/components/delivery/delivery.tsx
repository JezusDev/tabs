import React from 'react';

interface DeliveryProps {
  className: string;
}
const delivery = ({ className }: DeliveryProps) => {
  return <section className={className}>delivery</section>;
};

export default delivery;
