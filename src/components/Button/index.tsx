import React from 'react';

interface Props {
	/** 
	 * This prop is brackground-color from default button
	*/
	backgroundColor?: string;
	/** 
	 * This prop is text color from default button
	*/
	color?: string;
}

const style: React.CSSProperties = {
	backgroundColor: '#28f5be',
	color: '#1e1e1e'
};

export const Button: React.FC<Props> = ({ children, backgroundColor = '#28f5be', color = '#1e1e1e' }) => {
	return <button style={style}>{children}</button>;
};
