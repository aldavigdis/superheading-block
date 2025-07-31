import './editor.scss';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	HeadingLevelDropdown,
	AlignmentControl,
} from '@wordpress/block-editor';

/**
 * Render the editor component
 *
 * The <RichText> component for the sub-elements of the heading, which enables
 * <em> and <strong> to be set inline among other things.
 *
 * Heading levels and text alignment are set for the whole block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const TagName = 'h' + attributes.level;

	return (
		<>
			<BlockControls
				group='block'
			>
				<HeadingLevelDropdown
					value={ attributes.level }
					onChange={ ( newLevel ) =>
						setAttributes( { level: newLevel } )
					}
				/>
				<AlignmentControl
					value={ attributes.textAlign }
					onChange={ ( newAlign ) =>
						setAttributes( { textAlign: newAlign } )
					}
				/>
			</BlockControls>

			<TagName
				{ ...useBlockProps() }
				className={ 'has-text-align-' + attributes.textAlign }
			>
				<RichText
					className='superheading__kicker'
					tagName="small"
					value={attributes.kickerText}
					placeholder={ __( 'Add pre-heading...', 'aldavigdis-superheading-block' ) }
					onChange={ ( newKicker ) =>
						setAttributes( { kickerText: newKicker } )
					}
				/>
				<RichText
					className='superheading__main'
					tagName="span"
					value={attributes.mainHeadingText}
					placeholder={ __( 'Add heading...', 'aldavigdis-superheading-block' ) }
					onChange={ ( newMainHeading ) =>
						setAttributes( { mainHeadingText: newMainHeading } )
					}
				/>
				<RichText
					className='superheading__subheading'
					tagName="small"
					value={attributes.subheadingText}
					placeholder={ __( 'Add sub-heading...', 'aldavigdis-superheading-block' ) }
					onChange={ ( newSubheading ) =>
						setAttributes( { subheadingText: newSubheading } )
					}
				/>
			</TagName>
		</>
	);
}
