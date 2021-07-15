/**
 * THEME CONNFIGURATION
 *A file which provides theme configuration and maps component properties to Tailwind utility classes.
 */
import defaultTheme from 'tailwindcss/defaultTheme'

const Theme = {
  config: {
    font: {
      family: {
        primary: "Helvetica"
      },
      sizes: ["xs", "sm", "md", "lg", "xl", "xl2", "xl3", "xl4"],
      start: 0.7,
      spacing: 0.2,
      base: 16,
      minWidth: 360,
      maxWidth: 1280
    },
    spacing: {
      sizes: [...Array(25).keys()],
      start: 0.2,
      spacing: 0.2,
      base: 16,
      minWidth: 360,
      maxWidth: 1280
    },
    colors: {
      primary: "#e4e4e4",
      secondary: "blue",
      alert: defaultTheme.colors?.red
    }
  },
  section: {
    layout: {
      container: "m-auto flex flex-col justify-center items-center max-w-screen-lg",
      centered: "m-auto flex flex-col justify-center items-center text-center sm:w-5/6 md:w-2/3 lg:w-1/2",
      left: "m-auto flex flex-col justify-center items-center text-center sm:w-4/6 md:grid md:grid-rows-1 md:grid-flow-col md:gap-4 md:text-left md:items-left md:justify-left sm:w-5/6 md:w-2/3 lg:w-1/2"
    }
  },
  group: {
    layout: {
      left: "flex flex-col justify-center items-center text-center md:justify-left md:items-center md:text-left md:ml-7 md:pr-4"
    }
  },
  image: {
    size: {
      xs: "w-1/6 my-1",
      sm: "w-2/6 my-2",
      md: "w-1/2 my-2",
      lg: "w-4/6 my-2",
      xl: "w-5/6 my-2",
      full: "w-full my-2"
    }
  },
  title: {
    size: {
      xs: "text-xs",
      sm: "text-sm my-0.5",
      md: "text-md my-0.8",
      lg: "text-lg my-1",
      xl: "text-xl my-1.5",
      xl2: "text-xl2 my-2",
      xl3: "text-xl3 my-2.5",
      xl4: "text-xl4 my-3",
    },
    color: {
      primary: "text-black-500",
      secondary: "text-black-300",
      tertiary: "text-black-100"
    }
  },
  anchor: {
    size: {
      xs: "text-xs py-2 px-7 my-4",
      sm: "text-sm py-3 px-8 my-5",
      md: "text-md py-4 px-9 my-6",
      lg: "text-lg py-5 px-10 my-7",
      xl: "text-xl py-6 px-11 my-8",
      xl2: "text-xl2 py-7 px-12 my-9",
      xl3: "text-xl3 py-8 px-13 my-10",
      xl4: "text-xl4 py-9 px-14 my-11",
    },
    color: {
      primary: "bg-transparent uppercase rounded border border-primary text-primary hover:bg-gray-300 hover:border-transparent hover:text-white",
      secondary: "bg-transparent uppercase rounded text-green-700 border border-green-500 hover:bg-green-500 hover:border-transparent hover:text-white",
      tertiary: "bg-transparent uppercase rounded text-red-700 border border-red-500 hover:bg-red-500 hover:border-transparent hover:text-white",
    },
  }
}

export default Theme
