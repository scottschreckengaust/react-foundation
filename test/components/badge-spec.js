import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Badge, { BadgeColors } from 'components/badge';

describe('Badge component', () => {

  it('sets tag name', () => {
    const component = render(<Badge/>);
    expect(component).to.have.tagName('span');
  });

  it('sets class name', () => {
    const component = render(<Badge/>);
    expect(component).to.have.className('badge');
  });

  it('sets custom class name', () => {
    const component = render(<Badge className="my-badge"/>);
    expect(component).to.have.className('my-badge');
    expect(component).to.not.have.className('badge');
  });

  it('sets contents', () => {
    const component = render(<Badge>1</Badge>);
    expect(component).to.have.text('1');
  });

  it('sets color', () => {
    const component = render(<Badge color={BadgeColors.SUCCESS}/>);
    expect(component).to.have.className('success');
    expect(component).to.not.have.attr('color');
  });

});
