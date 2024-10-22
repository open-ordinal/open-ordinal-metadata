[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Collection

# Interface: Collection

This interface represents a collection, including its name, an optional description,
an optional URL, and an optional total count.

## Properties

### name

> **name**: `string`

The name of the collection

#### Defined in

[protocols/Collection.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Collection.ts#L11)

***

### description?

> `optional` **description**: `string`

An optional description of the collection

#### Defined in

[protocols/Collection.ts:16](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Collection.ts#L16)

***

### url?

> `optional` **url**: `string`

An optional URL for the collection

#### Defined in

[protocols/Collection.ts:21](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Collection.ts#L21)

***

### totalCount?

> `optional` **totalCount**: `number`

An optional total count of items in the collection

#### Defined in

[protocols/Collection.ts:26](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Collection.ts#L26)

***

### allAttributes?

> `optional` **allAttributes**: `object`

An optional list of all attrbutes for items in the collection

#### Index Signature

 \[`_`: `string`\]: (`string` \| `number`)[]

#### Defined in

[protocols/Collection.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Collection.ts#L31)
