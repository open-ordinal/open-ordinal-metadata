[Open Ordinal Metadata](../README.md) / Introduction

> The documentation is still work in progress. Feedback from developers like you will drive the evolution and completeness of the documentation. Your input is invaluable.

# Introduction

The Open Ordinal Metadata (OOMD) standard is a comprehensive framework designed to organize and manage metadata for various types of content. It is separated into several protocols. Each protocol defines the specific metadata expected for different content types, such as artists, releases, tracks, media, and more.

## Key Concepts

1. **Multiple Protocols:** Each inscription (or entry) can include multiple types of content. Authors may want to follow multiple metadata protocols to describe these contents accurately.

2. **Name Collisions:** With multiple protocols, there's a risk of name collisions (i.e., properties with the same name but different meanings). To prevent this, properties of a specific protocol are wrapped in a dedicated object. This object is assigned to a property with the protocol's name, effectively creating a unique namespace for each protocol.

3. **Protocol Evolution:** Each protocol evolves independently and can introduce versioning schemes if needed. The protocol name must be unique, ensuring there are no conflicts.

4. **Optional Wrapping:** If an inscription follows only one metadata protocol, or the author is confident there won't be any collisions, wrapping the properties in a dedicated object is optional. However, this requires browsers to identify or guess the followed metadata protocols.

## Protocols 

The Open Ordinal Metadata standard is separated into several _protocols_. Each protocol define the metadata one might expect to find for a specific type of content; E.g. a track might have a title and artists, while a book has a title and authors.

Each protocol is defined as a typescript type definition (with json schema available). As an example, the definition of the [Release](../OOMD/interfaces/Release.md) protocol (covering albums, EPs, audiobooks etc.) could look something like this:

```ts
export interface Release {
    type: "album" | "single" | "ep" | "compilation" | "audiobook" | string;
    title: string;
    cover?: LinkedVisual;

    artists?: (Linked<Artist> | string)[]; // otherwise assumed to be parent inscriptions implementing Artist
    tracks?: Linked<Track>[]; // otherwise assumed to be child inscriptions implementing Track
}
```

(The [Linked&lt;T&gt;](../OOMD/type-aliases/Linked.md) type here just means that it could be an inline object of type `T`, or a reference to a separate inscription adhering to the `T` protocol)

The metadata for an inscribed audiobook may look like this:

```json
{
    "title": "1984 Audiobook",
    "type": "audiobook",
    "artists": ["Gary Ohwell"],
    "tracks": [
        { "title": "Part 1" },
        { "title": "Part 2" }
    ]
}

```

In this example the metadata for each track of the audiobook is specified as inline objects adhering to the [Track](../OOMD/interfaces/Track.md) protocol, however one might want to inscribe each track itself as a child inscription using ord parent / child relationship. In such cases one might want to inscribe the tracks' metadata with each respective track instead. 

This is supported by OOMD, as the [Release](../OOMD/interfaces/Release.md) protocol defines that child inscriptions should be assumed to be tracks if the `tracks` property is not defined. Similarely if `artists` where left out it would be assumed to be the parent inscription.

## Namespacing

Each inscription can contain multiple types of content, therefore the author may want to follow multiple metadata protocols. This can easily cause name collision between properties of the same name from different protocols. To solve this, our proposal is to wrap the properties of a specific protocol in a dedicated object assigned to a property whose name is the name of the protocol. This effectively provides a unique namespace for each protocol.

In the audio book example above we may also provide metadata adhering to the Book protocol, even though they have separate title values, by using protocol namespacing:

```json
{
    "release": {
        "title": "1984 Audiobook",
        "artists": ["Gary Ohwell"],
        "tracks": [
            { "title": "Chapter 1" },
        ]
    },
    "book": {
        "title": "1984",
        "authors": ["George Orwell"]
    }
}
```

The convention is that the name of the protocol needs to be unique to that protocol, but otherwise each protocol can evolve independently, introduce versioning schemes if needed, etc.

If an inscription only follows one metadata protocol, or the author is otherwise confident that there wont't be any collisions, wrapping the properties for the specific protocol in a dedicated object is optional, however this means browsers will have to know or guess what metadata protocols are being followed by the inscription.
