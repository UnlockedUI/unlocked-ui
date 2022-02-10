export const installComponent = (Components: any) => {
  Components.install = (app: any): void => {
    // structure as array in case any extras need adding to parameters
    for (const component of [Components]) {
      console.log(component)
      app.component(component.name as string, component)
    }
  }

  return Components
}