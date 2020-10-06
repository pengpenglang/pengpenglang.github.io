#include<bits/stdc++.h>
using namespace std;

int getMax(int *array,int size){
    int maxx=array[0];
    for(int i=0;i<size;i++)
        maxx=max(array[i],maxx);
    return maxx;
}

signed main(){
    int array[5]={0,1,2,3,4};
    cout<<getMax(array,5)<<endl;
    return 0;
}
/*output:
 * 4
*/
