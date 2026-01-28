$icons = @{
    "assets\icons\wifi.png" = "https://img.icons8.com/ios-filled/50/ffffff/wifi--v1.png"
    "assets\icons\volume.png" = "https://img.icons8.com/ios-filled/50/ffffff/high-volume--v1.png"
    "assets\icons\battery.png" = "https://img.icons8.com/ios-filled/50/ffffff/battery-.png"
}

foreach ($path in $icons.Keys) {
    try {
        $url = $icons[$path]
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
        Write-Host "Downloaded $path"
    } catch {
        Write-Host "Failed to download $path from $url"
    }
}
