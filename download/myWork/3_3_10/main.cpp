#include <iostream>
#include "test.h"
using namespace std;

signed main()
{
    Test t;
    t.output();
    Test t1(3,5);
    t1.output();
    return 0;
}
/*output:
 * Constructor with 2 paramter!
 * Constructor with 1 parameter!
 * Constructor without parameter!
 * 1 10
 * Constructor with 2 paramter!
 * 3 5
 */
