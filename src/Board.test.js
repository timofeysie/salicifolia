import React from 'react';
import Board from './board';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(<Board squares={squares}/>);
});