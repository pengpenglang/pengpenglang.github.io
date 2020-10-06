#include<bits/stdc++.h>
using namespace std;

int sum(int a,int b=1,int c=3){
    return a+b+c;
}

signed main()
{
    int sum(int a,int b=3,int c=4);//相当于重新声明了sum
    cout<<sum(2)<<endl;
    cout<<sum(2,5)<<endl;
    cout<<sum(2,3,6)<<endl;
    return 0;
}
/*output:
 * 9
 * 11
 * 11
 */
