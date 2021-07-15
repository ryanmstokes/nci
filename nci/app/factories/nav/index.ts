import {
  h,
} from "@nuxtjs/composition-api";

import { Routes } from '@/nci/app/interfaces'

const nav = (routes: Routes, styles: string) => {
  return h("nci-nav", {
    props: {
      routes: routes,
      styles: "nav",
      childStyles: styles,
    },
  });
};

export default nav
