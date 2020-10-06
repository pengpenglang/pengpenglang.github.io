#include<bits/stdc++.h>
using namespace std;

class TestClass{
    public:
        TestClass(){
            cout<<"Constructed!\n";
        }
        ~TestClass(){
            cout<<"Destructed!\n";
        }
};

signed main()
{
    TestClass t1;
    TestClass *p;
    p=new TestClass;
    delete p;
    return 0;
}
/*output:
 * Constructed!
 * Constructed!
 * Destructed!
 * Destructed!
*/
