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

[protocols/Media.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Media.ts#L53)
