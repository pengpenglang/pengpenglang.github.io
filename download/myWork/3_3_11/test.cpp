#include "test.h"
#include<iostream>
using namespace std;

Test::Test(){
    cout<<"Default constructor!\n";
}

Test::Test(int x):a(x){
    cout<<"Constructor!\n";
}

Test::Test(const Test &t){
    a=t.a;
    cout<<"Copy constructor!\n";
}

Test::Test(Test &&t){
    a=t.a;
    cout<<"move copy constructor!\n";
}

Test fun(){
    return Test(3);
}
