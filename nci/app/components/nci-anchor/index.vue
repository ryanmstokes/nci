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
    selected: {
      type: String as PropType<string>,
      required: false,
      default: "",
    },
  },
  setup: (props) => {
    let componentType: string = "";
    let pointer: string = "";
    let styles: string = "";
    props.href.includes("http")
      ? ((componentType = "a"), (pointer = "href"))
      : ((componentType = "nuxt-link"), (pointer = "to"));

    props.selected
      ? (styles = props.styles! + props.selected)
      : (styles = props.styles!);
    return () =>
      h(
        componentType,
        {
          attrs: {
            [pointer]: props.href,
            class: styles,
          },
          on: {
            mouseOver: () => console.log("over"),
          },
        },
        props.title
      );
  },
});

export default nciAnchor;
</script>

