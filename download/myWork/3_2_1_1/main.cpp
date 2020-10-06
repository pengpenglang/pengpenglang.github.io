#include<bits/stdc++.h>
#include "mouse.h"
#include "cat.h"
using namespace std;

signed main()
{
    Cat cat("Black cat Detective");
    Mouse *pMouse1=new Mouse("Micky");
    cout<<Mouse::mouseNum<<" mouse left.\n";
    Mouse *pMouse2=new Mouse("Xiaohua");
    cout<<Mouse::mouseNum<<" mouse left.\n";
    cat.catchMouse(pMouse2);
    cout<<Mouse::mouseNum<<" mouse left.\n";
    cat.catchMouse(pMouse1);
    cout<<Mouse::mouseNum<<" mouse left.\n";
    return 0;
}
/*output:
 * Black cat Detective is coming!
 * Micky is born!
 * 1 mouse left.
 * Xiaohua is born!
 * 2 mouse left.
 * I catch you!I never want to see you again.Xiaohua!
 * Xiaohua is gone...
 * 1 mouse left.
 * I catch you!I never want to see you again.Micky!
 * Micky is gone...
 * 0 mouse left.
 */

