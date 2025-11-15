# Como fazer deploy no cPanel

## Passo 1: Exportar o projeto para GitHub
1. Clique no botão GitHub no canto superior direito do Lovable
2. Conecte sua conta GitHub e faça push do projeto

## Passo 2: Fazer build localmente
1. Clone o repositório no seu computador
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Faça o build do projeto:
   ```bash
   npm run build
   ```
4. Os arquivos prontos para deploy estarão na pasta `dist/`

## Passo 3: Upload para o cPanel
1. Acesse o File Manager do seu cPanel
2. Navegue até a pasta `public_html` (ou a pasta raiz do seu domínio)
3. Faça upload de **todos os arquivos e pastas** da pasta `dist/`
   - index.html
   - assets/
   - .htaccess (importante para o roteamento funcionar)
   - Todos os outros arquivos

## Notas importantes
- O arquivo `.htaccess` é essencial para o roteamento funcionar corretamente
- Certifique-se de fazer upload de todos os arquivos, incluindo os ocultos
- Se você colocar em uma subpasta, atualize o `base` no vite.config.ts para o caminho correto

## Alternativa: Deploy automático com Lovable
O Lovable oferece deploy automático e gratuito. Basta clicar em **Publish** no canto superior direito e seu site estará online em segundos!
