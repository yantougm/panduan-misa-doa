psbook buku-lingkungan-2010.ps tmp1.ps
psnup -n2 -H215mm -W148.5mm  -pa4 tmp1.ps tmp2.ps
ps2pdf -sPAPERSIZE=a4 tmp2.ps
