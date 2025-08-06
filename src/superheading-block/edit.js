import './editor.scss';

import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	HeadingLevelDropdown,
	AlignmentControl,
	useBlockEditingMode,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl,
	ToggleControl
} from '@wordpress/components';

function TextContent( { attributes, setAttributes } ) {
	const allowedFormats   = [ 'core/bold', 'core/italic', 'core/language' ]

	return (
		<>
			<RichText
				className="superheading__kicker"
				tagName="small"
				value={ attributes.kickerText }
				placeholder={ __(
					'Add pre-heading…',
					'superheading-block'
				) }
				onChange={ ( newKicker ) =>
					setAttributes( { kickerText: newKicker } )
				}
				onReplace={() => {}}
				multiline={false}
				allowedFormats={allowedFormats}
			/>
			<RichText
				className="superheading__main"
				tagName="span"
				value={ attributes.mainHeadingText }
				placeholder={ __(
					'Add heading…',
					'superheading-block'
				) }
				onChange={ ( newMainHeading ) =>
					setAttributes( { mainHeadingText: newMainHeading } )
				}
				onReplace={() => {}}
				multiline={false}
				allowedFormats={allowedFormats}
			/>
			<RichText
				className="superheading__subheading"
				tagName="small"
				value={ attributes.subheadingText }
				placeholder={ __(
					'Add sub-heading…',
					'superheading-block'
				) }
				onChange={ ( newSubheading ) =>
					setAttributes( { subheadingText: newSubheading } )
				}
				onReplace={() => {}}
				multiline={false}
				allowedFormats={allowedFormats}
			/>
		</>
	);
}

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
	const TagName          = 'h' + attributes.level;

	const blockProps = useBlockProps( {
		className: 'has-text-align-' + attributes.textAlign
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Hyperlink', 'superheading-block' ) }
				>
					<TextControl
						__next40pxDefaultSize={ true }
						__nextHasNoMarginBottom={ true }
						className="superheading__input-href"
						value={ attributes.href }
						label={ __(
							'Web Address',
							'superheading-block'
						) }
						type='url'
						help={ __(
							"If set, the heading will link to this URL. Don't forget to prefix it with https:// or mailto: if needed.",
							'superheading-block'
						) }
						onChange={ ( newHref ) =>
							setAttributes( { href: newHref } )
						}
					/>
					<ToggleControl
						__nextHasNoMarginBottom={ true }
						label={ __(
							'Open in new window',
							'superheading-block'
						) }
						checked={ attributes.linkToNewWindow }
						onChange={ ( newLinkToNewWindow ) =>
							setAttributes(
								{ linkToNewWindow: newLinkToNewWindow }
							)
						}
					/>
				</PanelBody>
			</InspectorControls>
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
				{ ...blockProps }
			>
				{ ( attributes.href == '' ) && (
					<TextContent
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				) }
				{ ( attributes.href != '' ) && (
					<a
						href="#"
						onClick={ ( e ) => { e.preventDefault() } }
					>
						<TextContent
							attributes={ attributes }
							setAttributes={ setAttributes }
						/>
					</a>
				) }
			</TagName>
		</>
	);
}
