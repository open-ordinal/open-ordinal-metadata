[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Release

# Interface: Release

Defined in: [protocols/Release.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L11)

This interface represents a release, including its type, title, optional date,
optional cover, and optional arrays of linked artists and tracks.

## Properties

### type

> **type**: `string`

Defined in: [protocols/Release.ts:16](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L16)

The type of the release (e.g., album, single, EP, compilation,
or custom string)

***

### title

> **title**: `string`

Defined in: [protocols/Release.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L21)

The title of the release

***

### date?

> `optional` **date**: `Date`

Defined in: [protocols/Release.ts:26](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L26)

An optional release date

***

### cover?

> `optional` **cover**: [`Link`](../type-aliases/Link.md)

Defined in: [protocols/Release.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L31)

An optional cover visual

***

### artists?

> `optional` **artists**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Artist`](Artist.md)\>)[]

Defined in: [protocols/Release.ts:37](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L37)

An optional array of linked artists or artist names, otherwise assumed
to be parent inscriptions implementing Artist

***

### tracks?

> `optional` **tracks**: [`Linked`](../type-aliases/Linked.md)\<[`Track`](Track.md)\>[]

Defined in: [protocols/Release.ts:43](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Release.ts#L43)

An optional array of linked tracks, otherwise assumed to be child
inscriptions implementing Track
