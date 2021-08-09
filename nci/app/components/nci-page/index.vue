<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, h } from "@nuxtjs/composition-api";

import buildSections from "@/nci/app/factories/sections";

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
    nav: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    /** Render navigation */
    const navigation = h("nci-nav", {
      props: props.nav,
    });
    /** Render page sections */
    const sections = buildSections(props.page.sections);
    return () => h("div", { class: "page" }, [navigation, sections]);
  },
});
</script>
