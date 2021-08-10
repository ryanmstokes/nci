import { Image, Title, TitleComponent, ButtonCompiled } from '@/nci/app/interfaces';

/**
 * StoryItem Interface
 *
 * @interface StoryItem
 * @member {string} title Title of the Story Item which appears in the sidebar menu
 * @member {string} Component NAme of the component (*Can be a diretory path for grouping)
 */
interface StoryItem {
  title: string;
  component: object;
}

/**
 * Variant Interface
 *
 * @interface Variant
 * @member {string} title Title of the style variant
 */
interface Variant {
  [name: string]: string
}

/**
 * Variant Interface
 *
 * @interface VariantList
 * @member {string} name name of the style category
 * @member {string} name name of the style list
 */
interface VariantList {
  [name: string]: {
    [name: string]: {
      [name: string]: string
    }
  }
}

/**
 * ImageList Interface
 *
 * @interface ImageList
 * @member {string} name An object defning a list of images
 */
interface ImageList {
  [name: string]: Image
}

/**
 * TitleList Interface
 *
 * @interface TitleList
 * @member {string} name An object defning a list of titles
 */
interface TitleList {
  [name: string]: TitleComponent
}

/**
 * ButtonList Interface
 *
 * @interface ButtonList
 * @member {string} name An object defining a list of buttons
 */
interface ButtonList {
  [name: string]: ButtonCompiled
}

/**
 * propTypes Type
 *
 * @interface propType
 * Joins all possible propTypes within components
 */
type propTypes = string | number | object | []


/**
 * generatedPropType Interface
 *
 * @interface generatedPropType
 * @member {string} name An object defining a component prop type.
 */
interface generatedPropType {
  [name: string]: {
    [type: string]: propTypes
  }
}

export { StoryItem, Variant, VariantList, ImageList, TitleList, ButtonList, propTypes, generatedPropType }



