import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Label, { LabelColors } from 'components/label';

describe('Label component', () => {

  it('sets tag name', () => {
    const component = render(<Label/>);
    expect(component).to.have.tagName('span');
  });

  it('sets class name', () => {
    const component = render(<Label/>);
    expect(component).to.have.className('label');
  });

  it('sets custom class name', () => {
    const component = render(<Label className="my-label"/>);
    expect(component).to.have.className('my-label');
    expect(component).to.not.have.className('label');
  });

  it('sets contents', () => {
    const component = render(<Label>Build passing</Label>);
    expect(component).to.have.text('Build passing');
  });

  it('sets color', () => {
    const component = render(<Label color={LabelColors.SUCCESS}/>);
    expect(component).to.have.className('success');
    expect(component).to.not.have.attr('color');
  });
  
});
