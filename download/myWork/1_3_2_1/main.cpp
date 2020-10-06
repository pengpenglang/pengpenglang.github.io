#include<bits/stdc++.h>
using namespace std;

void reverse(int array[],int size){
    int tot[size];
    for(int i=0;i<size;i++)
        tot[i]=array[size-i-1];
    for(int i=0;i<size;i++)
        array[i]=tot[i];
}

signed main()
{
    int array[5]={0,1,2,3,4};
    reverse(array,5);
    for(int i=0;i<5;i++)
        cout<<array[i]<<' ';
    return 0;
}
/*output:
 * 4,3,2,1,0
*/
