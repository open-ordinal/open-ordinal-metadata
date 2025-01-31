[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / DecoderResult

# Interface: DecoderResult

Defined in: [protocols/Media.ts:49](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Media.ts#L49)

This interface represents a decoder result, including an optional
function to get an audio buffer.

## Properties

### audioBuffer()?

> `optional` **audioBuffer**: () => `Promise`\<`AudioBuffer`\>

Defined in: [protocols/Media.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Media.ts#L53)

An optional function to get an audio buffer

#### Returns

`Promise`\<`AudioBuffer`\>
