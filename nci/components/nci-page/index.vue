<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, h } from "@nuxtjs/composition-api";

import { Page, Sections, Section } from "@/nci/app/interfaces";

/** NCI-PAGE */
/**
 * Setup the Index page of the application
 * @function Index
 * @param {string} name Name of the component.
 * @param {function} setup Setup data and methods and return to component.
 */
export default defineComponent({
  name: "nci-page",
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const page = (page: Page) => {
      return h("main", { class: page.styles }, [sections(page.sections)]);
    };
    const sections = (sections: Sections) => {
      let sectionsArray = [];
      for (const key in sections) {
        sectionsArray.push(section(sections[key]));
      }
      return sectionsArray;
    };
    const section = (section: Section) => {
      return h("nci-section", {
        props: { ...section },
      });
    };
    return () => page(props.page as Page);
  },
});
</script>
