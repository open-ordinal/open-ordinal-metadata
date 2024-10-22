[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Artist

# Interface: Artist

This interface represents an artist, including their name, an optional description,
and an optional array of linked releases.

## Properties

### name

> **name**: `string`

The name of the artist

#### Defined in

[protocols/Artist.ts:14](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Artist.ts#L14)

***

### description?

> `optional` **description**: `string`

An optional description of the artist

#### Defined in

[protocols/Artist.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Artist.ts#L19)

***

### releases?

> `optional` **releases**: [`Linked`](../type-aliases/Linked.md)\<[`Release`](Release.md)\>[]

An optional array of linked releases, otherwise assumed to be child inscriptions
implementing Release

#### Defined in

[protocols/Artist.ts:25](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Artist.ts#L25)
