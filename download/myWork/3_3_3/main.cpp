#include <iostream>
#include "dog.h"
using namespace std;

int main()
{
    Dog dog;
    Dog *pdog=new Dog();
    delete pdog;
    cout<<Dog::number<<endl;
    return 0;
}
/*output:
 * New Dog
 * New Dog
 * A Dog Die
 * 1
 * A Dog Die
 */
