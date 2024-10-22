[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Book

# Interface: Book

This interface represents a book, including its optional title, description,
authors, publisher, chapters, ISBN, language, and edition.

## Properties

### title?

> `optional` **title**: `string`

The optional title of the book

#### Defined in

[protocols/Book.ts:18](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L18)

***

### description?

> `optional` **description**: `string`

An optional description of the book

#### Defined in

[protocols/Book.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L23)

***

### authors?

> `optional` **authors**: (`string` \| [`Linked`](../type-aliases/Linked.md)\<[`Author`](Author.md)\>)[]

An optional array of linked authors or author names

#### Defined in

[protocols/Book.ts:28](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L28)

***

### publisher?

> `optional` **publisher**: `string` \| [`Linked`](../type-aliases/Linked.md)\<[`Publisher`](Publisher.md)\>

An optional linked publisher or publisher name

#### Defined in

[protocols/Book.ts:33](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L33)

***

### chapters?

> `optional` **chapters**: [`Linked`](../type-aliases/Linked.md)\<[`Chapter`](Chapter.md)\>[]

An optional array of linked chapters, default children

#### Defined in

[protocols/Book.ts:38](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L38)

***

### isbn?

> `optional` **isbn**: `string`

An optional ISBN of the book

#### Defined in

[protocols/Book.ts:43](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L43)

***

### language?

> `optional` **language**: `string`

The optional language of the book

#### Defined in

[protocols/Book.ts:48](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L48)

***

### edition?

> `optional` **edition**: `number`

The optional edition number of the book

#### Defined in

[protocols/Book.ts:53](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Book.ts#L53)
