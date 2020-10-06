#include<bits/stdc++.h>
using namespace std;

char & elem(char *s,int n){
    return s[n];
}

signed main()
{
    char str[]="Hello World";
    elem(str,1)='A';
    cout<<str<<endl;
    return 0;
}
/*output:
 * HAllo World
 * /
