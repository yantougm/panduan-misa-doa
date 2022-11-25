psbook buku-lingkungan-2010.ps tmp1.ps
psnup -n2 -H8.5in -W6.5in  -pfolio tmp1.ps tmp2.ps
ps2pdf -sPAPERSIZE=legal tmp2.ps
