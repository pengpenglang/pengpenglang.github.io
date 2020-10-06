#include <iostream>
#include "triangle.h"
using namespace std;

//Use the 3_2_4_2 Point,Member function version
signed main()
{
    Point p1(0,0),p2(0,3),p3(4,0);
    Triangle t(p1,p2,p3);
    cout<<"Area: "<<t.getArea()<<endl;
    cout<<"Perimeter: "<<t.getPerimeter()<<endl;
    return 0;
}
/*output:
 * Area: 6
 * Perimeter: 12
 */
