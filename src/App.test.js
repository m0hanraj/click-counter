import React from 'react';

import { shallow } from 'enzyme';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
	const setup = () => shallow(<App />);

	const findByTestAttr = (wrapper, value) =>
		wrapper.find(`[data-test="${value}"]`);

	test('renders non empty component without crashing', () => {
		const wrapper = setup();

		const appComp = findByTestAttr(wrapper, 'app');
		expect(appComp.length).toBe(1);
	});

	test('renders counter display', () => {
		const wrapper = setup();
		const counterText = findByTestAttr(wrapper, 'counter-text');
		expect(counterText.length).toBe(1);
	});
	test('renders increment button', () => {
		const wrapper = setup();
		const button = findByTestAttr(wrapper, 'inc-button');
		expect(button.length).toBe(1);
	});
	test('counter display starts with 0', () => {
		const wrapper = setup();
		const count = findByTestAttr(wrapper, 'count');
		expect(count.text()).toBe('0');
	});
	test('clicking increment button increments counter display', () => {});
});
