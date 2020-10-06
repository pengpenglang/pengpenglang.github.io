#include<bits/stdc++.h>
using namespace std;

signed main()
{
    char word[50];
    cout<<"Enter a string:";
    cin>>word;
    int pos=0;
    for(int i=0;word[i]!='\0';++i){
        if(word[i]<'0'||word[i]>'9'){
            word[pos]=word[i];
            ++pos;
        }
    }
    word[pos]='\0';
    cout<<"result:"<<word<<endl;
    return 0;
}
/*output:
 * Hello_World
*/

