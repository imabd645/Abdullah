try {
    Invoke-WebRequest -Uri 'https://img.icons8.com/color/48/000000/console.png' -OutFile 'assets\icons\terminal.png' -ErrorAction Stop
    Write-Host "Download Complete"
} catch {
    Write-Host "Error downloading: $_"
}
