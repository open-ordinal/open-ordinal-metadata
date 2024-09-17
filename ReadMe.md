> [!WARNING]
> If you’re seeing this, you have early access to this repository. Please note that it is still a work in progress and will undergo changes until we make it public. Expect updates and modifications as we continue to develop it.
 
# Open Ordinal Metadata

Open Ordinal Metadata (OOMD) is an extensible format designed to standardize and enhance the metadata associated with Ordinals. 

This format is versatile and caters to a wide range of applications, including marketplaces, wallets, indexers, and content delivery networks (CDNs).

### Marketplaces
- Marketplaces can use OOMD to enhance the presentation and discoverability of Ordinals, providing rich metadata to potential buyers.
- Facilitates the listing and discovery of Ordinals with rich metadata, improving the buying and selling experience. Collections and their Ordinals can be identified from Metadata on-chain.

### Wallets
- Providing detailed metadata for better user experience and asset management.
- Wallet applications can leverage OOMD to display detailed metadata about assets, improving user experience and asset management.
- Ensures that wallets can display detailed information about Ordinals and other information connected to the Ordinal.

### Indexers
- Enabling efficient indexing and retrieval of Ordinals.
- Indexers can use OOMD to efficiently index and retrieve Ordinals, enabling fast and accurate searches.
- Allows indexers to catalog and search Ordinals efficiently, making it easier to find specific items.

## Folders

- `dist`: Contain the minified and packaged version of the library. For now this is just used for build validation of the code.
- `docs`: Contain the generated docs.
- `lib`: Contain the build of the library. For now this is just used for build validation of the code.
- `src`: Contain all source code for the library and docs source.

## Documentation

Head over to [the docs](docs/markdown/README.md) to read more about this tiny beast. For best experience clone the repository and open the `docs/html/index.html` in a browser.

## Commands

- `yarn install`: Get all the libraries that is needed for development and running this library.
- `yarn run build`: Builds the `src` to the `lib` folder and then minimize it to the `dist` folder.
- `yarn run docs`: Builds the `docs`.