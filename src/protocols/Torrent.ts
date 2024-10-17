/**
 * This interface represents a torrent, including its name, and
 * optional URL and magnet link.
 * 
 * @category Protocols
 */
export interface Torrent {
    /**
     * The name of the torrent
     */
    name: string;

    /**
     * An optional URL for the torrent
     */
    url?: string;

    /**
     * An optional magnet link for the torrent
     */
    magnet?: string;
}