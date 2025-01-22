[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Book

# Interface: Book

Defined in: [protocols/Book.ts:14](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L14)

This interface represents a book, including its optional title, description,
authors, publisher, chapters, ISBN, language, and edition.

## Properties

### title?

> `optional` **title**: `string`

Defined in: [protocols/Book.ts:18](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L18)

The optional title of the book

***

### description?

> `optional` **description**: `string`

Defined in: [protocols/Book.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L23)

An optional description of the book

***

### authors?

> `optional` **authors**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Author`](Author.md)\>)[]

Defined in: [protocols/Book.ts:28](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L28)

An optional array of linked authors or author names

***

### publisher?

> `optional` **publisher**: `string` \| [`Linked`](../type-aliases/Linked.md)\<[`Publisher`](Publisher.md)\>

Defined in: [protocols/Book.ts:33](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L33)

An optional linked publisher or publisher name

***

### chapters?

> `optional` **chapters**: [`Linked`](../type-aliases/Linked.md)\<[`Chapter`](Chapter.md)\>[]

Defined in: [protocols/Book.ts:38](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L38)

An optional array of linked chapters, default children

***

### isbn?

> `optional` **isbn**: `string`

Defined in: [protocols/Book.ts:43](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L43)

An optional ISBN of the book

***

### language?

> `optional` **language**: `string`

Defined in: [protocols/Book.ts:48](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L48)

The optional language of the book

***

### edition?

> `optional` **edition**: `number`

Defined in: [protocols/Book.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Book.ts#L53)

The optional edition number of the book
