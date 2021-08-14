<script lang="ts">
/** Import utilities from Vue3 Composition API */
import { defineComponent, PropType, h } from "@nuxtjs/composition-api";
/** Import typescript types and interfaces */
import { Group, CoreComponentType } from "@/nci/app/interfaces";

const nciGroup = defineComponent({
  name: "nci-group",
  props: {
    group: {
      type: Object as PropType<Group>,
      required: true,
    },
  },
  setup(props) {
    let groupComponents: any = []; /** !!! Fix this Type */
    for (const key in props.group.components) {
      groupComponents.push(
        h("nci-component", {
          props: {
            component: props.group.components[key] as CoreComponentType,
          },
        })
      );
    }
    return () => h("div", { class: props.group.styles }, [groupComponents]);
  },
});

export default nciGroup;
</script>
