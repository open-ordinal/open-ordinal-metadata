[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Track

# Interface: Track

This interface represents a track, including its title and optional arrays of
linked releases and artists.

## Properties

### title

> **title**: `string`

The title of the track

#### Defined in

[protocols/Track.ts:15](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Track.ts#L15)

***

### releases?

> `optional` **releases**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Release`](Release.md)\>)[]

An optional array of linked releases or release names, otherwise assumed to
be any parent inscriptions implementing Release

#### Defined in

[protocols/Track.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Track.ts#L21)

***

### artists?

> `optional` **artists**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Artist`](Artist.md)\>)[]

An optional array of linked artists or artist names, otherwise assumed to
be any grand parent inscriptions implementing Artist

#### Defined in

[protocols/Track.ts:27](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Track.ts#L27)
