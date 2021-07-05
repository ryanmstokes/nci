/** componentSelfClosing */
/**
 * Construct a HTML string of a self closing component/tag.
 * @function template
 * @param {string} component Title of the main sidebar menu element.
 * @param {string} decorations A string defining any addtional decorative classes you wish to add to the componnent (e.g. a border or bg color).
 * @returns {string} Returns a template string to pass to the story.
 */
export const template = (component: string, args: string, decorations: string | undefined, content?: string | undefined) => {
  return `<` + component + ` v-bind="` + args + `" class="` + decorations + `">` + content + `</` + component + `>`;
}
