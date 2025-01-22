[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Chapter

# Interface: Chapter

Defined in: [protocols/Chapter.ts:9](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Chapter.ts#L9)

This interface represents a chapter, including its optional title, description,
and an optional array of linked sub-chapters.

## Properties

### title?

> `optional` **title**: `string`

Defined in: [protocols/Chapter.ts:13](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Chapter.ts#L13)

The optional title of the chapter

***

### description?

> `optional` **description**: `string`

Defined in: [protocols/Chapter.ts:18](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Chapter.ts#L18)

An optional description of the chapter

***

### chapters?

> `optional` **chapters**: [`Linked`](../type-aliases/Linked.md)\<[`Chapter`](Chapter.md)\>[]

Defined in: [protocols/Chapter.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Chapter.ts#L23)

An optional array of linked sub-chapters
