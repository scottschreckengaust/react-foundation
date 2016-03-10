import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Button, Link, SIZE_SMALL, COLOR_SUCCESS } from 'components/button';

// Button component

describe('Button component', () => {

  it('sets tag name', () => {
    const component = render(<Button/>);
    expect(component).to.have.tagName('button');
  });

  it('sets class name', () => {
    const component = render(<Button/>);
    expect(component).to.have.className('button');
  });
  
  it('sets custom class name', () => {
    const component = render(<Button className="my-button"/>);
    expect(component).to.have.className('my-button');
    expect(component).to.not.have.className('button');
  });

  it('sets contents', () => {
    const component = render(<Button>Submit</Button>);
    expect(component).to.have.text('Submit');
  });

  it('sets size', () => {
    const component = render(<Button size={SIZE_SMALL}/>);
    expect(component).to.have.className('small');
    expect(component).to.not.have.attr('size');
  });

  it('sets color', () => {
    const component = render(<Button color={COLOR_SUCCESS}/>);
    expect(component).to.have.className('success');
    expect(component).to.not.have.attr('color');
  });

  it('sets hollow', () => {
    const component = render(<Button isHollow/>);
    expect(component).to.have.className('hollow');
    expect(component).to.not.have.attr('isHollow');
  });

  it('sets expanded', () => {
    const component = render(<Button isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });

  it('sets disabled', () => {
    const component = render(<Button isDisabled/>);
    expect(component).to.have.className('disabled');
    expect(component).to.not.have.attr('isDisabled');
  });

  it('sets dropdown', () => {
    const component = render(<Button isDropdown/>);
    expect(component).to.have.className('dropdown');
    expect(component).to.not.have.attr('isDropdown');
  });

});

// Link component

describe('Link component', () => {

  it('sets tag name', () => {
    const component = render(<Link/>);
    expect(component).to.have.tagName('a');
  });

  it('sets class name', () => {
    const component = render(<Link/>);
    expect(component).to.have.className('button');
  });

  it('sets custom class name', () => {
    const component = render(<Link className="my-button"/>);
    expect(component).to.have.className('my-button');
    expect(component).to.not.have.className('button');
  });

  it('sets contents', () => {
    const component = render(<Link>Link</Link>);
    expect(component).to.have.text('Link');
  });

  it('sets size', () => {
    const component = render(<Link size={SIZE_SMALL}/>);
    expect(component).to.have.className('small');
    expect(component).to.not.have.attr('size');
  });

  it('sets color', () => {
    const component = render(<Link color={COLOR_SUCCESS}/>);
    expect(component).to.have.className('success');
    expect(component).to.not.have.attr('color');
  });

  it('sets hollow', () => {
    const component = render(<Link isHollow/>);
    expect(component).to.have.className('hollow');
    expect(component).to.not.have.attr('isHollow');
  });

  it('sets expanded', () => {
    const component = render(<Link isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });

  it('sets disabled', () => {
    const component = render(<Link isDisabled/>);
    expect(component).to.have.className('disabled');
    expect(component).to.not.have.attr('isDisabled');
  });

  it('sets dropdown', () => {
    const component = render(<Link isDropdown/>);
    expect(component).to.have.className('dropdown');
    expect(component).to.not.have.attr('isDropdown');
  });

});
