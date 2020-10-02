import React from 'react';
import App from '../App';
import { List }from '../component/list';
import { Task } from '../component/task';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    shallow(<App />)
});
it('renders without crashing with tasks', () => {
    shallow(<App />)
});
it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const information = <h1>WORK TO-DOS</h1>;
    expect(wrapper.contains(information)).toEqual(true);
});
it('renders <List /> container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(List)).toHaveLength(1);
});
it('contains <Task /> component', async () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
        data: {
            id: 'id_284bsna9sn3n1913n',
            task: 'Pack luggage',
            status: 'PENDING'
        }
    });
    expect(wrapper.find('#PENDING'));
    expect(wrapper.find('#REMOVE'));
});

