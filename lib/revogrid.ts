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
  'beforesortingapply',
  'beforesorting',
  'rowdragstart',
  'headerclick',
  'beforecellfocus',
  'beforefocuslost',
  'beforesourceset',
  'beforeanysource',
  'aftersourceset',
  'afteranysource',
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
  'rowheaderschanged',
  'beforegridrender'
]);


export const RevogrClipboard = /*@__PURE__*/ defineContainer<JSX.RevogrClipboard>('revogr-clipboard', undefined, [
  'readonly',
  'beforepaste',
  'beforepasteapply',
  'pasteregion',
  'afterpasteapply',
  'beforecut',
  'clearregion',
  'beforecopy',
  'beforecopyapply',
  'copyregion'
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
  'colType',
  'jobsBeforeRender',
  'beforerowrender',
  'afterrender',
  'beforecellrender',
  'dragstartcell'
]);


export const RevogrEdit = /*@__PURE__*/ defineContainer<JSX.RevogrEdit>('revogr-edit', undefined, [
  'editCell',
  'column',
  'editor',
  'saveOnClose',
  'additionalData',
  'celledit',
  'closeedit'
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
  'colType',
  'rowType',
  'selectionStore',
  'dimensionRow',
  'dimensionCol',
  'dataStore',
  'colData',
  'focusTemplate',
  'beforefocusrender',
  'beforescrollintoview',
  'afterfocus'
]);


export const RevogrHeader = /*@__PURE__*/ defineContainer<JSX.RevogrHeader>('revogr-header', undefined, [
  'viewportCol',
  'dimensionCol',
  'selectionStore',
  'groups',
  'groupingDepth',
  'readonly',
  'canResize',
  'resizeHandler',
  'colData',
  'columnFilter',
  'type',
  'additionalData',
  'beforeheaderclick',
  'headerresize',
  'beforeheaderresize',
  'headerdblclick'
]);


export const RevogrOrderEditor = /*@__PURE__*/ defineContainer<JSX.RevogrOrderEditor>('revogr-order-editor', undefined, [
  'parent',
  'dimensionRow',
  'dimensionCol',
  'dataStore',
  'rowdragstartinit',
  'rowdragendinit',
  'rowdragmoveinit',
  'rowdragmousemove',
  'rowdropinit'
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
  'beforecopyregion',
  'beforepasteregion',
  'celleditapply',
  'beforecellfocusinit',
  'setedit',
  'beforeapplyrange',
  'beforesetrange',
  'beforeeditrender',
  'setrange',
  'selectall',
  'canceledit',
  'settemprange',
  'applyfocus',
  'focuscell',
  'beforerangedataapply',
  'selectionchangeinit',
  'beforerangecopyapply',
  'rangeeditapply',
  'clipboardrangecopy',
  'clipboardrangepaste',
  'beforekeydown',
  'beforekeyup',
  'beforecellsave'
]);


export const RevogrRowHeaders = /*@__PURE__*/ defineContainer<JSX.RevogrRowHeaders>('revogr-row-headers', undefined, [
  'height',
  'dataPorts',
  'headerProp',
  'rowClass',
  'resize',
  'rowHeaderColumn',
  'additionalData',
  'jobsBeforeRender',
  'scrollview',
  'ref'
]);


export const RevogrScrollVirtual = /*@__PURE__*/ defineContainer<JSX.RevogrScrollVirtual>('revogr-scroll-virtual', undefined, [
  'dimension',
  'viewportStore',
  'dimensionStore',
  'scrollvirtual'
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
  'scrollviewport',
  'resizeviewport',
  'scrollchange',
  'scrollviewportsilent'
]);


export const VnodeHtml = /*@__PURE__*/ defineContainer<JSX.VnodeHtml>('vnode-html', undefined, [
  'redraw',
  'html'
]);

