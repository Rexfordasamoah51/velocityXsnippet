"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithVxScrollVerticial = exports.wrapWithVxDiscList = exports.wrapWithHstackScroll = exports.wrapWithHStack = exports.wrapWithVStackScroll = exports.wrapWithVStack = void 0;
const utils_1 = require("../utils");
const vStackSnippet = (widget) => {
    return `VStack(
    [
       ${widget},
    ],
)`;
};
const vStackScrollSnippet = (widget) => {
    return `VStack(
    [
       ${widget},
    ],
).scrollVertical()`;
};
const hStackSnippet = (widget) => {
    return `HStack(
    [
       ${widget},
    ],
   )`;
};
const hStackScrollSnippet = (widget) => {
    return `HStack(
    [
       ${widget},
    ],
).scrollVertical()`;
};
const vXDiscListSnippet = (widget) => {
    return `VxDiscList([
      ${widget},
    ])`;
};
const VxScrollVerticalSnippet = (widget) => {
    return `VxScrollVerticial(
      physics: AlwaysScrollableScrollPhysics(),
      child: <Widget>[
        ${widget},
      ].vStack(),
    )`;
};
const wrapWithVStack = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(vStackSnippet); });
exports.wrapWithVStack = wrapWithVStack;
const wrapWithVStackScroll = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(vStackScrollSnippet); });
exports.wrapWithVStackScroll = wrapWithVStackScroll;
const wrapWithHStack = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(hStackSnippet); });
exports.wrapWithHStack = wrapWithHStack;
const wrapWithHstackScroll = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(hStackScrollSnippet); });
exports.wrapWithHstackScroll = wrapWithHstackScroll;
const wrapWithVxDiscList = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(vXDiscListSnippet); });
exports.wrapWithVxDiscList = wrapWithVxDiscList;
const wrapWithVxScrollVerticial = () => __awaiter(void 0, void 0, void 0, function* () { return utils_1.wrapWith(VxScrollVerticalSnippet); });
exports.wrapWithVxScrollVerticial = wrapWithVxScrollVerticial;
//# sourceMappingURL=wrap-with.command.js.map