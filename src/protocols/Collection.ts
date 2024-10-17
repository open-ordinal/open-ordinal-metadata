/**
 * This interface represents a collection, including its name, an optional description,
 * an optional URL, and an optional total count.
 * 
 * @category Protocols
 */
export interface Collection {
	/**
	 * The name of the collection
	 */
	name: string;

	/**
	 * An optional description of the collection
	 */
	description?: string;

	/**
	 * An optional URL for the collection
	 */
	url?: string;

	/**
	 * An optional total count of items in the collection
	 */
	totalCount?: number;

	/**
	 * An optional list of all attrbutes for items in the collection
	 */
	allAttributes?: { [_: string]: (string | number)[] };
}
