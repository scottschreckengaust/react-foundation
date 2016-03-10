import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Icon from 'components/icon';

describe('Icon component', () => {

  it('sets tag name', () => {
    const component = render(<Icon name="ok"/>);
    expect(component).to.have.tagName('i');
  });

  it('sets name', () => {
    const component = render(<Icon name="ok"/>);
    expect(component).to.have.className('ok');
    expect(component).to.not.have.attr('name');
  });

  it('sets prefix', () => {
    const component = render(<Icon prefix="fa" name="ok"/>);
    expect(component).to.have.className('fa');
    expect(component).to.not.have.attr('prefix');
  });

  it('adds prefix to name', () => {
    const component = render(<Icon prefix="fa" name="ok"/>);
    expect(component).to.have.className('fa');
    expect(component).to.have.className('fa-ok');
  });

});
