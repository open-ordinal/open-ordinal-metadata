[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Media

# Interface: Media

This interface represents media, including its optional duration and an
optional decoder module to use for this track.

## Properties

### duration?

> `optional` **duration**: `number`

The optional duration of the media

#### Defined in

[protocols/Media.ts:13](https://github.com/open-ordinal/open-ordinal-metadata/blob/3d1c7e7991626e590ad48c7df8a3780adeeff6fe/src/protocols/Media.ts#L13)

***

### decoder?

> `optional` **decoder**: [`Link`](../type-aliases/Link.md)

An optional decoder module to use for this track - consider
moving to Audio

#### Defined in

[protocols/Media.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/3d1c7e7991626e590ad48c7df8a3780adeeff6fe/src/protocols/Media.ts#L19)
