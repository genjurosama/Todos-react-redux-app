import {TasksList} from './tasksList.jsx'
import React from 'react';
import Enzyme,{ mount,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

test('Task Listcomponent renders the list of tasks of the right length', () => {
    const tasks = [{ id: 1, title: "task1", description: 'task desc1' },
    { id: 2, title: "task2", description: 'task desc2' }, 
    { id: 3, title: "task3", description: 'task desc3' },  ];
    const wrapper = mount(
      <TasksList tasks={tasks} />
    );
    expect(wrapper.find('Task')).toHaveLength(3);
});




// test('Task Listcomponent adds new component', () => {

//     const tasks = [{ id: 1, title: "task1", description: 'task desc1' },
//     { id: 2, title: "task2", description: 'task desc2' }, 
//     { id: 3, title: "task3", description: 'task desc3' },  ];

//     const wrapper = mount(
//       <TasksList tasks={tasks} />
//     );
//     const b = wrapper.find('.addButton');
//     const title = wrapper.find('.titleInput');
//     const desc = wrapper.find('.descInput');
//     title.simulate("change", { target: { value: "task4" }})
//     desc.simulate("change", { target: { value: "task4 desc" }})
//     b.simulate('click');
//     expect(wrapper.find('Task')).toHaveLength(4);
// });
