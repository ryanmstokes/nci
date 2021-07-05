<p align="center">  
  <img src="./readme-assets/technology-logos.jpg" />
</p>



# Content

-  **[NuxtCI](#nuxtCI)**


- **[Getting started](#gettingstarted)**


-  **[Typescript](#typescript)**


- **[VueX](vuex)**


- **[Theme](#Theme)**


- **[Storybook](#storybook)**


- **[Unit Testing](#testing)**


- **[End to End Testing](#Theme)**

  

- **[Production/Deployment](#deployment)**


# NuxtCI

**Nuxt Component Interface(NCI)** is a fully typed functional Universal SSR application and theme engine for building complex web applications. The aim of the application is to offer a structured and opinionated approach to generating web components, tests and a styleguide with the least code/repition and with maximum scalability and future proofing in mind. 


The project is an enterprise ready application built with **Yarn**, **Nuxt**, **Typescript**, **Vue3** **Composition API**, **VueX**, **Tailwind CSS**, **Storybook**, **Jest** and **Vue Test Utils**.


- Automatically generates unit tests with Vue Test-Utils/Jest for each feature/(*section) that you add to the application.


- Automatically generates an interactive Storyboook styleguide.


- Automatically generates unit tests for all Storybook stories.


- Includes a theme engine which uses an extendable template system for mapping utility classes from Tailwind CSS to component properties.


# Getting started:

In order to install the application you must have Node installed on your system:
If you dont go to: https://nodejs.org/en/download/

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

After compilation you will be notified of the port on which the application is served (Hot reload included). After taking a look at the application open a new terminal and in the same diretcory run:

```
$ yarn nuxt storybook
```

After compilation you will be notified of the port on which the styleguiude is served (Hot reload included). Take a brief look at the styleguide which is generated for the demo application before we dive deeper into how to create an application using NCI.

And now that both the application and styleguide are running lets check to see that the application passes all tests:

```
$ yarn test
```

If everything is good you should see all of the sutes and tests for the application pass.

Ok let's dive in to how the application is structured and how to define the data of an application and its components.

<img src="./readme-assets/nuxt-logo.jpg" />


## Nuxt

The Universal SSR application is built with Nuxt 2.15 which has [Typescript support]("https://typescript.nuxtjs.org/guide/introduction") built in (*See [Typescript]() below). For in-depth guide to Nuxt visit: [Nuxt.js docs](https://nuxtjs.org). Nuxt 2 does not yet have built in support for vue 3 and the composition API, but the application takes advantage of the new features offered by Vue 3, by using the **@nuxtjs/composition-api** package along with several other typed packages. ( [see   details](https://composition-api.nuxtjs.org/))


Open the project in your favourite editor and you will see a common directory structure for a Nuxt application with components, pages, store etc along with the main **/NCI** project directory:


- **/app**
  This diretory includes the Data of the application (Pages, config etc) as well as a set of functions to help process and set up data for the application.

     **/interfaces**
     Common interfaces for system objects

  4

- **/components**
  Includes core NCI components (Page, Section, Image, Title, Anchor etc). You may define further custom components for your project in the nuxt root components directory just like you would in a normal Nuxt project (*[more details]() regarding integrating custom compoonoents with NCI). 


- **/data**

  Content for the application. This is the main project data object used by the application to construct its content.


- **/storybook**
  A set of functions which are used to build and generate stories. 

     **/interfaces**
     Interfaces used by Storybook functions

- **/Theme**

  Contains different theme files for the project. 

Along with this you will find a **nci.config.ts** file in the root directory of the project:

```
/**
 * NUXT COMPONENT INTERFACE
 * Config File
*/
export default {
  title: "Nuxt Component Interface",
  author: "Ryan Stokes",
  data: "/nci/app/demo.json",
  theme: "/nci/theme/demo.jsom"
}
```

which defines meta data about the project aswell as the data source and theme to use when mounting the application.

# Data

NCI generates an application from one data source object. By default when installing the application it will use the static demo.ts data file found in the /nci/data/ directory. For simplicity's sake lets create the simplest application definition and explain how the view is generated. 

Go to **/nci/data/demo.ts** and replace the contents with the following:

```
{
  name: "NCI Demo",
  pages: {
    /** Page */
    home: {
    	title: "home",
    	path: "/",
      styles: "page",
      /** Sections */
      sections: {
        /** Section */
        welcome: {
          type: "section",
          styles: "section",
          layout: "centered",
          /** Components */
          components: {
            /** Component */
            title: {
              type: "title",
              value: "Hello World",
              tag: "h1",
              size: "xl3",
              color: "primary",
              styles: "title",
            },
          },
        },
      },
    },
  },
}
```

Click save and view the application on your local port again. You will see a single web page with a single section called "welcome" that contains a title component ("Hello World"). 

If you take a look into the html of the web page you will see that the config generated the following html:

```
<main class="page">
    <section class="m-auto flex flex-col justify-center items-center text-center sm:w-5/6 md:w-2/3 lg:w-1/2 section">
    		<h1 class="text-black-500 text-xl3 my-2.5 title">Page 1</h1>   	   </section>
</main>
```

Looking at the title component object closer you will see that it has a number of different properties:

```
title: {   type: "title", /** The Vue component */   value: "Hello World", /** The Value of the title */   tag: "h1", /** The HTML tag to be used for the title <h1/>. */   size: "xl3", /** Value mapped to Tailwind Classes */   color: "primary", /** Value mapped to Tailwind Classes */   styles: "title", /** Additional Classes (e.g. non Tailwind..) */},
```

- **"type"** property tells NCI which Nuxt component the object definiition is for. There are a number of base components such as "group", "image", "anchor" etc which you can use to compose complex sections and pages ( For a full list of components see the [Components Api](#Components) section.)

- **"value"** property is the string we are passing to the title component.

- **"tag"** property is the actual html tag used by the component to render the title. This could be a <title> or <h5> tag for example or even a <p>.

- **"size"** a value which is mapped to a fluid font size (in this case **"text-xl3"**) within the theme system. We will go into the theme system [more]() shortly but for now you can take a look quickly at **/nci/theme/default.ts** and see that there is a **"font:"** config defintiion object where font sizes for the theme are configured.

- **"color"** a value which is mapped to a theme property (in this case **"text-black-500"**).

Now that you understand the definition open up the storybook styleguide again in your browser (or run **yarn nuxt storybook**) .

Notice how the the styleguide contains the core components but now only has one section which also now says **"Hello World"** and looks just like how you styled it within the application. Every time you add a new section definition to your app, it will be catalogued in the page sidebar item, along with documentation and controls (or knobs) to allow designers to change properties of the corresponding components interactively.

- a unit test for the title component

- A Storybook story catologuing the component. 

Components 

You will see in the above objet definition there is a Page component definition called "Home". 



<img src="./readme-assets/vue3-logo.jpg" />


## Production


```bash
# build for production and launch server$ yarn build$ yarn start# generate static project$ yarn generate
```


## Composition API

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
comopilerOptions: {..."paths": {      "~/*": [        "./*"      ],      "@/*": [        "./*"]...}
```

- Adding a vue-shims.d.ts file to the root directory so that the Vue is typed:


```
/** vue-shims.d.ts */declare module "*.vue" {  import Vue from 'vue'  export default Vue}
```


- Adding a testRegex statement to **package.json** so that Typescript can recognise Jest test files with **.ts** extensions. (***note the "__test__" part**). 


```
"jest": {    /** ... */    "testRegex": "(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"}
```


- and adding required types to your ts.config.js.


```
compilerOptions:{  /** ... */ "types": [      "@nuxt/types",      "@types/node",      "@types/jest"      "@types/tailwindcss"    ]}
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
/** Create reference to typed vuex accessor */const useAccessor = wrapProperty("$accessor", false);const typedStore = useAccessor();const yourVar = typedStore.module.yourProperty;
```

or another approach:


```
const { $accessor } = useContext()const yourVar = $accessor.module.yourProperty;
```


and to access a variable in the store and use it in your component for example:


```
let yourString: ComputedRef<string> = computed(    (): string => typedStore.youModule.yourString);
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
moduleNameMapper: {  // ...  '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js'}
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
/** /pages/index/vuetypedStore.config.initApp(appConfig);
```


This file object contains 2 properties:


1: pages
An object representing the content of the application. 


```
...object code...explanation
```

2: Theme
An object representing the style map rules of the application.


...object code


...explanation


...themes
