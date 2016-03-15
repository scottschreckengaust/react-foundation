import React, { PropTypes } from 'react';
import { HorizontalAlignments, GeneralPropTypes, createClassName, generalClassNames, objectValues } from '../utils';

/**
 * Media object component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObject = props => {
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

MediaObject.propTypes = {
  stackForSmall: PropTypes.bool,
  ...GeneralPropTypes
};

/**
 * Media object section component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MediaObjectSection = props => {
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

MediaObjectSection.propTypes = {
  alignment: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  isMain: PropTypes.bool,
  isMiddle: PropTypes.bool,
  isBottom: PropTypes.bool,
  ...GeneralPropTypes
};
