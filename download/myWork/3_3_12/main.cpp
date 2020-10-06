#include <iostream>
#include<vector>
#include "element.h"
using namespace std;

int main()
{
    vector<Element> vec;
    vec.reserve(10);
    vec.push_back(Element(3));
    Element e(5);
    vec.push_back(e);
    return 0;
}
/*output:
 * Move copy constructor!
 * Copy constructor!
 */
