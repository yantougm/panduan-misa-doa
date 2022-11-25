import urllib.request
import re, os, sys, getopt
from bs4 import BeautifulSoup
from bs4 import SoupStrainer

'''
url= 'http://www.espnfc.com/spi/rankings/_/view/fifa/teamId/203/mexico?cc=5901'
page = urllib.request.urlopen(url)
soup = BeautifulSoup(page.read(),'lxml')
rank = soup.find("div", {"class": "rank-box"}).h6.contents
teaminfo = soup.find("div", {"class": "team-info"})
name = teaminfo.h4.contents
rating = teaminfo.ul.p.span.contents
'''

def main(argv):
    if len(argv)==0:
        print('parse-kalit.py -t <tahun> -b <bulan>')
        sys.exit(2)
    opts, args = getopt.getopt(argv,"ht:b:",["tahun=","bulan="])
    for opt, arg in opts:
        if opt == '-h':
            print('parse-kalit.py -t <tahun> -b <bulan>')
            sys.exit()
        elif opt in ("-t", "--tahun"):
            tahun = arg
        elif opt in ("-b", "--bulan"):
            bulan = arg
    print("bulan=",bulan, "tahun=",tahun)
    f=urllib.request.urlopen('http://www.imankatolik.or.id/kalender.php?b='+bulan+'&t='+tahun)
    html = f.read()
    only_td_tags = SoupStrainer("td",{"class": "k_tbl_td"})
    soup = BeautifulSoup(html,'lxml')
    tgl = soup.find_all("div",{"class": "k_tgl"})
    alkitab = soup.find_all("td",{"class": "k_alkitab"})
    kal=[]
    for t in tgl:
        kal +=[t.contents[0]]

    al=[]    
    for r in alkitab:
        x=[]
        for c in r.stripped_strings:
            if re.search('\:',c ):
    #            print(c)
                x += [c]
        al += [x]

    for i in range(0,len(kal)):
        print(kal[i],'\t', sep='',end='')
        for a in al[i]:
            print(a,end=',')
        print(end="\n")

#tag=soup.find_all('td','k_tbl_td')
#for t in tag:
 #   print(t)
#print(soup)

if __name__ == "__main__":
   main(sys.argv[1:]) 
