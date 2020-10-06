#include <iostream>
#include "point.h"
using namespace std;

signed main()
{
    Point p1(3,4);
    Point p2(5,2);
    double distance=p1.getDistance(p2);
    cout<<"Distance: "<<distance<<endl;
    return 0;
}
/*output:
 * Distance: 2.82843
 */
