<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, h, PropType } from "@nuxtjs/composition-api";

/** LZ-BUTTON COMPONENT */
/**
 * @function nciAnchor
 * @param {string} name Name of the component.
 * @param {object} props Props that are passed to the component.
 * @param {function} setup Setup data and methods and return to component.
 * @return {string} Returns an HTML anchor tag with class and attributes.
 */

const nciAnchor = defineComponent({
  name: "nci-anchor",
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String as PropType<string>,
      required: true,
    },
    styles: {
      type: String as PropType<string>,
      required: false,
    },
    size: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup: (props) => {
    let componentType = "nuxt-link";
    let attrs = {
      to: props.href,
    } as { [name: string]: string };
    let pointer = "to";

    if (props.href.includes("http")) {
      componentType = "a";
      attrs = {
        href: props.href,
      };
      pointer = "href";
    }

    return () =>
      h(
        componentType,
        {
          attrs: {
            [pointer]: props.href,
            class: props.styles,
          },
        },
        props.title
      );
  },
});

export default nciAnchor;
</script>

