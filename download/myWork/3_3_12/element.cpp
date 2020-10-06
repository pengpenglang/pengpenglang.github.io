#include "element.h"
#include<iostream>
using namespace std;

Element::Element(int e):a(e){}

Element::Element(const Element &e):Element(e.a){
    cout<<"Copy constructor!\n";
}

Element::Element(Element &&e):Element(e.a){
    cout<<"Move copy constructor!\n";
}
