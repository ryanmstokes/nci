<script lang="ts">
/** Import utilities from Vue3 Composition API */
import {
  defineComponent,
  h,
  PropType,
  computed,
} from "@nuxtjs/composition-api";

/** LZ-TITLE COMPONENT */
/**
 * Setup the component
 * @function nciTitle
 * @param {string} name Name of the component.
 * @param {object} props Props that are passedto the component.
 * @param {function} setup Setup data and methods and return to component.
 */

const nciTitle = defineComponent({
  name: "nci-title",
  props: {
    value: {
      type: String,
      required: true,
    },
    tag: {
      type: String as PropType<string>,
      required: true,
    },
    styles: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup: (props) => {
    return () =>
      h(
        props.tag,
        {
          class: props.styles,
        },
        props.value
      );
  },
});

export default nciTitle;
</script>

