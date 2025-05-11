# LAB GIT 1

## 1. Crear un repositorio en local

1. Abro Gitbash
2. Creo nuevo directorio para el repositorio: `mkdir prueba`
3. `cd prueba`
4. `git init`

## 2. Subir el repositorio a GitHub

1. Creo repositorio público con nombre "prueba", el resto por defecto. Copio URL:  
   `https://github.com/skcna2/prueba.git`
2. Enlazo local con repositorio remoto:  
   `git remote add origin https://github.com/skcna2/prueba.git`  
   Compruebo que se agregó:  
   `git remote -v`

## 3. Hacer un commit y un Push

1. Creo y subo archivo README.md:  
   `touch README.md`  
   `git add README.md`  
   `git commit -m "primer commit"`  
   `git branch -M main`  
   `git push -u origin main`
2. Creo fichero y agrego a Stagging:  
   `touch stagging.html`  
   `git add stagging.html`  
   Compruebo que el fichero está en staging:  
   `git status`  
   Confirmo cambios:  
   `git commit -m "subida html"`  
   Subo cambios:  
   `git push`

## 4. Crear una rama

1. Crea una rama nueva llamada "development":  
   `git branch development`
2. Cambia a la nueva rama:  
   `git switch development`
3. Realiza algunos cambios en los archivos
   ok
4. Añade y haz commit con los cambios:  
   `git add .`  
   `git commit -m "Cambios final"`
5. Sube los cambios a GitHub:  
   `git push -u origin development`  
   _(El parámetro `-u` hace que git recuerde la rama)_

## 5. Hacer un merge

1. Vuelve a la rama principal:  
   `git switch main`  
   `git pull origin main` _(Traigo los últimos cambios por si acaso)_
2. Haz merge de la rama "development" a "main":  
   `git merge development`
3. Si no hay conflictos, los cambios se incorporarán a "main"
4. Sube los cambios a GitHub:  
   `git push origin main`

**Nota:** La rama principal puede llamarse "main" o "master" según cómo se haya configurado el repositorio.
