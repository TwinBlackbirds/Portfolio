/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/sitemap.xml/route";
exports.ids = ["app/sitemap.xml/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fsitemap.xml%2Froute&page=%2Fsitemap.xml%2Froute&appPaths=&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fsitemap.xml%2Froute&page=%2Fsitemap.xml%2Froute&appPaths=&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_metadata_route_loader_filePath_2Fhome_2Fmichael_2FCLionProjects_2FPortfolio_2Fnextjs_website_2Fsrc_2Fapp_2Fsitemap_ts_isDynamicRouteExtension_1_next_metadata_route___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-metadata-route-loader?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__ */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/sitemap.xml/route\",\n        pathname: \"/sitemap.xml\",\n        filename: \"sitemap\",\n        bundlePath: \"app/sitemap.xml/route\"\n    },\n    resolvedPagePath: \"next-metadata-route-loader?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__\",\n    nextConfigOutput,\n    userland: next_metadata_route_loader_filePath_2Fhome_2Fmichael_2FCLionProjects_2FPortfolio_2Fnextjs_website_2Fsrc_2Fapp_2Fsitemap_ts_isDynamicRouteExtension_1_next_metadata_route___WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZzaXRlbWFwLnhtbCUyRnJvdXRlJnBhZ2U9JTJGc2l0ZW1hcC54bWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZzaXRlbWFwLnRzJmFwcERpcj0lMkZob21lJTJGbWljaGFlbCUyRkNMaW9uUHJvamVjdHMlMkZQb3J0Zm9saW8lMkZuZXh0anMtd2Vic2l0ZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm1pY2hhZWwlMkZDTGlvblByb2plY3RzJTJGUG9ydGZvbGlvJTJGbmV4dGpzLXdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzhIO0FBQzNNO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJuZXh0LW1ldGFkYXRhLXJvdXRlLWxvYWRlcj9maWxlUGF0aD0lMkZob21lJTJGbWljaGFlbCUyRkNMaW9uUHJvamVjdHMlMkZQb3J0Zm9saW8lMkZuZXh0anMtd2Vic2l0ZSUyRnNyYyUyRmFwcCUyRnNpdGVtYXAudHMmaXNEeW5hbWljUm91dGVFeHRlbnNpb249MSE/X19uZXh0X21ldGFkYXRhX3JvdXRlX19cIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvc2l0ZW1hcC54bWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL3NpdGVtYXAueG1sXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInNpdGVtYXBcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvc2l0ZW1hcC54bWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJuZXh0LW1ldGFkYXRhLXJvdXRlLWxvYWRlcj9maWxlUGF0aD0lMkZob21lJTJGbWljaGFlbCUyRkNMaW9uUHJvamVjdHMlMkZQb3J0Zm9saW8lMkZuZXh0anMtd2Vic2l0ZSUyRnNyYyUyRmFwcCUyRnNpdGVtYXAudHMmaXNEeW5hbWljUm91dGVFeHRlbnNpb249MSE/X19uZXh0X21ldGFkYXRhX3JvdXRlX19cIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fsitemap.xml%2Froute&page=%2Fsitemap.xml%2Froute&appPaths=&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__ ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _home_michael_CLionProjects_Portfolio_nextjs_website_src_app_sitemap_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/sitemap.ts */ \"(rsc)/./src/app/sitemap.ts\");\n/* harmony import */ var next_dist_build_webpack_loaders_metadata_resolve_route_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/metadata/resolve-route-data */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_metadata_resolve_route_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_webpack_loaders_metadata_resolve_route_data__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst sitemapModule = { ..._home_michael_CLionProjects_Portfolio_nextjs_website_src_app_sitemap_ts__WEBPACK_IMPORTED_MODULE_1__ }\nconst handler = sitemapModule.default\nconst contentType = \"application/xml\"\nconst fileType = \"sitemap\"\n\n\n  if (typeof handler !== 'function') {\n    throw new Error('Default export is missing in \"/home/michael/CLionProjects/Portfolio/nextjs-website/src/app/sitemap.ts\"')\n  }\n  \n\n\nasync function GET(_, ctx) {\n  const { __metadata_id__: id, ...params } = await ctx.params || {}\n  const hasXmlExtension = id ? id.endsWith('.xml') : false\n\n  if (id && !hasXmlExtension) {\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse('Not Found', {\n      status: 404,\n    })\n  }\n\n  if ( true && sitemapModule.generateSitemaps) {\n    const sitemaps = await sitemapModule.generateSitemaps()\n    for (const item of sitemaps) {\n      if (item?.id == null) {\n        throw new Error('id property is required for every item returned from generateSitemaps')\n      }\n    }\n  }\n\n  const targetId = id && hasXmlExtension ? id.slice(0, -4) : undefined\n\n  const data = await handler({ id: targetId })\n  const content = (0,next_dist_build_webpack_loaders_metadata_resolve_route_data__WEBPACK_IMPORTED_MODULE_2__.resolveRouteData)(data, fileType)\n\n  return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(content, {\n    headers: {\n      'Content-Type': contentType,\n      'Cache-Control': \"public, max-age=0, must-revalidate\",\n    },\n  })\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LW1ldGFkYXRhLXJvdXRlLWxvYWRlci5qcz9maWxlUGF0aD0lMkZob21lJTJGbWljaGFlbCUyRkNMaW9uUHJvamVjdHMlMkZQb3J0Zm9saW8lMkZuZXh0anMtd2Vic2l0ZSUyRnNyYyUyRmFwcCUyRnNpdGVtYXAudHMmaXNEeW5hbWljUm91dGVFeHRlbnNpb249MSE/X19uZXh0X21ldGFkYXRhX3JvdXRlX18iLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFDeUQ7QUFDTDs7QUFFOUYsd0JBQXdCLEdBQUcsb0dBQVE7QUFDbkM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUCxVQUFVLGlDQUFpQztBQUMzQzs7QUFFQTtBQUNBLGVBQWUscURBQVk7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsY0FBYztBQUM3QyxrQkFBa0IsNkdBQWdCOztBQUVsQyxhQUFhLHFEQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIj9fX25leHRfbWV0YWRhdGFfcm91dGVfXyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9taWNoYWVsL0NMaW9uUHJvamVjdHMvUG9ydGZvbGlvL25leHRqcy13ZWJzaXRlL3NyYy9hcHAvc2l0ZW1hcC50c1wiXG5pbXBvcnQgeyByZXNvbHZlUm91dGVEYXRhIH0gZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9tZXRhZGF0YS9yZXNvbHZlLXJvdXRlLWRhdGEnXG5cbmNvbnN0IHNpdGVtYXBNb2R1bGUgPSB7IC4uLnVzZXJsYW5kIH1cbmNvbnN0IGhhbmRsZXIgPSBzaXRlbWFwTW9kdWxlLmRlZmF1bHRcbmNvbnN0IGNvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi94bWxcIlxuY29uc3QgZmlsZVR5cGUgPSBcInNpdGVtYXBcIlxuXG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZhdWx0IGV4cG9ydCBpcyBtaXNzaW5nIGluIFwiL2hvbWUvbWljaGFlbC9DTGlvblByb2plY3RzL1BvcnRmb2xpby9uZXh0anMtd2Vic2l0ZS9zcmMvYXBwL3NpdGVtYXAudHNcIicpXG4gIH1cbiAgXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChfLCBjdHgpIHtcbiAgY29uc3QgeyBfX21ldGFkYXRhX2lkX186IGlkLCAuLi5wYXJhbXMgfSA9IGF3YWl0IGN0eC5wYXJhbXMgfHwge31cbiAgY29uc3QgaGFzWG1sRXh0ZW5zaW9uID0gaWQgPyBpZC5lbmRzV2l0aCgnLnhtbCcpIDogZmFsc2VcblxuICBpZiAoaWQgJiYgIWhhc1htbEV4dGVuc2lvbikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2l0ZW1hcE1vZHVsZS5nZW5lcmF0ZVNpdGVtYXBzKSB7XG4gICAgY29uc3Qgc2l0ZW1hcHMgPSBhd2FpdCBzaXRlbWFwTW9kdWxlLmdlbmVyYXRlU2l0ZW1hcHMoKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzaXRlbWFwcykge1xuICAgICAgaWYgKGl0ZW0/LmlkID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpZCBwcm9wZXJ0eSBpcyByZXF1aXJlZCBmb3IgZXZlcnkgaXRlbSByZXR1cm5lZCBmcm9tIGdlbmVyYXRlU2l0ZW1hcHMnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRhcmdldElkID0gaWQgJiYgaGFzWG1sRXh0ZW5zaW9uID8gaWQuc2xpY2UoMCwgLTQpIDogdW5kZWZpbmVkXG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGhhbmRsZXIoeyBpZDogdGFyZ2V0SWQgfSlcbiAgY29uc3QgY29udGVudCA9IHJlc29sdmVSb3V0ZURhdGEoZGF0YSwgZmlsZVR5cGUpXG5cbiAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoY29udGVudCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSxcbiAgICAgICdDYWNoZS1Db250cm9sJzogXCJwdWJsaWMsIG1heC1hZ2U9MCwgbXVzdC1yZXZhbGlkYXRlXCIsXG4gICAgfSxcbiAgfSlcbn1cblxuXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?filePath=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__\n");

/***/ }),

/***/ "(rsc)/./src/app/sitemap.ts":
/*!****************************!*\
  !*** ./src/app/sitemap.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sitemap)\n/* harmony export */ });\nfunction sitemap() {\n    return [\n        {\n            url: 'https://twinblackbirds.com',\n            lastModified: new Date(),\n            changeFrequency: 'yearly',\n            priority: 1,\n            images: [\n                'https://twinblackbirds.com/pfp.jpg'\n            ]\n        },\n        {\n            url: 'https://twinblackbirds.com/projects',\n            lastModified: new Date(),\n            changeFrequency: 'weekly',\n            priority: 0.8,\n            images: [\n                'https://twinblackbirds.com/assets/library.png',\n                'https://twinblackbirds.com/blog_assets/object_tracker/tracker-cover.jpg'\n            ]\n        },\n        {\n            url: 'https://twinblackbirds.com/blog/object_tracker',\n            lastModified: new Date(),\n            changeFrequency: 'never',\n            priority: 0.5,\n            images: [\n                'https://twinblackbirds.com/blog_assets/object_tracker/ball.gif',\n                'https://twinblackbirds.com/blog_assets/object_tracker/tracked-ball.gif'\n            ]\n        }\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3NpdGVtYXAudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLFNBQVNBO0lBQ3BCLE9BQU87UUFDSDtZQUNJQyxLQUFLO1lBQ0xDLGNBQWMsSUFBSUM7WUFDbEJDLGlCQUFpQjtZQUNqQkMsVUFBVTtZQUNWQyxRQUFRO2dCQUFDO2FBQXFDO1FBQ2xEO1FBQ0E7WUFDSUwsS0FBSztZQUNMQyxjQUFjLElBQUlDO1lBQ2xCQyxpQkFBaUI7WUFDakJDLFVBQVU7WUFDVkMsUUFBUTtnQkFBQztnQkFBaUQ7YUFBMEU7UUFDeEk7UUFDQTtZQUNJTCxLQUFLO1lBQ0xDLGNBQWMsSUFBSUM7WUFDbEJDLGlCQUFpQjtZQUNqQkMsVUFBVTtZQUNWQyxRQUFRO2dCQUFDO2dCQUFrRTthQUF5RTtRQUN4SjtLQUNIO0FBQ0wiLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvQ0xpb25Qcm9qZWN0cy9Qb3J0Zm9saW8vbmV4dGpzLXdlYnNpdGUvc3JjL2FwcC9zaXRlbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YWRhdGFSb3V0ZSB9IGZyb20gJ25leHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpdGVtYXAoKTogTWV0YWRhdGFSb3V0ZS5TaXRlbWFwIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3R3aW5ibGFja2JpcmRzLmNvbScsXG4gICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBjaGFuZ2VGcmVxdWVuY3k6ICd5ZWFybHknLFxuICAgICAgICAgICAgcHJpb3JpdHk6IDEsXG4gICAgICAgICAgICBpbWFnZXM6IFsnaHR0cHM6Ly90d2luYmxhY2tiaXJkcy5jb20vcGZwLmpwZyddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdHdpbmJsYWNrYmlyZHMuY29tL3Byb2plY3RzJyxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGNoYW5nZUZyZXF1ZW5jeTogJ3dlZWtseScsXG4gICAgICAgICAgICBwcmlvcml0eTogMC44LFxuICAgICAgICAgICAgaW1hZ2VzOiBbJ2h0dHBzOi8vdHdpbmJsYWNrYmlyZHMuY29tL2Fzc2V0cy9saWJyYXJ5LnBuZycsICdodHRwczovL3R3aW5ibGFja2JpcmRzLmNvbS9ibG9nX2Fzc2V0cy9vYmplY3RfdHJhY2tlci90cmFja2VyLWNvdmVyLmpwZyddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3R3aW5ibGFja2JpcmRzLmNvbS9ibG9nL29iamVjdF90cmFja2VyJyxcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGNoYW5nZUZyZXF1ZW5jeTogJ25ldmVyJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAwLjUsXG4gICAgICAgICAgICBpbWFnZXM6IFsnaHR0cHM6Ly90d2luYmxhY2tiaXJkcy5jb20vYmxvZ19hc3NldHMvb2JqZWN0X3RyYWNrZXIvYmFsbC5naWYnLCAnaHR0cHM6Ly90d2luYmxhY2tiaXJkcy5jb20vYmxvZ19hc3NldHMvb2JqZWN0X3RyYWNrZXIvdHJhY2tlZC1iYWxsLmdpZiddLFxuICAgICAgICB9LFxuICAgIF1cbn0iXSwibmFtZXMiOlsic2l0ZW1hcCIsInVybCIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJjaGFuZ2VGcmVxdWVuY3kiLCJwcmlvcml0eSIsImltYWdlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/sitemap.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fsitemap.xml%2Froute&page=%2Fsitemap.xml%2Froute&appPaths=&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmichael%2FCLionProjects%2FPortfolio%2Fnextjs-website&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();