import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module).add('Default', () => (
	<Button backgroundColor="#28f5be" color="#1e1e1e">
		TESTE
	</Button>
));
