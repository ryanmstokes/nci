/** CONFIGFILE
 * The main configuration file. This defines the content of the application.
 */
const ConfigFile = {
  name: "LandingZone",
  pages: {
    /** Page */
    home: {
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
              value: "Page 1",
              tag: "h1",
              size: "xl3",
              color: "primary",
              styles: "title",
            },
            description: {
              type: "title",
              value: "This is the first section of the first page within your",
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
        }
      }
    },
    about: {
      styles: "bg-green",
      sections: {
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
                  href: "https://www.nuxtjs.org",
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
    },
    error: {
      styles: "bg-red",
      sections: {
        message: {
          type: 'section',
          styles: "blah",
          layout: "centered",
          background: "primary",
          components: {
            title: {
              type: "title",
              value: "Page not found",
              tag: "h1",
              size: "xl3",
              color: "primary",
              styles: "title",
            }
          }
        }
      }
    }
  }
}
export default ConfigFile;
