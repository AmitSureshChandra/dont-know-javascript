# require()

- require.resolve() is used to resolve module not load
- require.main is `module` if it is run from terminal
- after requiring module it is cached in `require.cache`, whether we call it again will use cached
- for multi require schenario use function export rather than object export