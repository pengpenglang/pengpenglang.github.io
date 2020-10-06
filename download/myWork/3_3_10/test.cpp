#include "test.h"
#include<iostream>
using namespace std;

Test::Test():Test(1){
    cout<<"Constructor without parameter!\n";
}

Test::Test(int x):Test(x,10){
    cout<<"Constructor with 1 parameter!\n";
}

Test::Test(int x,int y):a(x),b(y){
    cout<<"Constructor with 2 paramter!\n";
}

void Test::output() const{
    cout<<a<<' '<<b<<endl;
}
