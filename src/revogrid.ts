/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@revolist/revogrid';

import { defineCustomElements } from '@revolist/revogrid/loader';

defineCustomElements();

export const RevoGrid = /*@__PURE__*/ defineContainer<JSX.RevoGrid>('revo-grid', undefined, [
  'rowHeaders',
  'frameSize',
  'rowSize',
  'colSize',
  'range',
  'readonly',
  'resize',
  'canFocus',
  'useClipboard',
  'columns',
  'source',
  'pinnedTopSource',
  'pinnedBottomSource',
  'rowDefinitions',
  'editors',
  'applyOnClose',
  'plugins',
  'columnTypes',
  'theme',
  'rowClass',
  'autoSizeColumn',
  'filter',
  'focusTemplate',
  'canMoveColumns',
  'trimmedRows',
  'exporting',
  'grouping',
  'stretch',
  'additionalData',
  'disableVirtualX',
  'disableVirtualY',
  'jobsBeforeRender',
  'contentsizechanged',
  'beforeedit',
  'beforerangeedit',
  'afteredit',
  'beforeautofill',
  'beforeange',
  'afterfocus',
  'roworderchanged',
  'beforesourcesortingapply',
  'beforesortingapply',
  'beforesorting',
  'rowdragstart',
  'headerclick',
  'beforecellfocus',
  'beforefocuslost',
  'beforesourceset',
  'before-any-source',
  'aftersourceset',
  'after-any-source',
  'beforecolumnsset',
  'beforecolumnapplied',
  'aftercolumnsset',
  'beforefilterapply',
  'beforefiltertrimmed',
  'beforetrimmed',
  'aftertrimmed',
  'viewportscroll',
  'beforeexport',
  'beforeeditstart',
  'aftercolumnresize',
  'beforerowdefinition',
  'filterconfigchanged',
  'rowheaderschanged'
]);


export const RevogrCell = /*@__PURE__*/ defineContainer<JSX.RevogrCell>('revogr-cell', undefined, [
  'additionalData',
  'columnService',
  'providers',
  'depth',
  'rowIndex',
  'rowStart',
  'rowEnd',
  'rowSize',
  'colIndex',
  'colStart',
  'colEnd',
  'colSize',
  'before-cell-render',
  'dragStartCell'
]);


export const RevogrClipboard = /*@__PURE__*/ defineContainer<JSX.RevogrClipboard>('revogr-clipboard', undefined, [
  'readonly',
  'pasteRegion',
  'beforepaste',
  'beforepasteapply',
  'afterpasteapply',
  'beforecut',
  'clearRegion',
  'beforecopy',
  'beforecopyapply',
  'copyRegion'
]);


export const RevogrData = /*@__PURE__*/ defineContainer<JSX.RevogrData>('revogr-data', undefined, [
  'readonly',
  'range',
  'rowClass',
  'additionalData',
  'rowSelectionStore',
  'viewportRow',
  'viewportCol',
  'dimensionRow',
  'colData',
  'dataStore',
  'type',
  'beforerowrender',
  'afterrender'
]);


export const RevogrEdit = /*@__PURE__*/ defineContainer<JSX.RevogrEdit>('revogr-edit', undefined, [
  'editCell',
  'column',
  'editor',
  'saveOnClose',
  'additionalData',
  'cellEdit',
  'closeEdit'
]);


export const RevogrFilterPanel = /*@__PURE__*/ defineContainer<JSX.RevogrFilterPanel>('revogr-filter-panel', undefined, [
  'uuid',
  'filterItems',
  'filterTypes',
  'filterNames',
  'filterEntities',
  'filterCaptions',
  'disableDynamicFiltering',
  'filterChange'
]);


export const RevogrFocus = /*@__PURE__*/ defineContainer<JSX.RevogrFocus>('revogr-focus', undefined, [
  'selectionStore',
  'dimensionRow',
  'dimensionCol',
  'dataStore',
  'colData',
  'colType',
  'rowType',
  'focusTemplate',
  'before-focus-render',
  'beforescrollintoview',
  'afterfocus'
]);


export const RevogrHeader = /*@__PURE__*/ defineContainer<JSX.RevogrHeader>('revogr-header', undefined, [
  'viewportCol',
  'dimensionCol',
  'selectionStore',
  'parent',
  'groups',
  'groupingDepth',
  'readonly',
  'canResize',
  'resizeHandler',
  'colData',
  'columnFilter',
  'type',
  'additionalData',
  'initialHeaderClick',
  'headerresize',
  'before-resize',
  'headerdblClick'
]);


export const RevogrOrderEditor = /*@__PURE__*/ defineContainer<JSX.RevogrOrderEditor>('revogr-order-editor', undefined, [
  'parent',
  'dimensionRow',
  'dimensionCol',
  'dataStore',
  'internalRowDragStart',
  'internalRowDragEnd',
  'internalRowDrag',
  'internalRowMouseMove',
  'initialRowDropped'
]);


export const RevogrOverlaySelection = /*@__PURE__*/ defineContainer<JSX.RevogrOverlaySelection>('revogr-overlay-selection', undefined, [
  'readonly',
  'range',
  'canDrag',
  'useClipboard',
  'selectionStore',
  'dimensionRow',
  'dimensionCol',
  'dataStore',
  'colData',
  'lastCell',
  'editors',
  'applyChangesOnClose',
  'additionalData',
  'isMobileDevice',
  'internalCopy',
  'internalPaste',
  'internalCellEdit',
  'beforeFocusCell',
  'setEdit',
  'before-apply-range',
  'before-set-range',
  'before-edit-render',
  'setRange',
  'selectall',
  'cancelEdit',
  'setTempRange',
  'applyFocus',
  'focusCell',
  'beforeRangeDataApply',
  'internalSelectionChanged',
  'beforeRangeCopyApply',
  'internalRangeDataApply',
  'rangeClipboardCopy',
  'rangeClipboardPaste',
  'beforekeydown',
  'beforekeyup',
  'before-cell-save'
]);


export const RevogrRowHeaders = /*@__PURE__*/ defineContainer<JSX.RevogrRowHeaders>('revogr-row-headers', undefined, [
  'height',
  'dataPorts',
  'headerProp',
  'uiid',
  'rowClass',
  'resize',
  'rowHeaderColumn',
  'additionalData',
  'scrollViewport',
  'elementToScroll'
]);


export const RevogrScrollVirtual = /*@__PURE__*/ defineContainer<JSX.RevogrScrollVirtual>('revogr-scroll-virtual', undefined, [
  'dimension',
  'viewportStore',
  'dimensionStore',
  'scrollVirtual'
]);


export const RevogrTempRange = /*@__PURE__*/ defineContainer<JSX.RevogrTempRange>('revogr-temp-range', undefined, [
  'selectionStore',
  'dimensionRow',
  'dimensionCol'
]);


export const RevogrViewportScroll = /*@__PURE__*/ defineContainer<JSX.RevogrViewportScroll>('revogr-viewport-scroll', undefined, [
  'rowHeader',
  'contentWidth',
  'contentHeight',
  'scrollViewport',
  'resizeViewport',
  'scrollchange',
  'silentScroll'
]);

