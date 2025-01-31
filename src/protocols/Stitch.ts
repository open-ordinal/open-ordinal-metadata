/**
 * This interface defines the Options used for Open Ordinal Stitch.
 * 
 * @category Protocols
 */
export interface Stitch {
    /**
     * Sat to use for stitch
     */
    sat?: number;
    /**
     * Parent to use for stitch
     */
    parent?: string;
    /**
     * Parts used for stitch
     */
    parts?: string[];
    /**
     * Content type for stitched file
     */
    contentType: string;
}
