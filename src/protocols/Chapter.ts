import { Linked } from "../Links";

/**
 * This interface represents a chapter, including its optional title, description,
 * and an optional array of linked sub-chapters.
 * 
 * @category Protocols
 */
export interface Chapter {
	/**
	 * The optional title of the chapter
	 */
	title?: string;

	/**
	 * An optional description of the chapter
	 */
	description?: string;

	/**
	 * An optional array of linked sub-chapters
	 */
	chapters?: Linked<Chapter>[];
}