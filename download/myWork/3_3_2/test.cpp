#include<iostream>
#include "test.h"
using namespace std;

Test::Test(){
    cout<<"Default constructor."<<endl;
}

Test::Test(const Test &t){
     cout<<"Copy constructor!"<<endl;
}

void fun(Test p){}
