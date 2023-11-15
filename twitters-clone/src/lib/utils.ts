import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*es necesario antes de instalar los comopnentes verificar si existe 
el archivo components.json, si no existe debes ir a esta pagina
- https://ui.shadcn.com/docs/components-json
luego debves isntalar esto
- npx shadcn-ui@latest init
contestar las siguientes pregunats 
√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... app/globals.css
√ Would you like to use CSS variables for colors? ... no / yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed.

una vez heco esto y con la carpeta UI creada entonces ya podremos instalar componentes de la pagina
ej:
https://ui.shadcn.com/docs/components/button

*/