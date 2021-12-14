const error = {
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

export default error
