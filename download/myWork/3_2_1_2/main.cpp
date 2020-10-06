#include<bits/stdc++.h>
#include "testclass.h"
using namespace std;

signed main()
{
    TestClass t1(10),t2(t1),t3;
    t3=fooFun(t1);
    return 0;
}
/*output:
 * Value: 10, Constructed!
 * Value: 10, Copy Constructed!
 * Value: 0, Constructed!
 * Value: 10, Copy Constructed!
 * Value: 20, Copy Constructed!
 * Value: 20, Distructed!
 * Value: 20, Distructed!
 * Value: 20, Distructed!
 * Value: 10, Distructed!
 * Value: 10, Distructed!
*/
