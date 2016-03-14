import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Media object section alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string, JUSTIFY: string, SPACED: string}}
 */
export const MediaObjectSectionAlignments = {
  RIGHT: 'right',
  CENTER: 'center',
  JUSTIFY: 'justify',
  SPACED: 'spaced'
};

/**
 * Media object component.
 *
 * @param {{stackOnSmall: boolean}} props
 * @returns {JSX}
 */
export const MediaObject = props => {
  check.assert.maybe.boolean(props.stackOnSmall, 'MediaObject.props.stackOnSmall must be a boolean.');

  const className = classNames(
    props.className || 'media-object',
    {
      'stack-for-small': props.stackOnSmall
    }
  );

  const omitProps = ['stackOnSmall'];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};

/**
 * Media object section component.
 *
 * @param {{alignment: [string], isMain: boolean, isMiddle: boolean}} props
 * @returns {JSX}
 */
export const MediaObjectSection = props => {
  check.assert.maybe.string(props.alignment, 'MediaObject.props.alignment must be a string.');
  check.assert.maybe.boolean(props.isMain, 'MediaObject.props.isMain must be a boolean.');
  check.assert.maybe.boolean(props.isMiddle, 'MediaObject.props.isMiddle must be a boolean.');

  const className = classNames(
    props.className || 'media-object-section',
    {
      'align-self-center': props.alignment === MediaObjectSectionAlignments.CENTER,
      'align-self-right': props.alignment === MediaObjectSectionAlignments.RIGHT,
      'align-self-justify': props.alignment === MediaObjectSectionAlignments.JUSTIFY,
      'align-self-spaced': props.alignment === MediaObjectSectionAlignments.SPACED,
      'main-section': props.isMain,
      'middle': props.isMiddle
    }
  );

  const omitProps = ['alignment', 'isMain', 'isMiddle'];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};
