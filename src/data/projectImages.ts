// Resolves every image in src/assets/projects by filename (without extension).
const modules = import.meta.glob("../assets/projects/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const projectImage = (name: string): string | undefined => {
  const entry = Object.entries(modules).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "") === name;
  });
  return entry?.[1];
};
