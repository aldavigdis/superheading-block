import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Render the static block
 *
 * The <small> elements containing the subheading and superheading are added to
 * the DOM conditionally.
 * @param {Object} attr            - The attribute methods for the Edit component
 * @param {Object} attr.attributes - The attribute getter
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	// Set the heading level. This will determine the h-tag (h1-h6) we use.
	const TagName = 'h' + attributes.level.toString();

	return (
		<TagName
			{ ...useBlockProps.save() }
			className={ 'has-text-align-' + attributes.textAlign }
		>
			{ ! RichText.isEmpty( attributes.kickerText ) && (
				<small className="superheading__kicker">
					<RichText.Content value={ attributes.kickerText } />
				</small>
			) }
			<span className="superheading__main">
				<RichText.Content value={ attributes.mainHeadingText } />
			</span>
			{ ! RichText.isEmpty( attributes.subheadingText ) && (
				<small className="superheading__subheading">
					<RichText.Content value={ attributes.subheadingText } />
				</small>
			) }
		</TagName>
	);
}
