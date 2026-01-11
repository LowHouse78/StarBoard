# Build script for GitHub Pages deployment
Write-Host "Building for GitHub Pages..." -ForegroundColor Cyan

# Build the Angular application
ng build --configuration production

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Flattening build output..." -ForegroundColor Cyan

# Move files from docs/browser to docs/
if (Test-Path "docs\browser") {
    Copy-Item -Path "docs\browser\*" -Destination "docs\" -Recurse -Force
    Remove-Item -Path "docs\browser" -Recurse -Force
}

# Create .nojekyll file
New-Item -Path "docs\.nojekyll" -ItemType File -Force | Out-Null
Write-Host "Created .nojekyll file" -ForegroundColor Green

# Verify critical files
$criticalFiles = @(
    "docs\index.html",
    "docs\.nojekyll",
    "docs\assets\mock-data\livesession-parameter.json",
    "docs\assets\mock-data\livesession-parameter-limits.json"
)

Write-Host "`nVerifying build output..." -ForegroundColor Cyan
$allFilesPresent = $true

foreach ($file in $criticalFiles) {
    if (Test-Path $file) {
        Write-Host "  OK $file" -ForegroundColor Green
    } else {
        Write-Host "  MISSING $file" -ForegroundColor Red
        $allFilesPresent = $false
    }
}

if ($allFilesPresent) {
    Write-Host "`nBuild completed successfully! Ready to deploy to GitHub Pages." -ForegroundColor Green
} else {
    Write-Host "`nBuild completed with warnings. Some files are missing." -ForegroundColor Yellow
}
