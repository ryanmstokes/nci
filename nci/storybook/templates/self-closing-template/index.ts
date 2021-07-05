/** componentSelfClosing */
/**
 * Construct a HTML string of a self closing component/tag.
 * @function selfClosingTemplate
 * @param {string} component Title of the main sidebar menu element.
 * @param {string} decorations A string defining any addtional decorative classes you wish to add to the componnent (e.g. a border or bg color).
 * @returns {string} Returns a template string to pass to the story.
 */
export const selfClosingTemplate = (component: string, args: string, decorator: string | undefined) => {
  return `<` + component + ` v-bind="` + args + `" class="` + `${decorator ? decorator : ''}` + `"/>`;
}
