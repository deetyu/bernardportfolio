// Resolves every image in src/assets/projects by filename (without extension).
const modules = import.meta.glob("../assets/projects/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const assetPointers = import.meta.glob("../assets/projects/*.asset.json", {
  eager: true,
  import: "default",
}) as Record<string, { url: string }>;

export const projectImage = (name: string): string | undefined => {
  const pointer = Object.entries(assetPointers).find(([path]) =>
    path.endsWith(`/${name}.jpg.asset.json`)
  );
  if (pointer) return pointer[1].url;
  const entry = Object.entries(modules).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "") === name;
  });
  return entry?.[1];
};
