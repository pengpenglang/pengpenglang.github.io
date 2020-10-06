#include "testclass.h"
#include<bits/stdc++.h>
using namespace std;

TestClass::TestClass(int newValue){
    value=newValue;
    cout<<"Value: "<<value<<", Constructed!\n";
}

TestClass::TestClass(const TestClass &rhs) {
    value=rhs.value;
    cout<<"Value: "<<value<<", Copy Constructed!\n";
}

TestClass::~TestClass(){
    cout<<"Value: "<<value<<", Distructed!\n";
}

void TestClass::setValue(int newValue){
    value=newValue;
}

int TestClass::getValue()const{
    return value;
}

TestClass fooFun(TestClass t){//a define function of TestClass
    t.setValue(20);
    return t;
}
