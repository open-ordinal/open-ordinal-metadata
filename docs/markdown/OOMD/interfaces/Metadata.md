[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Metadata

# Interface: Metadata

This interface represents metadata, extending the Common interface, and includes
optional properties for static indication, organization, collection, attributes,
artist, release, track, media, module, author, book, chapter, and torrent.

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
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
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
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher</div><pre><code class="language-mermaid">graph LR
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
  Metadata --&gt; Torrent
  Metadata --&gt; Publisher</code></pre></div>

## Extends

- [`Common`](Common.md)

## Properties

### static?

> `optional` **static**: `true`

When `static` is present this indicates that a viewer should _not_ get the
latest inscription on the sat number of this inscription

#### Defined in

[OOMD.ts:71](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L71)

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

An optional organization associated with the metadata

#### Defined in

[OOMD.ts:76](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L76)

***

### collection?

> `optional` **collection**: [`Collection`](Collection.md)

An optional collection associated with the metadata

#### Defined in

[OOMD.ts:81](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L81)

***

### attributes?

> `optional` **attributes**: [`Attributes`](Attributes.md)

Optional attributes associated with the metadata

#### Defined in

[OOMD.ts:86](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L86)

***

### artist?

> `optional` **artist**: [`Artist`](Artist.md)

An optional artist associated with the metadata

#### Defined in

[OOMD.ts:91](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L91)

***

### release?

> `optional` **release**: [`Release`](Release.md)

An optional release associated with the metadata

#### Defined in

[OOMD.ts:96](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L96)

***

### track?

> `optional` **track**: [`Track`](Track.md)

An optional track associated with the metadata

#### Defined in

[OOMD.ts:101](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L101)

***

### media?

> `optional` **media**: [`Media`](Media.md)

Optional media associated with the metadata

#### Defined in

[OOMD.ts:106](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L106)

***

### module?

> `optional` **module**: [`Module`](Module.md)

An optional module associated with the metadata

#### Defined in

[OOMD.ts:111](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L111)

***

### publisher?

> `optional` **publisher**: [`Publisher`](Publisher.md)

An optional publisher associated with the metadata

#### Defined in

[OOMD.ts:116](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L116)

***

### author?

> `optional` **author**: [`Author`](Author.md)

An optional author associated with the metadata

#### Defined in

[OOMD.ts:121](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L121)

***

### book?

> `optional` **book**: [`Book`](Book.md)

An optional book associated with the metadata

#### Defined in

[OOMD.ts:126](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L126)

***

### chapter?

> `optional` **chapter**: [`Chapter`](Chapter.md)

An optional chapter associated with the metadata

#### Defined in

[OOMD.ts:131](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L131)

***

### torrent?

> `optional` **torrent**: [`Torrent`](Torrent.md)

An optional torrent associated with the metadata

#### Defined in

[OOMD.ts:136](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/OOMD.ts#L136)

***

### id?

> `optional` **id**: `string`

An optional ID for the common structure

#### Inherited from

[`Common`](Common.md).[`id`](Common.md#id)

#### Defined in

[protocols/Common.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/5abb5abae2bd895ff8e9de3f437702550bb5189b/src/protocols/Common.ts#L11)
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

