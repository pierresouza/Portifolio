const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const binTectonic = path.join(rootDir, "bin", "tectonic.exe");
const cvDir = path.join(rootDir, "cv");
const publicDir = path.join(rootDir, "public");

function compileWithTectonic(texFile, outFileBase) {
  const texPath = path.join(cvDir, texFile);
  if (!fs.existsSync(texPath)) {
    console.error(`File not found: ${texPath}`);
    return false;
  }

  if (fs.existsSync(binTectonic)) {
    console.log(`Compiling ${texFile} using local Tectonic...`);
    const res = spawnSync(binTectonic, ["-o", publicDir, texPath], {
      stdio: "inherit",
    });

    if (res.status === 0) {
      const generatedPdf = path.join(
        publicDir,
        path.basename(texFile, ".tex") + ".pdf",
      );
      if (fs.existsSync(generatedPdf)) {
        const dest1 = path.join(publicDir, `${outFileBase}.pdf`);
        const dest2 = path.join(
          publicDir,
          `${outFileBase.toLowerCase()}.pdf`,
        );
        fs.copyFileSync(generatedPdf, dest1);
        fs.copyFileSync(generatedPdf, dest2);
        console.log(`✓ Saved ${dest1}`);
        return true;
      }
    }
  }

  console.log(
    `Note: If Tectonic is not installed locally, GitHub Actions compiles the LaTeX files automatically upon push.`,
  );
  return false;
}

console.log("=== Compiling LaTeX Resumes ===");
compileWithTectonic("cv_pt.tex", "Pierresouza_PTBR");
compileWithTectonic("cv_en.tex", "Pierresouza_EN");
console.log("Done!");

