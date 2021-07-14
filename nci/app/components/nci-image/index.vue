<script lang="ts">
/** Import Vue3 Composition API utilities */
import {
  defineComponent,
  PropType,
  computed,
  h,
} from "@nuxtjs/composition-api";

/** LZ-IMG COMPONENT */
/**
 * Setup the component
 * @function Img
 * @param {string} title Title of the component.
 * @param {string} path Path of the image resource for the <nci-image/> component.
 * @param {string} size Width of the <nci-image/> component.
 * @param {string} styles A string of CSS classes to add to the <nci-image/> component.
 * @param {string} title Meta title for the <nci-image/> component.
 * @param {string} description Meta description of the <nci-image/> component.
 * @param {function} setup Setup data and methods and construct the <img>/html tag and return it.
 */

const nciImage = defineComponent({
  name: "nci-image",
  props: {
    path: {
      type: String as PropType<string>,
      required: true,
    },
    styles: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    /** Require the SVG  */
    const imageSrc = computed((): string => require("~/assets/" + props.path));
    /** Concat Size with Styles */
    return () =>
      h("img", {
        attrs: { src: imageSrc.value, title: props.title },
        class: props.styles,
      });
  },
});

export default nciImage;
</script>

