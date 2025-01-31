[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Media

# Interface: Media

Defined in: [protocols/Media.ts:9](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Media.ts#L9)

This interface represents media, including its optional duration and an
optional decoder module to use for this track.

## Properties

### duration?

> `optional` **duration**: `number`

Defined in: [protocols/Media.ts:13](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Media.ts#L13)

The optional duration of the media

***

### decoder?

> `optional` **decoder**: [`Link`](../type-aliases/Link.md)

Defined in: [protocols/Media.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Media.ts#L19)

An optional decoder module to use for this track - consider
moving to Audio
