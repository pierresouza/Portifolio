# 📄 Currículo em LaTeX (ATS-Optimized)

Este diretório contém os templates LaTeX (`.tex`) oficiais do currículo de Pierre Aparecido de Souza, formatados sob as melhores práticas para recrutamento e leitura automatizada por sistemas ATS.

## 📁 Arquivos

- [`cv_pt.tex`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/cv/cv_pt.tex): Versão em Português (1 página exata, calibrada).
- [`cv_en.tex`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/cv/cv_en.tex): Versão em Inglês (1 página exata, calibrada).

---

## 🚀 Como funciona a Automação

### 1. Compilação Automática na Nuvem (GitHub Actions)
Você não precisa ter compiladores LaTeX pesados instalados na sua máquina local:
1. Quando você editar qualquer arquivo dentro da pasta `cv/` e fizer `git push`, o workflow [`.github/workflows/compile-cv.yml`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/.github/workflows/compile-cv.yml) roda automaticamente no GitHub.
2. O runner compila os arquivos `.tex` para PDF com alta precisão tipográfica.
3. O workflow atualiza automaticamente os arquivos em `public/pierresouza_PTBR.pdf` e `public/pierresouza_EN.pdf`.
4. A Netlify detecta o novo commit e publica os PDFs no ar imediatamente!

### 2. Compilação Local (Opcional)
Se preferir compilar localmente na sua máquina:
```bash
npm run build-cv
```

---

## 🔄 Como adicionar um novo cargo no LinkedIn e no Portfólio

Quando você assumir uma nova posição no LinkedIn:
1. **No Portfólio Web:** Adicione o novo bloco em [`app/experience/mock.ts`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/app/experience/mock.ts) e as descrições em `messages/pt.json` e `messages/en.json`.
2. **No Currículo LaTeX:** Adicione o bloco `\resumeSubheading` em [`cv/cv_pt.tex`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/cv/cv_pt.tex) e [`cv/cv_en.tex`](file:///c:/Users/pierr/Documents/trabalho/Portifolio/cv/cv_en.tex).
3. Faça o commit e envie:
   ```bash
   git add .
   git commit -m "feat: adicionar nova experiência profissional"
   git push
   ```
O portfólio web e o PDF para download estarão 100% atualizados e sincronizados em poucos minutos!

