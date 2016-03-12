import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Callout, { CalloutColors, CalloutSizes } from 'components/callout';

describe('Callout component', () => {

  it('sets tag name', () => {
    const component = render(<Callout/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<Callout/>);
    expect(component).to.have.className('callout');
  });

  it('sets custom class name', () => {
    const component = render(<Callout className="my-callout"/>);
    expect(component).to.have.className('my-callout');
    expect(component).to.not.have.className('callout');
  });

  it('sets contents', () => {
    const component = render(<Callout>Hello</Callout>);
    expect(component).to.have.text('Hello');
  });

  it('sets color', () => {
    const component = render(<Callout color={CalloutColors.SUCCESS}/>);
    expect(component).to.have.className('success');
    expect(component).to.not.have.attr('color');
  });

  it('sets size', () => {
    const component = render(<Callout size={CalloutSizes.SMALL}/>);
    expect(component).to.have.className('small');
    expect(component).to.not.have.attr('size');
  });

});
