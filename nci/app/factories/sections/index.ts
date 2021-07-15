import { defineComponent, h } from "@nuxtjs/composition-api";

import { Page, Sections, Section } from "@/nci/app/interfaces";

const buildSections = (sections: Sections) => {
  let sectionsArray = [];
  for (const key in sections) {
    sectionsArray.push(section(sections[key]));
  }
  return h("main", {}, sectionsArray);
};

const section = (section: Section) => {
  return h("nci-section", {
    props: { ...section },
  });
}

export default buildSections
