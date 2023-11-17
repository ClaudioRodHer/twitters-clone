# twitters-clone
npx create-react-app my-app

-- se instalaron los siguiebntos comandos para complementar el proyecto:

npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

-----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------
sources:https://ui.shadcn.com/docs/installation/manual

es necesario antes de instalar los comopnentes verificar si existe 
el archivo components.json, si no existe debes ir a esta pagina

- https://ui.shadcn.com/docs/components-json
luego debves instalar esto
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

*********IMPORTANTE*********
todas lkas instalaciones deben ser dentro de la carpeta del proyecto

-----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Auth: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
comand:
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js


-----------------------------------------------------------------------------------------------------------------------------------------------------------

S i al ejecutar el sigueinte comando: supabase init copmo a continuacion aparece erl sig error

PS E:\DEVELOPMENT\twitters-clone\twitters-clone> supabase init    
supabase : El término 'supabase' no se reconoce como nombre de un cmdlet, función, 
archivo de script o programa ejecutable. Compruebe si escribió correctamente el 
nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e 
inténtelo de nuevo.
En línea: 1 Carácter: 1
+ supabase init
+ ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (supabase:String) [], CommandNotFound 
   Exception
    + FullyQualifiedErrorId : CommandNotFoundException

debemos ejecutar el comando de la sig manera: npx supabase init

PS E:\DEVELOPMENT\twitters-clone\twitters-clone> npx supabase init   
Need to install the following packages:
  supabase@1.112.0
Ok to proceed? (y) y
Generate VS Code workspace settings? [y/N] y
Open the twitters-clone.code-workspace file in VS Code.
Finished supabase init.
una vbez hecho esto pódremos continuar con el proyecto

*liga de resolucion de problema :https://www.reddit.com/r/Supabase/comments/zl8zgz/trying_to_install_supabase_cli/

****NOTA*****
para correr cada comando de supabase debemos correrlo con npx antes del comando, ejemplo:
npx suipabase init
npx supabase start

(I ran into that same issue and it took me forever to figure out I have to prefix any supabase commands with npx. For example: npx supabase login should work directly in the terminal )

-debemos instalar docker antes de correr el supabase start

-----------------------------------------------------------------------------------------------------------------------------------------------------------
debemos instalar docker