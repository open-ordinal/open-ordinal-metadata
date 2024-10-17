import { Linked } from "../Links";
import { Artist } from "./Artist";
import { Release } from "./Release";

/**
 * This interface represents a track, including its title and optional arrays of
 * linked releases and artists.
 * 
 * @category Protocols
 */
export interface Track {
	/**
	 * The title of the track
	 */
	title: string;

	/**
	 * An optional array of linked releases or release names, otherwise assumed to
	 * be any parent inscriptions implementing Release
	 */
	releases?: (Linked<Release> | string)[];

	/**
	 * An optional array of linked artists or artist names, otherwise assumed to
	 * be any grand parent inscriptions implementing Artist
	 */
	artists?: (Linked<Artist> | string)[];
}