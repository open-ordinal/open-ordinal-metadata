[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Bootstrap

# Interface: Bootstrap

This interface defines the Options used for Open Ordinal Bootstrap.

## Properties

### mode

> **mode**: [`BootstrapMode`](../enumerations/BootstrapMode.md)

The mode for bootstrap. Mode 0 is obmitted due to the default and would
lead to a recursive deadlock.

#### Defined in

[protocols/Bootstrap.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L11)

***

### id?

> `optional` **id**: `number`

Optional: The inscription Id to bootstrap

#### Defined in

[protocols/Bootstrap.ts:15](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L15)

***

### sat?

> `optional` **sat**: `number`

Optional: The sat Id to bootstrap

#### Defined in

[protocols/Bootstrap.ts:19](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L19)

***

### index?

> `optional` **index**: `number`

Optional: Index on sat to bootstrap

#### Defined in

[protocols/Bootstrap.ts:23](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L23)

***

### data?

> `optional` **data**: `any`

Optional: Data to pass into the bootstrap

#### Defined in

[protocols/Bootstrap.ts:27](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L27)

***

### res?

> `optional` **res**: `object`

Optional: Additional inscriptions to load and pass into `bootstrap()`

#### Index Signature

 \[`_`: `string`\]: [`BootstrapResource`](BootstrapResource.md)

#### Defined in

[protocols/Bootstrap.ts:31](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L31)

***

### oo?

> `optional` **oo**: [`BootstrapOpenOrdinalModules`](BootstrapOpenOrdinalModules.md)

Optional: Additional Open Ordinal modules to load

#### Defined in

[protocols/Bootstrap.ts:35](https://github.com/open-ordinal/open-ordinal-metadata/blob/b6554f8c34f8dd8ee5bff4168b281fb665652d03/src/protocols/Bootstrap.ts#L35)
