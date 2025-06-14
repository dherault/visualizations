module.exports = {
  root: true,
  extends: ['dherault-typescript'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
        ],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: '~types',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~constants',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~hook/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~utils/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
}
