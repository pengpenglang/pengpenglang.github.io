#include "test.h"
#include<iostream>
using namespace std;

Test::Test(int xx):
    x(xx){}

void Test::output() const{
    cout<<"x:"<<x<<endl;
}

