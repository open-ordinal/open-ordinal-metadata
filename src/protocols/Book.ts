import { Linked } from "../Links";
import { Author } from "./Author";
import { Chapter } from "./Chapter";
import { Publisher } from "./Publisher";

export type ISBN = string;

/**
 * This interface represents a book, including its optional title, description,
 * authors, publisher, chapters, ISBN, language, and edition.
 * 
 * @category Protocols
 */
export interface Book {
	/**
	 * The optional title of the book
	 */
	title?: string;

	/**
	 * An optional description of the book
	 */
	description?: string;

	/**
	 * An optional array of linked authors or author names
	 */
	authors?: (Linked<Author> | string)[];

	/**
	 * An optional linked publisher or publisher name
	 */
	publisher?: Linked<Publisher> | string;

	/**
	 * An optional array of linked chapters, default children
	 */
	chapters?: Linked<Chapter>[];

	/**
	 * An optional ISBN of the book
	 */
	isbn?: ISBN;

	/**
	 * The optional language of the book
	 */
	language?: string;

	/**
	 * The optional edition number of the book
	 */
	edition?: number;
}