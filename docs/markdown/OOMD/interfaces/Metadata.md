[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Metadata

# Interface: Metadata

This interface represents metadata, extending the Common interface, and includes
optional properties for static indication, organization, collection, attributes,
artist, release, track, media, module, author, book, chapter, bootstrap
and torrent.

## Mermaid

#### Metadata Structure

<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
graph LR
  Metadata --&gt; Organization
  Metadata --&gt; Collection
  Collection --&gt; Attributes
  Metadata --&gt; Attributes
  Metadata --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  Metadata --&gt; Media
  Metadata --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  Metadata --&gt; Module
  Metadata --&gt; Bootstrap
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher
  Metadata --&gt; Stitch</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
graph LR
  Metadata --&gt; Organization
  Metadata --&gt; Collection
  Collection --&gt; Attributes
  Metadata --&gt; Attributes
  Metadata --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  Metadata --&gt; Media
  Metadata --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  Metadata --&gt; Module
  Metadata --&gt; Bootstrap
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher
  Metadata --&gt; Stitch</div><pre><code class="language-mermaid">graph LR
  Metadata --&gt; Organization
  Metadata --&gt; Collection
  Collection --&gt; Attributes
  Metadata --&gt; Attributes
  Metadata --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  Metadata --&gt; Media
  Metadata --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  Metadata --&gt; Module
  Metadata --&gt; Bootstrap
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher
  Metadata --&gt; Stitch</code></pre></div>

## Extends

- [`Common`](Common.md)

## Properties

### static?

> `optional` **static**: `true`

When `static` is present this indicates that a viewer should _not_ get the
latest inscription on the sat number of this inscription

#### Defined in

[OOMD.ts:78](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L78)

***

### bootstrap?

> `optional` **bootstrap**: [`Bootstrap`](Bootstrap.md)

An optional bootstrap options with the metadata

#### Defined in

[OOMD.ts:83](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L83)

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

An optional organization associated with the metadata

#### Defined in

[OOMD.ts:88](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L88)

***

### collection?

> `optional` **collection**: [`Collection`](Collection.md)

An optional collection associated with the metadata

#### Defined in

[OOMD.ts:93](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L93)

***

### attributes?

> `optional` **attributes**: [`Attributes`](Attributes.md)

Optional attributes associated with the metadata

#### Defined in

[OOMD.ts:98](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L98)

***

### artist?

> `optional` **artist**: [`Artist`](Artist.md)

An optional artist associated with the metadata

#### Defined in

[OOMD.ts:103](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L103)

***

### release?

> `optional` **release**: [`Release`](Release.md)

An optional release associated with the metadata

#### Defined in

[OOMD.ts:108](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L108)

***

### track?

> `optional` **track**: [`Track`](Track.md)

An optional track associated with the metadata

#### Defined in

[OOMD.ts:113](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L113)

***

### media?

> `optional` **media**: [`Media`](Media.md)

Optional media associated with the metadata

#### Defined in

[OOMD.ts:118](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L118)

***

### module?

> `optional` **module**: [`Module`](Module.md)

An optional module associated with the metadata

#### Defined in

[OOMD.ts:123](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L123)

***

### publisher?

> `optional` **publisher**: [`Publisher`](Publisher.md)

An optional publisher associated with the metadata

#### Defined in

[OOMD.ts:128](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L128)

***

### author?

> `optional` **author**: [`Author`](Author.md)

An optional author associated with the metadata

#### Defined in

[OOMD.ts:133](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L133)

***

### book?

> `optional` **book**: [`Book`](Book.md)

An optional book associated with the metadata

#### Defined in

[OOMD.ts:138](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L138)

***

### chapter?

> `optional` **chapter**: [`Chapter`](Chapter.md)

An optional chapter associated with the metadata

#### Defined in

[OOMD.ts:143](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L143)

***

### stitch?

> `optional` **stitch**: [`Stitch`](Stitch.md)

An optional stitch associated with the metadata

#### Defined in

[OOMD.ts:148](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L148)

***

### torrent?

> `optional` **torrent**: [`Torrent`](Torrent.md)

An optional torrent associated with the metadata

#### Defined in

[OOMD.ts:153](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/OOMD.ts#L153)

***

### id?

> `optional` **id**: `string`

An optional ID for the common structure

#### Inherited from

[`Common`](Common.md).[`id`](Common.md#id)

#### Defined in

[protocols/Common.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/8a6ddad55aac9471e60ce93b829464cc17f948c3/src/protocols/Common.ts#L11)
<style>
:root.mermaid-enabled .mermaid-block > pre {
  display: none;
}
:root:not(.mermaid-enabled) .mermaid-block > .mermaid {
  display: none !important;
}

.mermaid-block > .mermaid[data-inserted].dark {
  display: var(--mermaid-dark-display);
}
.mermaid-block > .mermaid[data-inserted].light {
  display: var(--mermaid-light-display);
}

:root {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
@media (prefers-color-scheme: light) {
  :root {
    --mermaid-dark-display: none;
    --mermaid-light-display: block;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --mermaid-dark-display: block;
    --mermaid-light-display: none;
  }
}
body.light, :root[data-theme="light"] {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
body.dark, :root[data-theme="dark"] {
  --mermaid-dark-display: block;
  --mermaid-light-display: none;
}
</style>

<script type="module">
import mermaid from "https://unpkg.com/mermaid@latest/dist/mermaid.esm.min.mjs";

document.documentElement.classList.add("mermaid-enabled");

mermaid.initialize({startOnLoad:true});

requestAnimationFrame(function check() {
  let some = false;
  document.querySelectorAll("div.mermaid:not([data-inserted])").forEach(div => {
    some = true;
    if (div.querySelector("svg")) {
      div.dataset.inserted = true;
    }
  });

  if (some) {
    requestAnimationFrame(check);
  }
});
</script>

