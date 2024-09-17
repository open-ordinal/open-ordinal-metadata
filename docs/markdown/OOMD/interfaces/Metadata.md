[Open Ordinal Metadata](../../README.md) / [OOMD](../README.md) / Metadata

# Interface: Metadata

## Mermaid

#### OOMD Structure

<div class="mermaid-block"><div class="mermaid dark">%%{init:{"theme":"dark"}}%%
graph LR
  OOMD --&gt; Organization
  OOMD --&gt; Collection
  Collection --&gt; Attributes
  OOMD --&gt; Attributes
  OOMD --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  OOMD --&gt; Media
  OOMD --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  OOMD --&gt; Module</div><div class="mermaid light">%%{init:{"theme":"default"}}%%
graph LR
  OOMD --&gt; Organization
  OOMD --&gt; Collection
  Collection --&gt; Attributes
  OOMD --&gt; Attributes
  OOMD --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  OOMD --&gt; Media
  OOMD --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  OOMD --&gt; Module</div><pre><code class="language-mermaid">graph LR
  OOMD --&gt; Organization
  OOMD --&gt; Collection
  Collection --&gt; Attributes
  OOMD --&gt; Attributes
  OOMD --&gt; Artist
  Artist --&gt; Release
  Release --&gt; Track
  OOMD --&gt; Media
  OOMD --&gt; Author
  Author --&gt; Book
  Book --&gt; Chapter
  OOMD --&gt; Module</code></pre></div>

## Extends

- [`Common`](Common.md)

## Properties

### artist?

> `optional` **artist**: [`Artist`](Artist.md)

#### Defined in

[OOMD.ts:63](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L63)

***

### attributes?

> `optional` **attributes**: [`Attributes`](Attributes.md)

#### Defined in

[OOMD.ts:61](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L61)

***

### author?

> `optional` **author**: [`Author`](Author.md)

#### Defined in

[OOMD.ts:70](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L70)

***

### book?

> `optional` **book**: [`Book`](Book.md)

#### Defined in

[OOMD.ts:71](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L71)

***

### chapter?

> `optional` **chapter**: [`Chapter`](Chapter.md)

#### Defined in

[OOMD.ts:72](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L72)

***

### collection?

> `optional` **collection**: [`Collection`](Collection.md)

#### Defined in

[OOMD.ts:60](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L60)

***

### id?

> `optional` **id**: `string`

#### Inherited from

[`Common`](Common.md).[`id`](Common.md#id)

#### Defined in

[protocols/Common.ts:6](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/protocols/Common.ts#L6)

***

### media?

> `optional` **media**: [`Media`](Media.md)

#### Defined in

[OOMD.ts:67](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L67)

***

### module?

> `optional` **module**: [`Module`](Module.md)

#### Defined in

[OOMD.ts:68](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L68)

***

### organization?

> `optional` **organization**: [`Organization`](Organization.md)

#### Defined in

[OOMD.ts:58](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L58)

***

### release?

> `optional` **release**: [`Release`](Release.md)

#### Defined in

[OOMD.ts:64](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L64)

***

### static?

> `optional` **static**: `true`

#### Defined in

[OOMD.ts:56](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L56)

***

### track?

> `optional` **track**: [`Track`](Track.md)

#### Defined in

[OOMD.ts:65](https://github.com/open-ordinal/open-ordinal-metadata/blob/e842098b1fb29e1be4b5533286ecbbaaac36ff64/src/OOMD.ts#L65)
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

