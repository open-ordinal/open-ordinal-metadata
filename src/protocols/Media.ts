import { LinkedModule } from "../Links";

/**
 * This interface represents media, including its optional duration and an
 * optional decoder module to use for this track.
 * 
 * @category Protocols
 */
export interface Media {
	/**
	 * The optional duration of the media
	 */
	duration?: number;

	/**
	 * An optional decoder module to use for this track - consider
	 * moving to Audio
	 */
	decoder?: LinkedModule<DecoderModule>;
}

/**
 * This interface represents a decoder module, including its default
 * decoder function.
 * 
 * @category Protocols
 */
export interface DecoderModule {
	/**
	 * The default decoder function
	 */
	default: DecoderFunction;
}

/**
 * This type represents a decoder function that takes content and
 * metadata as input and returns a promise of a decoder result.
 * 
 * @category Protocols
 */
export type DecoderFunction = (content: ArrayBuffer, metadata: Object) => Promise<DecoderResult>;

/**
 * This interface represents a decoder result, including an optional
 * function to get an audio buffer.
 * 
 * @category Protocols
 */
export interface DecoderResult {
	/**
	 * An optional function to get an audio buffer
	 */
	audioBuffer?: () => Promise<AudioBuffer>;
}