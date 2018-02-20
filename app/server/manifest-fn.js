import publisher from "@quintype/framework/server/publisher-config";

export function manifestFn(config) {
  const theme = publisher.publisher_theme[config['publisher-name']] || {};

  return Promise.resolve({
    "theme_color": theme.primary_color || "#2f73e4"
  });
}
