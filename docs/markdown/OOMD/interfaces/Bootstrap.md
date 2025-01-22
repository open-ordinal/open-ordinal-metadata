[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Bootstrap

# Interface: Bootstrap

Defined in: [protocols/Bootstrap.ts:6](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L6)

This interface defines the Options used for Open Ordinal Bootstrap.

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md)

Defined in: [protocols/Bootstrap.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L11)

The mode for bootstrap. Mode 0 is obmitted due to the default and would
lead to a recursive deadlock.

***

### id?

> `optional` **id**: `number`

Defined in: [protocols/Bootstrap.ts:15](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L15)

Optional: The inscription Id to bootstrap

***

### sat?

> `optional` **sat**: `number`

Defined in: [protocols/Bootstrap.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L19)

Optional: The sat Id to bootstrap

***

### index?

> `optional` **index**: `number`

Defined in: [protocols/Bootstrap.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L23)

Optional: Index on sat to bootstrap

***

### data?

> `optional` **data**: `any`

Defined in: [protocols/Bootstrap.ts:27](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L27)

Optional: Data to pass into the bootstrap

***

### res?

> `optional` **res**: `object`

Defined in: [protocols/Bootstrap.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L31)

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

\[`_`: `string`\]: [`BootstrapResource`](BootstrapResource.md)

***

### oo?

> `optional` **oo**: [`BootstrapOpenOrdinalModules`](BootstrapOpenOrdinalModules.md)

Defined in: [protocols/Bootstrap.ts:35](https://github.com/open-ordinal/open-ordinal-metadata/blob/0be486eb511f2e8d9e997fd6abdd84285695b905/src/protocols/Bootstrap.ts#L35)

Optional: Additional Open Ordinal modules to load
