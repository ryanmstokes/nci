<script lang="ts">
/** Import utilities from Vue3 Composition API */
import {
  defineComponent,
  computed,
  useStore,
  useRoute,
  useRouter,
  h,
} from "@nuxtjs/composition-api";

/** Import app config file */
import appConfig from "@/nci/app/appConfig";

/** INDEX PAGE COMPONENT */
/**
 * Component that generates the applications pages.
 * @function Index
 */
export default defineComponent({
  name: "Index",
  setup() {
    /** Set up store */
    const typedStore = useStore().app.$accessor;
    if (process.server) {
      typedStore?.config.initApp(appConfig);
    }

    //** Get Route */
    const route = useRoute().value.params.index;
    const pageData = computed(() => {
      return typedStore.config.pages![route];
    });

    let routes = useRouter().options.routes;

    const navData = computed(() => {
      return {
        design: typedStore.config.nav,
        routes: routes,
      };
    });

    //** Return template Data */
    return () =>
      h("nci-page", { props: { page: pageData.value, nav: navData.value } });
  },
});
</script>
<style>
/* ./src/index.css */

html,
body,
#__nuxt,
#__layout,
main,
.page {
  width: 100%;
}
</style>
