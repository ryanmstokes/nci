<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType, h } from "@nuxtjs/composition-api";

/** Import typescript types and interfaces */
import { Components, Group, CoreComponentType } from "@/nci/app/interfaces";

/** NCI-SECTION COMPONENT */
/**
 * Setup the component
 * @function nciSection
 * @param {string} name Name of the component.
 * @param {object} props Props that are passed to the component.
 * @param {function} setup Setup data and methods and return to component.
 */
const nciSection = defineComponent({
  name: "nci-section",
  inheritAttrs: false,
  props: {
    styles: {
      type: String as PropType<string>,
      required: false,
    },
    components: {
      type: Object as PropType<object>,
      required: true,
    },
  },
  setup(props) {
    const components = (components: Components) => {
      let componentArray = [];
      for (const key in components) {
        key !== "group"
          ? componentArray.push(
              h("nci-component", {
                props: {
                  component: components[key] as CoreComponentType,
                },
              })
            )
          : componentArray.push(
              h("nci-group", { props: { group: components[key] as Group } })
            );
      }
      return h("section", { class: props.styles }, [componentArray]);
    };
    return () => components(props.components as Components);
  },
});

export default nciSection;
</script>
