namespace xxx{
    double fun(double a,double b){
        return a+b;
    }
}

namespace yyy{
    double fun(double a,double b){
        return (a+b)/2;
    }
}

#include<bits/stdc++.h>
using namespace std;
using namespace yyy;

signed main(){
    cout<<fun(1,4)<<endl;
    using xxx::fun;
    cout<<fun(1,4)<<endl;
    cout<<yyy::fun(1,4)<<endl;
    return 0;
}
/*output:
 * 2.5
 * 5
 * 2.5
*/
