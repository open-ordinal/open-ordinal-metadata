import { Linked } from "../Links";
import { Book } from "./Book";

/**
 * This interface represents an author, including their optional name and an
 * optional array of linked books.
 * 
 * @category Protocols
 */
export interface Author {
	/**
	 * The optional name of the author
	 */
	name?: string;

	/**
	 * An optional array of linked books
	 */
	books?: Linked<Book>[];
}