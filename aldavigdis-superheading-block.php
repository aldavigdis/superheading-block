<?php
/**
 * Plugin Name:       Alda's Superheading Block
 * Description:       Accessible headings for the WordPress Block Editor with subheadings and kickers.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      8.1
 * Author:            Alda Vigdís Skarphéðinsdóttir
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aldavigdis-superheading-block
 *
 * @package CreateBlock
 */

declare(strict_types = 1);

namespace aldavigdis\superheading;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The initiator class
 *
 * Does nothing but register the superheading block. This is simple stuff.
 */
class InitiateBlock {
	/**
	 * The constructor
	 */
	public function __construct() {
		add_action( 'init', array( __CLASS__, 'initiate_block' ) );
	}

	/**
	 * Register the superheading block
	 */
	public static function initiate_block(): void {
		wp_register_block_types_from_metadata_collection(
			__DIR__ . '/build',
			__DIR__ . '/build/blocks-manifest.php'
		);
	}
}

new InitiateBlock();
