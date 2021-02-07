import { wrapWith } from "../utils";

const vStackSnippet = (widget: string) => {
   return `VStack(
    [
       ${widget},
    ],
)`;
};

const vStackScrollSnippet = (widget: string) => {
   return `VStack(
    [
       ${widget},
    ],
).scrollVertical()`;
};

const hStackSnippet = (widget: string) => {
   return `HStack(
    [
       ${widget},
    ],
   )`;
};

const hStackScrollSnippet = (widget: string) => {
   return `HStack(
    [
       ${widget},
    ],
).scrollVertical()`;
};

const vXDiscListSnippet = (widget: string) => {
   return `VxDiscList([
      ${widget},
    ])`;
};

const VxScrollVerticalSnippet = (widget: string) => {
   return `VxScrollVerticial(
      physics: AlwaysScrollableScrollPhysics(),
      child: <Widget>[
        ${widget},
      ].vStack(),
    )`;
};


export const wrapWithVStack = async () => wrapWith(vStackSnippet);
export const wrapWithVStackScroll = async () => wrapWith(vStackScrollSnippet);
export const wrapWithHStack = async () => wrapWith(hStackSnippet);
export const wrapWithHstackScroll = async () => wrapWith(hStackScrollSnippet);
export const wrapWithVxDiscList = async () => wrapWith(vXDiscListSnippet);
export const wrapWithVxScrollVerticial = async () => wrapWith(VxScrollVerticalSnippet);