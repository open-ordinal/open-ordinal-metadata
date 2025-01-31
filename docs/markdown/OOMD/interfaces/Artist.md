[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Artist

# Interface: Artist

Defined in: [protocols/Artist.ts:10](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Artist.ts#L10)

This interface represents an artist, including their name, an optional description,
and an optional array of linked releases.

## Properties

### name

> **name**: `string`

Defined in: [protocols/Artist.ts:14](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Artist.ts#L14)

The name of the artist

***

### description?

> `optional` **description**: `string`

Defined in: [protocols/Artist.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Artist.ts#L19)

An optional description of the artist

***

### releases?

> `optional` **releases**: [`Linked`](../type-aliases/Linked.md)\<[`Release`](Release.md)\>[]

Defined in: [protocols/Artist.ts:25](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Artist.ts#L25)

An optional array of linked releases, otherwise assumed to be child inscriptions
implementing Release
