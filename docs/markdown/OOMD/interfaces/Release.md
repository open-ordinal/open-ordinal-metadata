[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Release

# Interface: Release

This interface represents a release, including its type, title, optional date,
optional cover, and optional arrays of linked artists and tracks.

## Properties

### type

> **type**: `string`

The type of the release (e.g., album, single, EP, compilation,
or custom string)

#### Defined in

[protocols/Release.ts:16](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L16)

***

### title

> **title**: `string`

The title of the release

#### Defined in

[protocols/Release.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L21)

***

### date?

> `optional` **date**: `Date`

An optional release date

#### Defined in

[protocols/Release.ts:26](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L26)

***

### cover?

> `optional` **cover**: [`Link`](../type-aliases/Link.md)

An optional cover visual

#### Defined in

[protocols/Release.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L31)

***

### artists?

> `optional` **artists**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Artist`](Artist.md)\>)[]

An optional array of linked artists or artist names, otherwise assumed
to be parent inscriptions implementing Artist

#### Defined in

[protocols/Release.ts:37](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L37)

***

### tracks?

> `optional` **tracks**: [`Linked`](../type-aliases/Linked.md)\<[`Track`](Track.md)\>[]

An optional array of linked tracks, otherwise assumed to be child
inscriptions implementing Track

#### Defined in

[protocols/Release.ts:43](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Release.ts#L43)
