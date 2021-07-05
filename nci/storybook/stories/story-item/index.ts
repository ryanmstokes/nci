import { StoryItem } from '@/nci/storybook/interfaces/interfaces-storybook';
/** storyItem */
/**
 * Template setup function
 * @function storyItem
 * @param {string} title Title of the main sidebar menu element.
 * @param {string} Img The path to the image reseource.
 */
export const storyItem = (title: string, component: object): StoryItem => {
  return {
    title: title,
    component: component
  }
};
