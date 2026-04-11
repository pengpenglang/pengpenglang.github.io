$ErrorActionPreference = "Stop"

$rubyBin = "C:\Ruby31-x64\bin"
if (-not (Test-Path $rubyBin)) {
    throw "Ruby 3.1 not found at $rubyBin"
}

$env:PATH = "$rubyBin;$env:PATH"

& "$rubyBin\bundle.bat" exec jekyll serve --livereload --host 127.0.0.1
