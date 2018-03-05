import publisher from "@quintype/framework/server/publisher-config";

export function manifestFn(config) {
  const theme = publisher.publisher_theme[config['publisher-name']] || {};

  const manifest = {
    "theme_color": theme.primary_color || "#2f73e4"
  };

  if(theme['amp_logo']) {
    manifest.icons = [
      Object.assign({
        type: "image/png",
        sizes: "512x512"
      }, theme['amp_logo'])
    ];
  }

  return Promise.resolve(manifest);
}
