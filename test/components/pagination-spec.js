import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Pagination, {
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from 'components/pagination';

describe('Pagination component', () => {

  it('sets tag name', () => {
    const component = render(<Pagination/>);
    expect(component).to.have.tagName('ul');
  });

  it('sets class name', () => {
    const component = render(<Pagination/>);
    expect(component).to.have.className('pagination');
  });

  it('sets custom class name', () => {
    const component = render(<Pagination className="my-pagination"/>);
    expect(component).to.have.className('my-pagination');
    expect(component).to.not.have.className('pagination');
  });

  it('sets role', () => {
    const component = render(<Pagination/>);
    expect(component).to.have.attr('role', 'navigation');
  });

  it('sets aria label', () => {
    const component = render(<Pagination aria-label="Pagination"/>);
    expect(component).to.have.attr('aria-label', 'Pagination');
  });

  it('sets centered', () => {
    const component = render(<Pagination isCentered/>);
    expect(component).to.have.className('text-center');
    expect(component).to.not.have.attr('isCentered');
  });

});

describe('PaginationItem component', () => {

  it('sets tag name', () => {
    const component = render(<PaginationItem/>);
    expect(component).to.have.tagName('li');
  });

  it('sets current', () => {
    const component = render(<PaginationItem isCurrent/>);
    expect(component).to.have.className('current');
    expect(component).to.not.have.attr('isCurrent');
  });

  it('sets disabled', () => {
    const component = render(<PaginationItem isDisabled/>);
    expect(component).to.have.className('disabled');
    expect(component).to.not.have.attr('isDisabled');
  });

});

describe('PaginationPrevious component', () => {

  it('sets class name', () => {
    const component = render(<PaginationPrevious/>);
    expect(component).to.have.className('pagination-previous');
  });

});

describe('PaginationNext component', () => {

  it('sets class name', () => {
    const component = render(<PaginationNext/>);
    expect(component).to.have.className('pagination-next');
  });

});

describe('PaginationEllipsis component', () => {

  it('sets class name', () => {
    const component = render(<PaginationEllipsis/>);
    expect(component).to.have.className('ellipsis');
  });

});
