<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, h } from "@nuxtjs/composition-api";

import buildSections from "@/nci/app/factories/sections";

import nav from "@/nci/app/factories/nav";

import { useRoute } from "@nuxtjs/composition-api";

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
  methods: {},
  setup(props) {
    const getCurrentRoute = useRoute().value.params.index;

    return () =>
      h("div", { class: "page" }, [
        nav(props.nav.routes, getCurrentRoute, props.nav.design.styles),
        buildSections(props.page.sections),
      ]);
  },
});
</script>
