const home = {
  styles: "page",
  sections: {
    /** Section */
    welcome: {
      type: 'section',
      styles: "section",
      layout: "centered",
      background: "primary",
      /** Components */
      components: {
        /** Component */
        banner: {
          type: "image",
          title: "Landing Zone",
          description: "My awesome image description",
          path: "logo.svg",
          size: "full",
          styles: "bg-gray-200"
        },
        title: {
          type: "title",
          value: "Landing Zone",
          tag: "h1",
          size: "xl3",
          color: "primary",
          styles: "title",
        },
        description: {
          type: "title",
          value: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
          tag: "p",
          size: "sm",
          color: "primary",
          styles: "description sm:w-5/6",
        },
        button: {
          type: "anchor",
          href: "/about",
          title: "Contact Us",
          size: "sm",
          color: "primary",
          styles: "button"
        }
      }
    },
    /** Section */
    goodbye: {
      type: 'section',
      styles: "my-15",
      layout: "left",
      background: "primary",
      /** Components */
      components: {
        /** Component */
        banner: {
          type: "image",
          title: "Landing Zone",
          description: "My awesome image description",
          path: "logo.svg",
          size: "xl",
          styles: "bg-gray-200 h-full w-full ml-0"
        },
        group: {
          type: "group",
          styles: "hero md:py-10",
          layout: "left",
          components: {
            title: {
              type: "title",
              value: "Landing Zone",
              tag: "h1",
              size: "xl3",
              color: "primary",
              styles: "title md:self-start",
            },
            description: {
              type: "title",
              value: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem.",
              tag: "p",
              size: "sm",
              color: "primary",
              styles: "description",
            },
            button: {
              type: "anchor",
              href: "https://www.nuxt.org",
              title: "Contact Us",
              size: "sm",
              color: "primary",
              styles: "md:self-start"
            },
          }
        }
      }
    }
  }
}

export default home
