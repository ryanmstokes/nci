
interface SimpleObject {
  [key: string]: string
}

/* COMPONENT INTERFACES */

/**
 * Default Image options Interface
 *
 * @interface DefaultImgOptions
 * @member {string} title Title of the Image
 * @member {string} Path Src of the Image
 */
interface DefaultImgOptions {
  title: string,
  description: string,
  path: string
}

/**
 * Image Interface
 *
 * @interface Image
 * @member {string} size The size (width) of the image
 * @member {string} styles CSS class string
 */
interface Image extends DefaultImgOptions {
  type: string,
  size: string,
  styles?: string
}

/**
 * Title Interface
 *
 * @interface Title
 * @member {string} type The type of component - e.g. "title"
 * @member {string} value The title string e.g. "My great website"
 * @member {string} tag The level of the header tag e.g h1, h2, h3 etc
 * @member {string} size The size (font) of the title
 * @member {string} styles CSS class string
 */
interface Title {
  type: string,
  value: string,
  tag: string,
  size: string,
  styles: string
}

/**
 * Title Component
 *
 * @interface TitleComponent
 * @member {string} title The title string
 * @member {string} level The level of the header tag e.g h1, h2, h3 etc
 * @member {string} size The size (font) of the title
 */
interface TitleComponent {
  value: string,
  tag: string,
  styles: string
}

/**
 * Button Interface
 * @intnerface Button
 * @member {string} type The type of component - e.g. "title"
 * @member {string} title Title of the button
 * @member {string} href Desired destination of the button
 * @member {string} size Size of the buttton e.g. "lg"
 * @member {string} color The color of the button e.g. "primary"
 * @member {string} styles CSS class string
 */

interface Button {
  type: string,
  href: string
  title: string,
  size: string,
  color: string,
  styles: string
}

/**
 * Button Interface
 * @interface ButtonCompiled
 * @member {string} title Title of the compiled button
 * @member {string} href Desired destination of the compiled button
 * @member {string} size Size of the compiled buttton
 * @member {string} styles CSS class string
 */

interface ButtonCompiled {
  href: string
  title: string,
  styles: string
}

/**
 * Group Interface
 * @interface Group
 * @member {string} styles CSS class string
 * @member {string} layout CSS Mapping
 * @member {string} components List of Components within the group
 */
interface Group {
  styles: string,
  layout: string,
  components: Components
}

interface Components {
  [name: string]: Title | Image | Button | Group
}

/**
 * Section Interface
 *
 * @interface Section
 * @member {string} styles CSS class string
 * @member {string} title The title object definition
 * @member {string} description The description object definition
 * @member {string} image An object defining the Image
 * @member {string} button An object defining the Button
 * @member {string} background A hex or rgba value
 */
interface Section {
  type: string,
  background: string,
  styles: string,
  layout: string,
  components: Components,
  [name: string]: string | {}
}

/**
 * Sections Interface
 *
 * @interface Sections
 * @member {string} section An object defning a list of page sections
 */
interface Sections {
  [name: string]: Section
}

/**
 * Page Interface
 *
 * @interface Page
 * @member {string} page An object defning of page
 */
interface Page {
  styles: string,
  sections: Sections
}

/**
 * Pages Interface
 *
 * @interface Pages
 * @member {string} pages An object defning a list of pages
 */
interface Pages {
  [name: string]: Page
}

/**
 * Theme Interface
 *
 * @interface Theme
 * @member {string} category e.g button
 * @member {string} attribute e.g. size
 * @member {string} property e.g "xs"
 */
interface Theme {
  [name: string]: {
    [name: string]: {
      [name: string]: string | number | string[] | number[] | { [name: string]: string }
    }
  }
}

/* VUEX INTERFACES */

/**
 * Main Store Interface
 *
 * @interface Store
 * @member {string} name Nane of the module
 * @member {string} logo A path to project logo resource
 */
interface Store {
  name: string,
}

/**
 * Config Store Interface
 *
 * @interface Config
 * @member {string} name Nane of the module
 * @member {string} pages An object defning a list of pages
 */
interface Config {
  name?: string,
  pages?: Pages,
  theme?: Theme
}

/* APP CONFIG */
/**
 * Application Config Interface
 *
 * @interface AppConfig
 * @member {string} config The Applications configuration file definition
 * @member {string} Theme The Applications theme file definition
 */
interface AppConfig {
  config?: Config,
  theme?: Theme
}

export {
  SimpleObject,
  DefaultImgOptions,
  Store,
  AppConfig,
  Config,
  Pages,
  Page,
  Group,
  Components,
  Image,
  Title,
  TitleComponent,
  Sections,
  Section,
  Button,
  ButtonCompiled,
  Theme
};
