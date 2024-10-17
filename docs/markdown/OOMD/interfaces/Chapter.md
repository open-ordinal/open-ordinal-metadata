[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Chapter

# Interface: Chapter

This interface represents a chapter, including its optional title, description,
and an optional array of linked sub-chapters.

## Properties

### title?

> `optional` **title**: `string`

The optional title of the chapter

#### Defined in

[protocols/Chapter.ts:13](https://github.com/open-ordinal/open-ordinal-metadata/blob/3d1c7e7991626e590ad48c7df8a3780adeeff6fe/src/protocols/Chapter.ts#L13)

***

### description?

> `optional` **description**: `string`

An optional description of the chapter

#### Defined in

[protocols/Chapter.ts:18](https://github.com/open-ordinal/open-ordinal-metadata/blob/3d1c7e7991626e590ad48c7df8a3780adeeff6fe/src/protocols/Chapter.ts#L18)

***

### chapters?

> `optional` **chapters**: [`Linked`](../type-aliases/Linked.md)\<[`Chapter`](Chapter.md)\>[]

An optional array of linked sub-chapters

#### Defined in

[protocols/Chapter.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/3d1c7e7991626e590ad48c7df8a3780adeeff6fe/src/protocols/Chapter.ts#L23)
