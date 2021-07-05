<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType, h } from "@nuxtjs/composition-api";

import { Components, Group, Image, Title, Button } from "@/nci/app/interfaces";
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
    const createComponent = (component: Image | Title | Button) => {
      return h("nci-" + component.type, {
        props: { ...component },
      });
    };

    const createGroup = (group: Group) => {
      let groupComponents = [];
      for (const key in group.components) {
        groupComponents.push(
          createComponent(group.components[key] as Image | Title | Button)
        );
      }
      return h("div", { class: group.styles }, [groupComponents]);
    };

    const components = (components: Components) => {
      let componentArray = [];
      for (const key in components) {
        if (key !== "group") {
          componentArray.push(
            createComponent(components[key] as Image | Title | Button)
          );
        } else {
          componentArray.push(createGroup(components[key] as Group));
        }
      }
      return h("section", { class: props.styles }, [componentArray]);
    };
    return () => components(props.components as Components);
  },
});

export default nciSection;
</script>
