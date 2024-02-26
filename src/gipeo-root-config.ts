import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@gipeo/mf-persona",
  app: () => System.import<LifeCycles>("@gipeo/mf-persona"),
  activeWhen: ["/mf-persona"],
});

registerApplication({
  name: "@gipeo/mf-angular",
  app: () => System.import<LifeCycles>("@gipeo/mf-angular"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@gipeo/mf-rol",
  app: () => System.import<LifeCycles>("@gipeo/mf-rol"),
  activeWhen: ["/mf-rol"],
});

start({
  urlRerouteOnly: true,
});
