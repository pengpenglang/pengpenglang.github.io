#include <iostream>
#include "test.h"

using namespace std;

signed main()
{
    Test t;
    t.output();
    t=4;
    t.output();
    return 0;
}
/*output:
 * x:1
 * x:4
 */
