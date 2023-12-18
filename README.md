<p align="center">
  <a href="https://revolist.github.io/revogrid">
    <img src="https://raw.githubusercontent.com/revolist/revogrid/master/assets/logo.svg" alt="RevoGrid" height="150" />
  </a>
</p>

##
<p align="center">
  <a href="https://www.npmjs.com/package/@revolist/revogrid"><img src="https://img.shields.io/npm/v/@revolist/vue3-datagrid" alt="Latest Version on NPM"/></a>
  <a href="https://github.com/revolist/revogrid/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@revolist/revogrid" alt="Software License"/></a>
</p>
<h4 align="center">Powerful data grid component built on top of <a href="https://github.com/revolist/revogrid" target="_blank">RevoGrid</a>.</h4>
<p align="center">
Millions of cells and thousands columns easy and efficiently.
  
</p>

<p align="center">
  <a href="https://revolist.github.io/revogrid">Demo and API</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="https://github.com/revolist/revogrid/blob/master/src/components/revo-grid/readme.md">Docs</a> •
  <a href="#license">License</a>
</p>

<img src="https://raw.githubusercontent.com/revolist/revogrid/master/assets/material.jpg" alt="Material grid preview" width="100%" />
<i>RevoGrid material theme.</i>
<br>


## Key Features

- Millions of cells viewport with a powerful core in-build by default;
- Keayboard support with excel like focus;
- Super light initial starter <img src="https://badgen.net/bundlephobia/min/@revolist/revogrid@latest" alt="Min size"/>. Can be imported with polifill or as module for modern browsers;
- Intelligent Virtual DOM and smart row recombination in order to achieve less redraws;
- Sorting (multiple options, can be customized per column and advanced with events);
- Filtering
  - Predefined system filters;
  - Preserve existing collection;
  - Custom filters (extend existing system filters with your own set);
- Export to file;
- Custom sizes per Column and Row;
- Column resizing;
- Autosize support (Column size based on content);
- Pinned/Sticky/Freezed:
  - Columns (define left or right);
  - Rows (define top or bottom);
- Grouping:
  - Column grouping (Nester headers);
  - Row grouping (Nested rows);
- Cell editing;
- Customizations:
  - Header template;
  - Cell template (build your own cell view);
  - Cell editor (apply your own editors and cell types);
  - Cell properties (build you own properties around rendered cells);
- [Column types](https://revolist.github.io/revogrid/guide/column.types.html);
  - Text/String (default);
  - Number;
  - Select;
  - Date;
  - Custom (take any type as template and create your own extended style);
- Drag and drop rows;
- Range operations:
  - Selection;
  - Edit;
- Theme packages:
  - Excel like (default)
  - Material (compact, dark or light);
- Copy/Paste (copy/paste from Excel, Google Sheets or any other sheet format);
- Easy extenation and support with modern VNode features and tsx support;
- Trimmed rows (hide rows on demand);
- Plugin system (create your own plugins or extend existing one, it's transparent and easy);
- Hundred others small customizations and improvements [RevoGrid](https://revolist.github.io/revogrid).


## How to use

With NPM:
```bash
npm i @revolist/vue3-datagrid --save;
```

With Yarn:

```bash
yarn add @revolist/vue3-datagrid;
```

[Sandbox](https://codesandbox.io/s/revo-grid-vue3-thry7?file=/src/App.vue)
```vue
<template>
  <div id="app">
    <v-grid theme="compact" :source="rows" :columns="columns"/>
  </div>
</template>

<script>
import VGrid from "@revolist/vue3-datagrid";
export default {
  name: "App",
  data() {
    return {
      columns: [{
          prop: "name",
          name: "First",
        },
        {
          prop: "details",
          name: "Second",
      }],
      rows: [{
        name: "1",
        details: "Item 1",
      }]
    };
  },
  components: {
    VGrid,
  },
};
</script>
```

## Contributing

If you have any idea, feel free to open an issue to discuss a new feature and submit your changes back to me.


## License

MIT

