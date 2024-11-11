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
  Metadata --&gt; Bootstrap
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
  Metadata --&gt; Bootstrap
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

[OOMD.ts:75](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L75)

***

### bootstrap?

> `optional` **bootstrap**: [`Bootstrap`](Bootstrap.md)

An optional bootstrap options with the metadata

#### Defined in

[OOMD.ts:80](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L80)

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

An optional organization associated with the metadata

#### Defined in

[OOMD.ts:85](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L85)

***

### collection?

> `optional` **collection**: [`Collection`](Collection.md)

An optional collection associated with the metadata

#### Defined in

[OOMD.ts:90](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L90)

***

### attributes?

> `optional` **attributes**: [`Attributes`](Attributes.md)

Optional attributes associated with the metadata

#### Defined in

[OOMD.ts:95](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L95)

***

### artist?

> `optional` **artist**: [`Artist`](Artist.md)

An optional artist associated with the metadata

#### Defined in

[OOMD.ts:100](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L100)

***

### release?

> `optional` **release**: [`Release`](Release.md)

An optional release associated with the metadata

#### Defined in

[OOMD.ts:105](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L105)

***

### track?

> `optional` **track**: [`Track`](Track.md)

An optional track associated with the metadata

#### Defined in

[OOMD.ts:110](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L110)

***

### media?

> `optional` **media**: [`Media`](Media.md)

Optional media associated with the metadata

#### Defined in

[OOMD.ts:115](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L115)

***

### module?

> `optional` **module**: [`Module`](Module.md)

An optional module associated with the metadata

#### Defined in

[OOMD.ts:120](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L120)

***

### publisher?

> `optional` **publisher**: [`Publisher`](Publisher.md)

An optional publisher associated with the metadata

#### Defined in

[OOMD.ts:125](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L125)

***

### author?

> `optional` **author**: [`Author`](Author.md)

An optional author associated with the metadata

#### Defined in

[OOMD.ts:130](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L130)

***

### book?

> `optional` **book**: [`Book`](Book.md)

An optional book associated with the metadata

#### Defined in

[OOMD.ts:135](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L135)

***

### chapter?

> `optional` **chapter**: [`Chapter`](Chapter.md)

An optional chapter associated with the metadata

#### Defined in

[OOMD.ts:140](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L140)

***

### torrent?

> `optional` **torrent**: [`Torrent`](Torrent.md)

An optional torrent associated with the metadata

#### Defined in

[OOMD.ts:145](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/OOMD.ts#L145)

***

### id?

> `optional` **id**: `string`

An optional ID for the common structure

#### Inherited from

[`Common`](Common.md).[`id`](Common.md#id)

#### Defined in

[protocols/Common.ts:11](https://github.com/open-ordinal/open-ordinal-metadata/blob/2266106f4dcb37dee621089d1fbf0d610daeef61/src/protocols/Common.ts#L11)
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

