Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap 'd:\Front End\Personal Portfolio Website\assets\bskap\zi_wbk_1.png'
$color = $bmp.GetPixel(0,0)
Write-Output ('#' + $color.R.ToString('X2') + $color.G.ToString('X2') + $color.B.ToString('X2'))
