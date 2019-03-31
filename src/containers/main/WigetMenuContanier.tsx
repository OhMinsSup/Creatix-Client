import React from 'react';
import WigetMenu from '../../components/main/WigetMenu';

interface WigetMenuContanierProps {
  title: string;
}

const WigetMenuContanier: React.SFC<WigetMenuContanierProps> = ({ title }) => {
  return <WigetMenu title={title} />;
};

export default WigetMenuContanier;
