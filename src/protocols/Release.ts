import { Linked, LinkedVisual } from "../Links";
import { Artist } from "./Artist";
import { Track } from "./Track";

/**
 * This interface represents a release, including its type, title, optional date,
 * optional cover, and optional arrays of linked artists and tracks.
 * 
 * @category Protocols
 */
export interface Release {
	/**
	 * The type of the release (e.g., album, single, EP, compilation,
	 * or custom string)
	 */
	type: "album" | "single" | "ep" | "compilation" | string;

	/**
	 * The title of the release
	 */
	title: string;

	/**
	 * An optional release date
	 */
	date?: Date;

	/**
	 * An optional cover visual
	 */
	cover?: LinkedVisual;

	/**
	 * An optional array of linked artists or artist names, otherwise assumed
	 * to be parent inscriptions implementing Artist
	 */
	artists?: (Linked<Artist> | string)[];

	/**
	 * An optional array of linked tracks, otherwise assumed to be child
	 * inscriptions implementing Track
	 */
	tracks?: Linked<Track>[];
}