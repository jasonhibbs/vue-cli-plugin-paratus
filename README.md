# Paratus

A plugin for the various transformations I’ve been performing manually to [my Vue CLI preset](#my-preset) of Pug, Typescript, and SCSS.

## My Preset

```json
{
  "paratus": {
    "useConfigFiles": false,
    "plugins": {
      "@vue/cli-plugin-typescript": {
        "classComponent": true,
        "tsLint": true,
        "lintOn": [
          "save"
        ],
        "useTsWithBabel": true
      },
      "@vue/cli-plugin-babel": {},
      "vue-cli-plugin-pug": {},
      "vue-cli-plugin-paratus": {}
    },
    "router": true,
    "routerHistoryMode": true,
    "vuex": true,
    "cssPreprocessor": "sass"
  }
}
```

## Para-what?
### From Latin, [*parātus*](https://en.wiktionary.org/wiki/paratus)
1. prepared, arranged, having been prepared or arranged
2. provided, furnished, having been provided or furnished
3. resolved, purposed, having been resolved or purposed
