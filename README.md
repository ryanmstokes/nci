<p align="center">  
  <img src="./readme-assets/technology-logos.jpg" />
</p>

# Content
-  **[Introduction](#introduction)**

-  **[NuxtCI](#nuxtCI)**

- **[Getting started](#gettingstarted)**

-  **[Typescript
](#typescript)**

- **[VueX](vuex)**

- **[Theme](#Theme)**

- **[Storybook](#storybook)**

- **[Unit Testing](#testing)**

- **[End to End Testing](#Theme)**
- 
- [Production/Deployment](#deployment)

# Introduction
**Nuxt Component Interface(NuxtCI)** is a fully typed functional Universal SSR application and themeing system for building complex web applications. The aim of the application is to offer a structured and opinionated approach to generating web components with the least code/repition and with maximum scalability in mind. 

The project is an enterprise ready application built with **Yarn**, **Nuxt**, **Typescript**, **Vue3** **Composition API**, **VueX**, **Tailwind CSS**, **Storybook**, **Jest** and **Vue Test Utils**.

**The project is  deriived from several core philosophies:**

### Stop:
- Building components for each feature you develop and polluting them with logic and dependencies. 

- Writing stories for each feature you develop.

- Writing brittle unit tests for each feature you develop. 

- Writing messy SCSS that you know you will eventually not reuse in different contexts/applications. 

### Start :
- Concentrating on your data structure

- Building features which are a breeze to subsequently modify

- Creating a truly reusable dynamic structure

- Creating a system that is easy to document and test

- Create a system that is easy to connect to a modern CMS. 

- Gain full control over your content with minimum technical overhead.

# NuxtCI 

- Considers any feature, no matter how complex, a simple group of core components. It has no awareness of its context or businiess logic. Its sole responsability is to generate groups of core components in any defined order and to send information back to the system if an event occurs. 

- It follows a pure reactive approach action>mutation>rerender.

- Automatically generates unit tests with Vue Test-Utils/Jest for each feature that you add to the application.

- Automatically generates an interactive Storyboook styleguide. Every time you add a new feature to your app, it will be catalogued, along with documentation in the Storybook styleguide. Stories include controls (or knobs) to allow designers to change properties of the corresponding components interactively.

- Automatically generates unit tests for all Storybook stories.

- Includes a theming system which uses utility classes from Tailwind CSS and an extendable system to map component properties to defined collections of Tailwind classes. 

# Getting started:

In order to install the application you must have Node installed on your system:
If you dont go to: https://nodejs.org/en/download/

<br/><br/>
<img src="./readme-assets/yarn-logo.jpg" />

The Project is built and packaged with Yarn. 

```
$ npm install --global yarn
// https://classic.yarnpkg.com/en/docs/
```

Now that you have Yarn installed you can install the application and its dependencies:

```
$ yarn install
```

Once the application has been successfully installed you can launch it:

```
$ yarn dev
```

After compilation you will be notified of the port on which the application is served. Hot reload included.

Usually localhost:3000 (*if the port is not already in use).

<br/>
<br/>
<img src="./readme-assets/nuxt-logo.jpg" />

## Nuxt
The Universal SSR application is built with Nuxt 2.15 which has Typescript support built in - https://typescript.nuxtjs.org/guide/introduction). For in-depth guide to Nuxt visit: [Nuxt.js docs](https://nuxtjs.org).

Open the project in your chosen editor and you will see a common directory structure for a Nuxt application with components, pages, store etc along with several custom directories used by NuxtCI:

- **/components**
    Includes core NuxtCI components (Image, Title, Button etc). You may define further components in this directory just like you would in a normal Nuxt project. 

- **/config**
    This diretory includes the Data of the application (Pages, config etc) as well as a set of functions to help process/set up data for the application.

- **/app**
    

- **/typescript**
    /interfaces
    Common interfaces for system objects
    /storybook-interfaces
    Interfaces used soly by Storybook functions

- **/storybook**
    A set of functions which are used to build and generate Stories. 

- **Testing**


To configure Nuxt edit the /nuxt.config.js file.


<br/><br/><br/>
<img src="./readme-assets/vue3-logo.jpg" />

## Production

```bash
# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


## Composition API
Nuxt 2 does not yet have built in support for vue 3 or the composition API, but the application takes advantage of the new features offered by Vue 3, by importing the nuxtjs composition-api package and using a slightly differennt syntax for some declarations.

Things to note when using the Composition API with nuxt:

- In order to access the store you must 

https://yarnpkg.com/package/@nuxtjs/composition-api
<br/><br/><br/>
<img src="./readme-assets/typescript-logo.jpg" />

## Typescript
Although Typescript is supported through the nuxt-typescript package further configuration was needed for different issues.

- In order to be able to use @ or ~ in paths in Typescript files:

```
yarn add --dev tsconfig-paths
```
Then adding the followign to tsconfig.json:
```
comopilerOptions: {
...
"paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
]
...
}
```
- Adding a vue-shims.d.ts file to the root directory so that the Vue is typed:

```
/** vue-shims.d.ts */
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

- Adding a testRegex statement to **package.json** so that Typescript can recognise Jest test files with **.ts** extensions. (***note the "__test__" part**). 

```
"jest": {
    /** ... */
    "testRegex": "(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
}
```

- and adding required types to your ts.config.js.

```
compilerOptions:{
  /** ... */
 "types": [
      "@nuxt/types",
      "@types/node",
      "@types/jest"
      "@types/tailwindcss"
    ]
}
```

- In order for Vuex to be typed correctly the project uses the **nuxt-typed-vuex** pacakage which provides typing for vuex store, getters, setter, actions etc.

Common Interfaces and types can be found in the **/typescript/interfaces.ts** file.

When runnig yarn dev or build Typescript will check for type errors.

for more info check:
https://typed-vuex.roe.dev/getting-started-nuxt

<br/><br/>
<img src="./readme-assets/vuex-logo.jpg" />

## VUEX
The applications state is managed with Nuxt's integrated VueX package and the **nuxt-typed-vuex package, which offers a strongly typed accessor for reading and communicating with the Vuex store.

Nuxt Typed Vuex Store $accessor:

```
/** Create reference to typed vuex accessor */
const useAccessor = wrapProperty("$accessor", false);
const typedStore = useAccessor();
const yourVar = typedStore.module.yourProperty;
```
or another approach:

```
const { $accessor } = useContext()
const yourVar = $accessor.module.yourProperty;
```

and to access a variable in the store and use it in your component for example:

```
let yourString: ComputedRef<string> = computed(
    (): string => typedStore.youModule.yourString
);
```

<br/><br/>
<img src="./readme-assets/storybook-logo.jpg" />

## Storybook JS Styleguide
Storybook Js is a UI component explorer for front end developers. It runs alongside the application, with stories defined for UI components.

https://storybook.js.org/docs/vue/get-started/introduction

and more specifically the project uses nuxt-storybook.

https://storybook.nuxtjs.org/

Tests are written in Typescript.

Run the following command to launch the storybook server and view the applications components design, variations and actions in isolation:

```
yarn nuxt storybook
```
<br/>
<img src="./readme-assets/storybook.png" />

Shared Typescript interfaces for Stroybook can be found in the **/typescript/interfaces-storybook.ts** file.

<br/><br/>
<img src="./readme-assets/jest-logo.jpg" />

## Testing

Tests use the Jest and vue-test-utils frameworks. 

https://github.com/vuejs/vue-jest

https://vue-test-utils.vuejs.org/

Test files are located in the corresponding components directory with a "/__test__" directory. 

Tests are written in Typescript. Common functions used for consntructing stories can be found within **/helpers/storybook.ts**

```
yarn test
```

To configure Jest edit the /jest.config.js file.

On configuration of importance was the need to add the following for the nuxtjs/compoition-api to be made available to jest tests:

```
moduleNameMapper: {
  // ...
  '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js'
}
```

<br/><br/>
<img src="./readme-assets/theme-logo.jpg" />

## Theme System

Components in the applicationn are styled using the TailwindCSS, a utility-first CSS framework which uses Utility classes to help you work within the constraints of the configured design system instead of littering your stylesheets with arbitrary values.

The application uses the @nuxtjs/tailwindcss package to integrate Tailwind with Nuxt:

For more info check:

https://tailwindcss.nuxtjs.org/

https://tailwindcss.com/docs

In order to gain consistency across the app and storybook a narrower set of component properties have been defined and these are mapped to Tailwind classes which are injected into the component definition Class definition object. (*See more details inn the next section.)

*tailwindcss-fluid - for fluid text
*fluid spacing - tailwind.config - generates fluid class for margin and padding 
*tailwindcss-children !!!! write description of theming here
## Application structure

In order to innitialise the store you must pass a appConfig object to the config initApp action.

```
/** /pages/index/vue
typedStore.config.initApp(appConfig);
```

This file object contains 2 properties:

1: pages
An object representing the content of the application. 

```

...object code

...explanation

```
2: Theme
An object representing the style map rules of the application.

...object code

...explanation

...themes
