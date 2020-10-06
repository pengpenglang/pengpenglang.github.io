#include<bits/stdc++.h>
using namespace std;

double func(double pData[],int size);

signed main()
{
    double array[]{2.2,3.8,6,5.4};
    cout<<"Result:"<<func(array,4)<<endl;
    cout<<"Result:"<<func(array,3)<<endl;
    return 0;
}

double func(double pData[],int size){
    double result=0;
    int i;
    for(i=0;i<size;++i)
        result+=pData[i];
    result/=size;
    return result;
}
/*output:
 * 4.35
 * 4
 */
