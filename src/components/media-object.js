import React from 'react';
import check from 'check-types';
import { HorizontalAlignments, createClassName, generalClassNames } from '../utils';

/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObject = props => {
  check.assert.maybe.boolean(props.stackForSmall, 'Property "stackForSmall" must be a boolean.');

  const className = createClassName(
    props.className || 'media-object',
    {
      'stack-for-small': props.stackForSmall
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className} />
  );
};

/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObjectSection = props => {
  check.assert.maybe.string(props.alignment, 'Property "alignment" must be a string.');
  check.assert.maybe.boolean(props.isMain, 'Property "isMain" must be a boolean.');
  check.assert.maybe.boolean(props.isMiddle, 'Property "isMiddle" must be a boolean.');
  check.assert.maybe.boolean(props.isBottom, 'Property "isBottom" must be a boolean.');

  const className = createClassName(
    props.className || 'media-object-section',
    {
      'align-self-center': props.alignment === HorizontalAlignments.CENTER,
      'align-self-right': props.alignment === HorizontalAlignments.RIGHT,
      'align-self-justify': props.alignment === HorizontalAlignments.JUSTIFY,
      'align-self-spaced': props.alignment === HorizontalAlignments.SPACED,
      'main-section': props.isMain,
      'middle': props.isMiddle,
      'bottom': props.isBottom
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className} />
  );
};
