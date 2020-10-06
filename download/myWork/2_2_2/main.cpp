#include"complex.h"
#include<bits/stdc++.h>
using namespace std;

signed main()
{
    //debug
    Complex c1, c2(2), c3(3,4);
    c1.output();
    c2.output();
    c3.output();
    c1.setValue(6, 4);
    c1.output();
    cout<<c1.getDistance( )<<endl;
    return 0;
}
/*output:
 * 0
 * 2
 * 3+4i
 * 6+4i
 * 7.211
 */
