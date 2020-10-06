#include<bits/stdc++.h>
#include "complex.h"
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
    Complex c4=c1.add(c2);
    c4.output();
    Complex c5=c1.multiply(c3);
    c5.output();
    return 0;
}

/*output:
 * 0
 * 2
 * 3+4i
 * 6+4i
 * 7.2111
 * 8+4i
 * 2+36i
 */
