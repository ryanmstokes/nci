import { Variant } from '@/nci/storybook/interfaces/interfaces-storybook';

import { selfClosingTemplate, template } from '@/nci/storybook'

/** variantList */
/**
 * Contruct list of component variations HTML template string. This is a temporary solution and will be replaced with storybook decorators and docs
 * @function componentVariationsTemplate
 * @param {array} list Title of the main sidebar menu element.
 * @param {string} component A string defining the component to be used in the template.
 * @param {string} decorator A string of CSS classes you wish to add to the component.
 * @param {string} content Any string you wish to pass to the component.
 *
 * @return {string} HTML strinig with list of componnent variations to be used as template.
 */
export const variantList = (list: Variant, component: string, decorator?: string | undefined, content?: string | undefined) => {
  let HTMLstring: string = `<div>`;
  Object.keys(list).forEach((key) => {
    let componentHTMLstring: string = '';
    if (content) {
      componentHTMLstring = selfClosingTemplate(component, `args.variants['` + key + `']`, decorator);
    } else {
      componentHTMLstring = template(component, `args.variants['` + key + `']`, decorator, content);
    }
    HTMLstring += `<div class="mb-4">`;
    HTMLstring += componentHTMLstring;
    HTMLstring += `<label class="block">` + key + `</label>`;
    HTMLstring += `</div>`;
  });
  HTMLstring += '</div>';
  return HTMLstring
}


