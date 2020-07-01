import React from 'react';

const style: React.CSSProperties = {
	backgroundColor: '#7159c1',
	color: '#fff'
};

export const Button: React.FC = ({ children }) => {
	return <button style={style}>{children}</button>;
};
