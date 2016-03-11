import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { Hideable } from 'components/utils';

describe('Hideable component', () => {

  it('sets tag name', () => {
    const component = render(<Hideable/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<Hideable className="hideable"/>);
    expect(component).to.have.className('hideable');
  });

  it('sets visible', () => {
    const component = render(<Hideable isVisible={true}/>);
    expect(component).to.have.style({ display: 'block' });
  });

  it('sets hidden', () => {
    const component = render(<Hideable isVisible={false}/>);
    expect(component).to.have.style({ display: 'none' });
  });

  it('sets contents', () => {
    const component = render(<Hideable>Text</Hideable>);
    expect(component).to.have.text('Text');
  });

});
