[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Track

# Interface: Track

Defined in: [protocols/Track.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Track.ts#L11)

This interface represents a track, including its title and optional arrays of
linked releases and artists.

## Properties

### title

> **title**: `string`

Defined in: [protocols/Track.ts:15](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Track.ts#L15)

The title of the track

***

### releases?

> `optional` **releases**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Release`](Release.md)\>)[]

Defined in: [protocols/Track.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Track.ts#L21)

An optional array of linked releases or release names, otherwise assumed to
be any parent inscriptions implementing Release

***

### artists?

> `optional` **artists**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Artist`](Artist.md)\>)[]

Defined in: [protocols/Track.ts:27](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Track.ts#L27)

An optional array of linked artists or artist names, otherwise assumed to
be any grand parent inscriptions implementing Artist
