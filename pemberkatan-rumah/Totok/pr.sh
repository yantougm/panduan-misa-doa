latex $1
dvips $1.dvi  
psbook $1.ps > temp1.ps
psnup -2 temp1.ps > temp2.ps
ps2pdf temp2.ps $1-buku.pdf
