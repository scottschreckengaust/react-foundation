import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { removeProps, createClassName, generalClassNames } from 'src/utils';

describe('Utilities', () => {

  describe('removeProps', () => {
    const props = {foo: 1, bar: true, baz: '???'};
    const actual = removeProps(props, ['bar']);
    expect(actual).to.have.property('foo');
    expect(actual).to.have.property('baz');
    expect(actual).to.not.have.property('bar');
  });

  describe('createClassName', () => {
    const className = createClassName('foo', {bar: true, baz: 1 === 2, qux: undefined});
    expect(className).to.equal('foo bar');
  });

  describe('generalClassNames', () => {
    const props = {showForMedium: true, isHidden: true, showForSr: false, float: 'left'};
    const classNames = generalClassNames(props);
    expect(classNames['show-for-medium']).to.be.true;
    expect(classNames['hide']).to.be.true;
    expect(classNames['show-for-sr']).to.be.false;
    expect(classNames['float-left']).to.be.true;
  });

});
