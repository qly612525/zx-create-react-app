import { shallow } from 'enzyme';
import * as React from 'react';
import Home from './index';

it('App\'s title should be Todos', function () {
    let app = shallow(<Home />);
    expect(app.text()).toEqual('Home');
});
