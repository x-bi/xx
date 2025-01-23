interface Route {
  order: number;
  routes: any[];
}
export async function loadRoutes(): Promise<any[]> {
  const modules = import.meta.glob('../routesStatic/*.ts');
  let routeModules: Route[] = [];
  for (const path in modules) {
    const module: any = await modules[path]();
    console.log(7874,module);

    routeModules = routeModules.concat(module.routes)

  }

  return routeModules
    .sort((a, b) => a.order - b.order)
    .map(m => m.routes)
    .flat();
}
