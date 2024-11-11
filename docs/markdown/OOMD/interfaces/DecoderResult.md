[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / DecoderResult

# Interface: DecoderResult

This interface represents a decoder result, including an optional
function to get an audio buffer.

## Properties

### audioBuffer()?

> `optional` **audioBuffer**: () => `Promise`\<`AudioBuffer`\>

An optional function to get an audio buffer

#### Returns

`Promise`\<`AudioBuffer`\>

#### Defined in

[protocols/Media.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6d1306e832af7c62a4d11048d57fe2304e0bc3d/src/protocols/Media.ts#L53)
