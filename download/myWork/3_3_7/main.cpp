#include <iostream>
#include "test.h"
using namespace std;

signed main()
{
    Test t[2];
    Test *p;
    p=new Test[2];
    return 0;
}
/*output:
 * Hello: 1
 * Hello: 2
 * Hello: 3
 * Hello: 4
 */
