/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@revolist/revogrid';

import { RevoGrid as RevoGridComponent } from '@revolist/revogrid/custom-element/';

export {RevoGridComponent};

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
  'plugins',
  'columnTypes',
  'theme',
  'rowClass',
  'autoSizeColumn',
  'filter',
  'canMoveColumns',
  'trimmedRows',
  'exporting',
  'grouping',
  'stretch',
  'beforeedit',
  'beforerangeedit',
  'afteredit',
  'beforeautofill',
  'beforeaange',
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
  'aftersourceset',
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
  'aftercolumnresize'
]);


export const RevogrClipboard = /*@__PURE__*/ defineContainer<JSX.RevogrClipboard>('revogr-clipboard', undefined, [
  'copyRegion',
  'pasteRegion'
]);


export const RevogrData = /*@__PURE__*/ defineContainer<JSX.RevogrData>('revogr-data', undefined, [
  'readonly',
  'range',
  'canDrag',
  'rowClass',
  'rowSelectionStore',
  'viewportRow',
  'viewportCol',
  'dimensionRow',
  'colData',
  'dataStore',
  'dragStartCell'
]);


export const RevogrEdit = /*@__PURE__*/ defineContainer<JSX.RevogrEdit>('revogr-edit', undefined, [
  'editCell',
  'column',
  'editor',
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
  'dataStore',
  'colData',
  'selectionStore',
  'dimensionRow',
  'dimensionCol',
  'afterfocus'
]);


export const RevogrHeader = /*@__PURE__*/ defineContainer<JSX.RevogrHeader>('revogr-header', undefined, [
  'viewportCol',
  'dimensionCol',
  'selectionStore',
  'parent',
  'groups',
  'groupingDepth',
  'canResize',
  'colData',
  'columnFilter',
  'initialHeaderClick',
  'headerresize',
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
  'internalCopy',
  'internalPaste',
  'internalCellEdit',
  'internalFocusCell',
  'setEdit',
  'setRange',
  'setTempRange',
  'focusCell',
  'internalSelectionChanged',
  'internalRangeDataApply'
]);


export const RevogrRowHeaders = /*@__PURE__*/ defineContainer<JSX.RevogrRowHeaders>('revogr-row-headers', undefined, [
  'height',
  'dataPorts',
  'headerProp',
  'uiid',
  'resize',
  'rowHeaderColumn',
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
  'contentWidth',
  'contentHeight',
  'scrollViewport',
  'resizeViewport',
  'scrollchange'
]);

