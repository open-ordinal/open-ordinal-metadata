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

[protocols/Media.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/protocols/Media.ts#L53)
