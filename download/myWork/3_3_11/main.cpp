#include <iostream>
#include "test.h"
using namespace std;

signed main()
{
    Test t;
    Test t2=move(fun());
    return 0;
}
/*output:
 * Default constructor!
 * Constructor!
 * move copy constructor!
 */
