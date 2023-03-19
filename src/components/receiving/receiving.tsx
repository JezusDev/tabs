import React from 'react';

interface ReceivingProps {
  className: string;
}
const receiving = ({ className }: ReceivingProps) => {
  return <section className={className}>Receiving</section>;
};

export default receiving;
