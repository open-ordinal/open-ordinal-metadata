[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Author

# Interface: Author

Defined in: [protocols/Author.ts:10](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Author.ts#L10)

This interface represents an author, including their optional name and an
optional array of linked books.

## Properties

### name?

> `optional` **name**: `string`

Defined in: [protocols/Author.ts:14](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Author.ts#L14)

The optional name of the author

***

### books?

> `optional` **books**: [`Linked`](../type-aliases/Linked.md)\<[`Book`](Book.md)\>[]

Defined in: [protocols/Author.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Author.ts#L19)

An optional array of linked books
