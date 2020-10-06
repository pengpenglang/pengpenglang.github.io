#include <iostream>
#include <string>
#include "person.h"
using namespace std;

signed main()
{
    Person p("zhang",1);
    for(int i=0;i<90;++i)
        p.growup();
    return 0;
}
/*output:
 * Hello,zhang is coming!
 * Bye! My name is zhang,I'm 91 years old.
 */
