#include<iostream>
#include "test.h"
using namespace std;

Test::Test(){
    cout<<"Default Constructor\n";
}

Test::Test(int xx):x(xx){
    cout<<"Int Constructor\n";
}

Test::Test(const Test &t):x(t.x){
    cout<<"Copy Constructor\n";
}
