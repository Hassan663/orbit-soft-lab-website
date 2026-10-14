// Per-icon deep imports (lucide-react ships no types for these paths).
declare module "lucide-react/dist/esm/icons/*" {
  import type { LucideIcon } from "lucide-react";
  const Icon: LucideIcon;
  export default Icon;
}
