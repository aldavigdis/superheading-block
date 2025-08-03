import './editor.scss';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	HeadingLevelDropdown,
	AlignmentControl,
	useBlockEditingMode
} from '@wordpress/block-editor';

/**
 * Render the editor component
 *
 * The <RichText> component for the sub-elements of the heading, which enables
 * <em> and <strong> to be set inline among other things.
 *
 * Heading levels and text alignment are set for the whole block.
 *
 * @param {Object} attr               - The attribute methods for the Edit component
 * @param {Object} attr.attributes    - The attribute getter
 * @param {Object} attr.setAttributes - The attribute setter
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockEditingMode = useBlockEditingMode();
	const blockProps       = useBlockProps();
	const TagName          = 'h' + attributes.level;

	return (
		<>
			{ blockEditingMode === 'default' && (
				<BlockControls group="block">
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
			) }
			<TagName
				className={ 'has-text-align-' + attributes.textAlign }
				{ ...blockProps }
			>
				<RichText
					className="superheading__kicker"
					tagName="small"
					value={ attributes.kickerText }
					placeholder={ __(
						'Add pre-heading…',
						'aldavigdis-superheading-block'
					) }
					onChange={ ( newKicker ) =>
						setAttributes( { kickerText: newKicker } )
					}
				/>
				<RichText
					className="superheading__main"
					tagName="span"
					value={ attributes.mainHeadingText }
					placeholder={ __(
						'Add heading…',
						'aldavigdis-superheading-block'
					) }
					onChange={ ( newMainHeading ) =>
						setAttributes( { mainHeadingText: newMainHeading } )
					}
				/>
				<RichText
					className="superheading__subheading"
					tagName="small"
					value={ attributes.subheadingText }
					placeholder={ __(
						'Add sub-heading…',
						'aldavigdis-superheading-block'
					) }
					onChange={ ( newSubheading ) =>
						setAttributes( { subheadingText: newSubheading } )
					}
				/>
			</TagName>
		</>
	);
}
