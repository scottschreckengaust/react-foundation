import React from 'react';
import { mount, render } from 'enzyme';
import { createRenderer } from 'react-addons-test-utils';
import { expect } from 'chai';
import { Switch, SwitchInput, SwitchPaddle, SwitchActive, SwitchInactive } from 'components/switch';

describe('Switch component', () => {

  it('sets tag name', () => {
    const component = render(<Switch/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<Switch/>);
    expect(component).to.have.className('switch');
  });

  it('sets custom class name', () => {
    const component = render(<Switch className="my-switch"/>);
    expect(component).to.have.className('my-switch');
    expect(component).to.not.have.className('switch');
  });

  it('has correct children', () => {
    const renderer = createRenderer();
    renderer.render(<Switch/>);
    const output = renderer.getRenderOutput();
    expect(output).jsx.to.equal(<div className="switch"><SwitchInput/><SwitchPaddle/></div>);
  });

  it('passes on props', () => {
    const component = mount(<Switch input={{ value: 'foo' }} paddle={{ htmlFor: 'bar' }}/>);
    expect(component.find('.switch-input')).to.have.value('foo');
    expect(component.find('.switch-paddle')).to.have.attr('for', 'bar');
  });

  it('renders active label', () => {
    const component = mount(<Switch active={{ children: 'On' }}/>);
    expect(component.find('.switch-active')).to.have.text('On');
  });

  it('renders inactive label', () => {
    const component = mount(<Switch inactive={{ children: 'Off' }}/>);
    expect(component.find('.switch-inactive')).to.have.text('Off');
  });

});

describe('SwitchInput component', () => {

  it('sets tag name', () => {
    const component = render(<SwitchInput/>);
    expect(component).to.have.tagName('input');
  });

  it('sets class name', () => {
    const component = render(<SwitchInput/>);
    expect(component).to.have.className('switch-input');
  });

  it('sets custom class name', () => {
    const component = render(<SwitchInput className="my-switch-input"/>);
    expect(component).to.have.className('my-switch-input');
    expect(component).to.not.have.className('switch-input');
  });

});

describe('SwitchPaddle component', () => {

  it('sets tag name', () => {
    const component = render(<SwitchPaddle/>);
    expect(component).to.have.tagName('label');
  });

  it('sets class name', () => {
    const component = render(<SwitchPaddle/>);
    expect(component).to.have.className('switch-paddle');
  });

  it('sets custom class name', () => {
    const component = render(<SwitchPaddle className="my-switch-paddle"/>);
    expect(component).to.have.className('my-switch-paddle');
    expect(component).to.not.have.className('switch-paddle');
  });

});

describe('SwitchActive component', () => {

  it('sets tag name', () => {
    const component = render(<SwitchActive/>);
    expect(component).to.have.tagName('span');
  });

  it('sets class name', () => {
    const component = render(<SwitchActive/>);
    expect(component).to.have.className('switch-active');
  });

  it('sets custom class name', () => {
    const component = render(<SwitchActive className="my-switch-active"/>);
    expect(component).to.have.className('my-switch-active');
    expect(component).to.not.have.className('switch-active');
  });

});

describe('SwitchInactive component', () => {

  it('sets tag name', () => {
    const component = render(<SwitchInactive/>);
    expect(component).to.have.tagName('span');
  });

  it('sets class name', () => {
    const component = render(<SwitchInactive/>);
    expect(component).to.have.className('switch-inactive');
  });

  it('sets custom class name', () => {
    const component = render(<SwitchInactive className="my-switch-inactive"/>);
    expect(component).to.have.className('my-switch-inactive');
    expect(component).to.not.have.className('switch-inactive');
  });

});
