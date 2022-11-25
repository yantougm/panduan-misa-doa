pdfbook $1.pdf
pdftk A=$1-book.pdf shuffle Aoddsouth Aevennorth output $1-tegak.pdf
pdfjam --landscape $1-tegak.pdf '1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10' -o $1-tegak-dbl.pdf
pdfjam --nup 1x2 --no-landscape $1-tegak-dbl.pdf -o $1-final.pdf
