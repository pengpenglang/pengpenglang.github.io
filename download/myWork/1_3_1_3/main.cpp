#include<bits/stdc++.h>
using namespace std;

int gcd(int m,int n){
    if(n==0)return m;
    return gcd(n,m%n);
}

signed main(){
    cout<<"1:"<<gcd(20,8)<<endl;
    cout<<"2:"<<gcd(36,64)<<endl;
    return 0;
}
/*output:
 * 1:4
 * 2:4
*/
