<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType, h } from "@nuxtjs/composition-api";

import { Route, ButtonCompiled } from "@/nci/app/interfaces/";

/** NCI-SECTION COMPONENT */
/**
 * Setup the component
 * @function nciNav
 * @param {string} name Name of the component.
 * @param {object} props Props that are passed to the component.
 * @param {function} setup Setup data and methods and return to component.
 */
const nciNav = defineComponent({
  name: "nci-nav",
  inheritAttrs: false,
  props: {
    styles: {
      type: String as PropType<string>,
      required: true,
    },
    childStyles: {
      type: String as PropType<string>,
      required: true,
    },
    routes: {
      type: Array as PropType<Array<Route>>,
      required: true,
    },
    currentRoute: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const createComponent = (component: ButtonCompiled) => {
      return h("nci-anchor", {
        props: { ...component },
      });
    };

    let active: string;

    let navComponentArray = [] as object[];
    props.routes.map((route: Route) => {
      route.path === "/" + props.currentRoute
        ? (active = "active")
        : (active = "");

      route.path !== "/:index"
        ? navComponentArray.push(
            createComponent({
              href: route.path,
              title: route.name,
              styles: props.childStyles,
              active: active,
            })
          )
        : null;
    });

    return () =>
      h(
        "nav",
        { class: props.styles },
        navComponentArray as any
      ); /** fix this */
  },
});

export default nciNav;
</script>
