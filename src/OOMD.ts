/*!
 * Open Ordinal Metadata
 *
 * @author   Open Ordinal <https://openordinal.dev>
 * @license  MIT
 */
/**
 * @module OOMD
 */

import { Artist } from "./protocols/Artist"
import { Attributes } from "./protocols/Attributes"
import { Author } from "./protocols/Author"
import { Book } from "./protocols/Book"
import { Chapter } from "./protocols/Chapter"
import { Collection } from "./protocols/Collection"
import { Common } from "./protocols/Common"
import { Media } from "./protocols/Media"
import { Module } from "./protocols/Module"
import { Organization } from "./protocols/Organization"
import { Publisher } from "./protocols/Publisher"
import { Release } from "./protocols/Release"
import { Torrent } from "./protocols/Torrent"
import { Track } from "./protocols/Track"
import { Link, Linked, LinkedModule, LinkedVisual, InscriptionId, SatNo } from "./Links"

export { Artist } from "./protocols/Artist"
export { Attributes } from "./protocols/Attributes"
export { Author } from "./protocols/Author"
export { Book } from "./protocols/Book"
export { Chapter } from "./protocols/Chapter"
export { Collection } from "./protocols/Collection"
export { Common } from "./protocols/Common"
export { Media, DecoderFunction, DecoderModule, DecoderResult } from "./protocols/Media"
export { Module } from "./protocols/Module"
export { Organization } from "./protocols/Organization"
export { Publisher } from "./protocols/Publisher"
export { Release } from "./protocols/Release"
export { Torrent } from "./protocols/Torrent"
export { Track } from "./protocols/Track"
export { Link, Linked, LinkedModule, LinkedVisual, InscriptionId, SatNo } from "./Links"

/**
 * This interface represents metadata, extending the Common interface, and includes
 * optional properties for static indication, organization, collection, attributes,
 * artist, release, track, media, module, author, book, chapter, and torrent.
 * 
 * @category Root
 * @mermaid Metadata Structure
 * graph LR
 *   Metadata --> Organization
 *   Metadata --> Collection
 *   Collection --> Attributes
 *   Metadata --> Attributes
 *   Metadata --> Artist
 *   Artist --> Release
 *   Release --> Track
 *   Metadata --> Media
 *   Metadata --> Author
 *   Author --> Book
 *   Book --> Chapter
 *   Metadata --> Module
 *   Metadata --> Torrent
 *   Metadata --> Publisher
 */
export interface Metadata extends Common {
	/**
	 * When `static` is present this indicates that a viewer should _not_ get the
	 * latest inscription on the sat number of this inscription
	 */
	static?: true;

	/**
	 * An optional organization associated with the metadata
	 */
	organization?: Organization;

	/**
	 * An optional collection associated with the metadata
	 */
	collection?: Collection;

	/**
	 * Optional attributes associated with the metadata
	 */
	attributes?: Attributes;

	/**
	 * An optional artist associated with the metadata
	 */
	artist?: Artist;

	/**
	 * An optional release associated with the metadata
	 */
	release?: Release;

	/**
	 * An optional track associated with the metadata
	 */
	track?: Track;

	/**
	 * Optional media associated with the metadata
	 */
	media?: Media;

	/**
	 * An optional module associated with the metadata
	 */
	module?: Module;

	/**
	 * An optional publisher associated with the metadata
	 */
	publisher?: Publisher;

	/**
	 * An optional author associated with the metadata
	 */
	author?: Author;

	/**
	 * An optional book associated with the metadata
	 */
	book?: Book;

	/**
	 * An optional chapter associated with the metadata
	 */
	chapter?: Chapter;

	/**
	 * An optional torrent associated with the metadata
	 */
	torrent?: Torrent;
}