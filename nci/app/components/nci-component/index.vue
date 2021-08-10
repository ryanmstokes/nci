<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType, h } from "@nuxtjs/composition-api";

/** NCI-COMPONENT COMPONENT */
/**
 * Setup the component
 * @function nciComponent
 * @param {object} component Definition of a component
 */
const nciComponent = defineComponent({
  name: "nci-component",
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h("nci-" + props.component.type, {
        props: { ...props.component },
      });
  },
});

export default nciComponent;
</script>
