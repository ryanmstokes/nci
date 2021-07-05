import recurseInject from '../recurseInject'
import config from '@/nci/data/demo'
import theme from '@/nci/theme/default-light'
import { Components, Title } from '@/nci/app/interfaces'
test(`uppercase 'test' to equal 'TEST'`, () => {
  /** Get the title data for the test and inject styles */
  const group = recurseInject(config.pages, theme).about.sections.goodbye.components["group"] //* ????? Should refactor!
  if ("components" in group) {
    let components = group.components as Components;
    if ("title" in components) {
      let title = components.title as Title;
      if ("value" in title) {
        expect(title.value).toBe("Landing Zone") //* ????? Should refactor!
      }
    }
  }
})
