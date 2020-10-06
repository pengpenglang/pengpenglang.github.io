
#include "person.h"
#include<iostream>

using namespace std;

Person::Person(string name, int age){
    this->name=name;
    this->age=age;
    cout<<"Hello,"<<name<<" is coming!"<<endl;
}

Person::~Person(){
    cout<<"Bye! My name is "<<name<<",I'm "<<age<<" years old."<<endl;
}

void Person::growup(){
    age++;
}

