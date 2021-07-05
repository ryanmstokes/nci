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

/** INDEX PAGE COOMPONENT */
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

    //** Construct Page */
    const buildPage = (page: any) => {
      return h("nci-page", { props: { page: page } });
    };
    const pageData = computed(() => {
      return typedStore.config.pages![route];
    });

    //** Return template Data */
    return () => buildPage(pageData.value);
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
