import { Linked } from "../Links";
import { Release } from "./Release";

/**
 * This interface represents an artist, including their name, an optional description,
 * and an optional array of linked releases.
 * 
 * @category Protocols
 */
export interface Artist {
	/**
	 * The name of the artist
	 */
	name: string;

	/**
	 * An optional description of the artist
	 */
	description?: string;

	/**
	 * An optional array of linked releases, otherwise assumed to be child inscriptions
	 * implementing Release
	 */
	releases?: Linked<Release>[];
}