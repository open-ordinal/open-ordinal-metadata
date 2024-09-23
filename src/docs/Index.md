---
title: Introduction
group: Documents
children:
---

# Open Ordinal Metadata
**Open Ordinal Meta Data** (OOMD) is an extensible metadata schema designed to standardize and enhance the metadata associated with Ordinals. 
**Open Ordinal Meta Data** (OOMD) is an extensible format designed to standardize and enhance the metadata associated with Ordinals. 

OOMD provides a standardized structure for metadata

This format is versatile and caters to a wide range of applications, including marketplaces, wallets, indexers, and content delivery networks (CDNs).


- Marketplaces
    - Marketplaces can use OOMD to enhance the presentation and discoverability of Ordinals, providing rich metadata to potential buyers.
    - Facilitates the listing and discovery of Ordinals with rich metadata, improving the buying and selling experience. I.e. Collections and their Ordinals can be indentifiel from Metadata on-chain.

- Wallets
    - Providing detailed metadata for better user experience and asset management.
    - Wallet applications can leverage OOMD to display detailed metadata about assets, improving user experience and asset management.
    - Ensures that wallets can display detailed information about Ordinals and other information connected to the Ordinal.

- Indexers
    - Enabling efficient indexing and retrieval of Ordinals.
    - Indexers can use OOMD to efficiently index and retrieve Ordinals, enabling fast and accurate searches.
    - Allows indexers to catalog and search Ordinals efficiently, making it easier to find specific items.



# Linked inscriptions

a common schema for linking to other 

By default, each protocol defines what to expect from the parent/child inscription relationship.
In all cases this can be overridden by explicitly providing the corresponding attributes in the metadata.
E.g. unless an "release.tracks" attribute is specified, it is expected that the each track of the release is a child inscription

parent/child

# Updating inscriptions

OOMD defines that all browsers/viewers/etc should use the latest inscription on the sat of a child/parent/linked inscription unless otherwise specified. If an inscription should be considered immutable, the `"static"` metadata attribute should be set to `true`.

# Use case: Inscribed music

Artist
Release
Track
Media

# Use case: Inscribed books

Author
Book
Chapter
Page?

# Use case: Ordinal collections

Ordinal metadata can accommodate a wide range of use cases when extended by the parent/child structure supported by ordinals. For example, the metadata can describe a collection of ordinals and each individual ordinal it contains.

A common scenario involves a collection with 10,000 ordinals. The collection itself should also be recorded on the blockchain as the parent, with the entire collection as the child. This way, the collection contains information about all the traits and attributes it holds. Additionally, the child defines its own traits and attributes used.

Previously, this information was stored in external JSON files that marketplaces and wallets collected from off-chain sources.

