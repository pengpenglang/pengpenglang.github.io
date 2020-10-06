#include<bits/stdc++.h>
using namespace std;

signed main()
{
    char word[50];
    cout<<"Enter a word:";
    cin>>word;
    for(int i=0;word[i]!='\0';i++){
        if(word[i]>='a'&&word[i]<='z')
            word[i]-=32;
    }
    cout<<"Upper case: "<<word<<endl;
    return 0;
}
/*output:
 * Upper case: HELLO_123
*/
