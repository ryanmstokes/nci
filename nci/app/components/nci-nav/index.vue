<script lang="ts">
/** Import utilities from Vue3 Composition API */
import {
  defineComponent,
  PropType,
  h,
  computed,
} from "@nuxtjs/composition-api";

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
    image: {
      type: String as PropType<string>,
      required: false,
    },
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
    selected: {
      /** Rename this to selectedClass */
      type: String as PropType<string>,
      required: false,
    },
  },
  setup(props) {
    const imageSrc = computed((): string => require("~/assets/" + props.image));

    const createComponent = (component: ButtonCompiled) => {
      return h("nci-anchor", {
        props: { ...component },
      });
    };

    let active: string | undefined;

    let navComponentArray = [] as object[];
    props.routes.map((route: Route) => {
      route.path === "/" + props.currentRoute
        ? (active = props.selected!)
        : (active = undefined);

      route.path !== "/:index"
        ? navComponentArray.push(
            createComponent({
              href: route.path,
              title: route.name,
              styles: props.childStyles,
              selected: active,
            })
          )
        : null;
    });
    navComponentArray.push(h("img", { attrs: { src: imageSrc.value } }));

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
