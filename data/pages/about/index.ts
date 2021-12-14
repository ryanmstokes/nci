const about = {
  styles: "bg-green",
  sections: {
    welcome: {
      type: 'section',
      styles: "",
      layout: "centered",
      background: "primary",
      components: {
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
          size: "lg",
          color: "primary",
          styles: "description mx-auto w-1/2",
        },
        banner: {
          type: "image",
          title: "Landing Zone",
          description: "My awesome image description",
          path: "logo.svg",
          size: "md",
          styles: "w-auto mx-auto bg-gray-200"
        },
        button: {
          type: "anchor",
          href: "/home",
          title: "Contact Us",
          size: "md",
          color: "primary",
          styles: "button"
        }
      }
    }
  }
}

export default about
