#include<bits/stdc++.h>
using namespace std;

int ff(int *a,int size){
    if(size==1)return a[0];
    return a[size-1]+ff(a,size-1);
}

signed main()
{
    int a[5]={1,2,3,4,5};
    cout<<"result: "<<ff(a,5)<<endl;
    return 0;
}
/*output:
 * 15
 */
