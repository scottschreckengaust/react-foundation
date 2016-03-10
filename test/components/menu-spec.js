import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Menu, MenuItem, MenuText, ALIGN_RIGHT, ALIGN_CENTER } from 'components/menu';

// Menu component

describe('Menu component', () => {

  it('sets tag name', () => {
    const component = render(<Menu/>);
    expect(component).to.have.tagName('ul');
  });

  it('sets class name', () => {
    const component = render(<Menu/>);
    expect(component).to.have.className('menu');
  });

  it('sets custom class name', () => {
    const component = render(<Menu className="my-menu"/>);
    expect(component).to.have.className('my-menu');
    expect(component).to.not.have.className('menu');
  });

  it('sets align right', () => {
    const component = render(<Menu align={ALIGN_RIGHT}/>);
    expect(component).to.have.className('align-right');
    expect(component).to.not.have.attr('align');
  });

  it('sets align center', () => {
    const component = render(<Menu align={ALIGN_CENTER}/>);
    expect(component).to.have.className('align-center');
    expect(component).to.not.have.attr('align');
  });

  it('sets expanded', () => {
    const component = render(<Menu isExpanded/>);
    expect(component).to.have.className('expanded');
    expect(component).to.not.have.attr('isExpanded');
  });

  it('sets vertical', () => {
    const component = render(<Menu isVertical/>);
    expect(component).to.have.className('vertical');
    expect(component).to.not.have.attr('isVertical');
  });

  it('sets simple', () => {
    const component = render(<Menu isSimple/>);
    expect(component).to.have.className('simple');
    expect(component).to.not.have.attr('isSimple');
  });
  
});

// MenuItem component

describe('MenuItem component', () => {

  it('sets tag name', () => {
    const component = render(<MenuItem/>);
    expect(component).to.have.tagName('li');
  });

  it('sets contents', () => {
    const component = render(<MenuItem>Text</MenuItem>);
    expect(component).to.have.text('Text');
  });

  it('sets active', () => {
    const component = render(<MenuItem isActive/>);
    expect(component).to.have.className('active');
    expect(component).to.not.have.attr('isActive');
  });

});

// MenuText component

describe('MenuText component', () => {

  it('sets class name', () => {
    const component = render(<MenuText/>);
    expect(component).to.have.className('menu-text');
  });

  it('sets custom class name', () => {
    const component = render(<MenuText className="my-menu-text"/>);
    expect(component).to.have.className('my-menu-text');
    expect(component).to.not.have.className('menu-text');
  });

});
