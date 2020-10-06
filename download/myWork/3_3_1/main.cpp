#include <iostream>
#include "example.h"
using namespace std;

signed main()
{
    Example x(10);
    cout<<sqrt_it(x)<<endl;
    return 0;
}
/*output:
 * Constructing.
 * 100
 * Destructing.
 * Destructing.
 */

