/**
 * This interface represents a module, including its name, version,
 * and optional URL and license.
 * 
 * @category Protocols
 */
export interface Module {
    /**
     * The name of the module
     */
    name: string;

    /**
     * The version of the module
     */
    version: string;

    /**
     * An optional URL for the module
     */
    url?: string;

    /**
     * An optional license for the module
     */
    license?: string;
}