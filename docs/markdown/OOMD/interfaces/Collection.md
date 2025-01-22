[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Collection

# Interface: Collection

Defined in: [protocols/Collection.ts:7](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L7)

This interface represents a collection, including its name, an optional description,
an optional URL, and an optional total count.

## Properties

### name

> **name**: `string`

Defined in: [protocols/Collection.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L11)

The name of the collection

***

### description?

> `optional` **description**: `string`

Defined in: [protocols/Collection.ts:16](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L16)

An optional description of the collection

***

### url?

> `optional` **url**: `string`

Defined in: [protocols/Collection.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L21)

An optional URL for the collection

***

### totalCount?

> `optional` **totalCount**: `number`

Defined in: [protocols/Collection.ts:26](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L26)

An optional total count of items in the collection

***

### allAttributes?

> `optional` **allAttributes**: `object`

Defined in: [protocols/Collection.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Collection.ts#L31)

An optional list of all attrbutes for items in the collection

#### Index Signature

\[`_`: `string`\]: (`string` \| `number`)[]
