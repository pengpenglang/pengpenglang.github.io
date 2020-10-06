#include "complex.h"
#include<bits/stdc++.h>
using namespace std;

Complex::Complex(){
    real=image=0;
}

Complex::Complex(double n):
    real(n),image(0){}

Complex::Complex(double n,double d):
    real(n),image(d){}

void Complex::setValue(double n, double d){
    real=n,image=d;
}

double Complex::getReal() const{
    return real;
}

double Complex::getImage() const{
    return image;
}

double Complex::getDistance() const{
    return sqrt(real*real+image*image);
}

void Complex::output() const{
    cout<<real;
    if(image==0){
        cout<<endl;
        return ;
    }
    else{
        if(image>0)cout<<'+'<<image<<'i'<<endl;
        else cout<<image<<'i'<<endl;
    }
}

Complex Complex::add(const Complex &c) const{
    Complex newComplex;
    newComplex.real=real+c.real;
    newComplex.image=image+c.image;
    return newComplex;
}

Complex Complex::multiply(const Complex &c) const{
    Complex newComplex;
    newComplex.real=real*c.real-image*c.image;
    newComplex.image=c.real*image+real*c.image;
    return newComplex;
}


