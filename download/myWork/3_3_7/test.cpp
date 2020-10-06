#include "test.h"
#include<iostream>
using namespace std;

int Test::i=0;

Test::Test(){
    cout<<"Hello: "<<++i<<endl;
}
