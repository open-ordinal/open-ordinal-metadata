/**
 * This interface represents a common structure with an optional ID and any
 * additional properties.
 * 
 * @category Protocols
 */
export interface Common {
    /**
     * An optional ID for the common structure
     */
    id?: string;

    /**
     * Any additional properties
     */
    [_: string]: any;
}