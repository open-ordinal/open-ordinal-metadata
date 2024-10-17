/**
 * This interface represents an organization, including its name, an optional
 * description, and a URL.
 * 
 * @category Protocols
 */
export interface Organization {
    /**
     * The name of the organization
     */
    name: string;

    /**
     * An optional description of the organization
     */
    description?: string;

    /**
     * The URL of the organization
     */
    url: string;
}